"use client";

import { useState, useCallback, useRef } from "react";
import { compressPdf, readFileAsBytes, downloadBytes, formatBytes, type FileWithData } from "@/lib/pdf-utils";

export default function CompressPage() {
  const [file, setFile] = useState<FileWithData | null>(null);
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [compressionRatio, setCompressionRatio] = useState<number>(0);
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

  const handleCompress = async () => {
    if (!file) return;
    setProcessing(true);
    setError(null);
    const result = await compressPdf(file);
    setProcessing(false);
    if (result.success && result.data) {
      const ratio = Math.round((1 - result.data.length / file.size) * 100);
      setCompressionRatio(ratio);
      downloadBytes(result.data, result.outputName ?? "compressed.pdf");
      setDone(true);
    } else {
      setError(result.error ?? "An unknown error occurred.");
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">PDF → Smaller PDF</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Compress PDF</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Reduce PDF file size while preserving quality. All processing in your browser.
          </p>
        </div>

        {/* Drop Zone */}
        {!file && (
          <div
            className={`drop-zone mb-6 ${dragOver ? "drop-zone-active" : ""}`}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
            }}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
            />
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/50 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-cyan-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-700 dark:text-slate-200">
                  Drop your PDF here, or click to browse
                </p>
                <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">Max 10MB on free plan</p>
              </div>
            </div>
          </div>
        )}

        {/* File Preview */}
        {file && (
          <div className="card p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-700 dark:text-slate-200 truncate">{file.name}</p>
                <p className="text-sm text-slate-400">{formatBytes(file.size)}</p>
              </div>
              <button
                onClick={() => { setFile(null); setDone(false); }}
                className="text-sm text-red-500 hover:text-red-600 font-medium shrink-0"
              >
                Remove
              </button>
            </div>
          </div>
        )}

        {/* Done state */}
        {done && (
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-emerald-700 dark:text-emerald-400 font-semibold">Compressed and downloaded!</p>
                <p className="text-emerald-600 dark:text-emerald-500 text-sm">
                  {compressionRatio > 0 ? `Reduced by ${compressionRatio}%` : "File optimized"}
                </p>
              </div>
            </div>
            <button onClick={() => { setDone(false); setFile(null); }} className="text-sm text-emerald-600 dark:text-emerald-300 underline mt-2">
              Compress another file
            </button>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-6">
            <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Process */}
        {file && !done && (
          <button
            onClick={handleCompress}
            disabled={processing}
            className="btn-primary w-full text-lg py-4 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {processing ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Compressing...
              </span>
            ) : (
              "Compress PDF →"
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
          <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Need bigger files?</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
            Pro supports files up to 200MB with optimized compression algorithms.
          </p>
          <a href="/pricing" className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 dark:text-amber-400 hover:gap-2 transition-all">
            Upgrade to Pro →
          </a>
        </div>
      </div>
    </div>
  );
}
