"use client";

import { useState, useCallback, useRef } from "react";
import { rotatePdf, readFileAsBytes, downloadBytes, formatBytes, type FileWithData } from "@/lib/pdf-utils";

export default function RotatePage() {
  const [file, setFile] = useState<FileWithData | null>(null);
  const [rotation, setRotation] = useState<90 | 180 | 270>(90);
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(async (f: File) => {
    setError(null);
    setDone(false);
    try {
      const data = await readFileAsBytes(f);
      setFile({ name: f.name, size: f.size, data });
    } catch {
      setError("Failed to read the file.");
    }
  }, []);

  const handleRotate = async () => {
    if (!file) return;
    setProcessing(true);
    setError(null);
    const result = await rotatePdf(file, rotation);
    setProcessing(false);
    if (result.success && result.data) {
      downloadBytes(result.data, result.outputName ?? "rotated.pdf");
      setDone(true);
    } else {
      setError(result.error ?? "An unknown error occurred.");
    }
  };

  const rotationOptions: { value: 90 | 180 | 270; label: string; icon: React.ReactNode }[] = [
    {
      value: 90,
      label: "90° CW",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      value: 180,
      label: "180°",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      value: 270,
      label: "90° CCW",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 4v5h-.582m0 0a8.001 8.001 0 01-15.357 2M4 9l4 4m0 0L4 17m4-4H9m11-11v5h.581m0 0a8.003 8.003 0 01-15.357-2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-pink-50 dark:bg-pink-950/50 border border-pink-200 dark:border-pink-800 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-pink-700 dark:text-pink-300">PDF → Rotated</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Rotate PDF</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Rotate all pages or specific pages in a PDF. Choose 90°, 180°, or 270°.
          </p>
        </div>

        {/* Rotation options */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {rotationOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setRotation(opt.value)}
              className={`card p-6 text-center transition-all duration-200 ${
                rotation === opt.value
                  ? "border-pink-400 dark:border-pink-600 bg-pink-50 dark:bg-pink-950/30 shadow-lg shadow-pink-500/10"
                  : "hover:border-pink-200 dark:hover:border-pink-800"
              }`}
            >
              <div className={`mx-auto mb-3 ${rotation === opt.value ? "text-pink-500" : "text-slate-400 dark:text-slate-600"}`}>
                {opt.icon}
              </div>
              <span className={`font-semibold text-sm ${rotation === opt.value ? "text-pink-700 dark:text-pink-300" : "text-slate-600 dark:text-slate-400"}`}>
                {opt.label}
              </span>
            </button>
          ))}
        </div>

        {/* Drop zone */}
        <div
          className={`drop-zone mb-6 ${dragOver ? "drop-zone-active" : ""}`}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]); }}
          onClick={() => fileInputRef.current?.click()}
        >
          <input ref={fileInputRef} type="file" accept=".pdf,application/pdf" className="hidden"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/50 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-700 dark:text-slate-200">Drop your PDF here, or click to browse</p>
              <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">Max 10MB on free plan</p>
            </div>
          </div>
        </div>

        {file && (
          <div className="card p-4 mb-6 flex items-center gap-3">
            <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-slate-700 dark:text-slate-200 text-sm truncate">{file.name}</p>
              <p className="text-xs text-slate-400">{formatBytes(file.size)}</p>
            </div>
            <button onClick={() => setFile(null)} className="text-sm text-red-500 font-medium">Remove</button>
          </div>
        )}

        {done && (
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 mb-6">
            <p className="text-emerald-700 dark:text-emerald-400 font-semibold">✓ Rotated PDF downloaded!</p>
            <button onClick={() => { setDone(false); setFile(null); }} className="text-sm text-emerald-600 dark:text-emerald-300 underline mt-1">Rotate another</button>
          </div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-6">
            <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
          </div>
        )}

        {file && !done && (
          <button onClick={handleRotate} disabled={processing}
            className="btn-primary w-full text-lg py-4 disabled:opacity-60 disabled:cursor-not-allowed">
            {processing ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Rotating...
              </span>
            ) : (
              `Rotate ${rotation}° →`
            )}
          </button>
        )}

        <ProBanner />
      </div>
    </div>
  );
}

function ProBanner() {
  return (
    <div className="mt-8 card p-6 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Need page-by-page rotation?</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Pro lets you rotate individual pages differently — great for scanned documents.</p>
          <a href="/pricing" className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 dark:text-amber-400 hover:gap-2 transition-all">Upgrade to Pro →</a>
        </div>
      </div>
    </div>
  );
}
