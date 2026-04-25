"use client";

import { useState, useCallback, useRef } from "react";
import { watermarkPdfText, readFileAsBytes, downloadBytes, formatBytes, type FileWithData } from "@/lib/pdf-utils";

export default function WatermarkPage() {
  const [file, setFile] = useState<FileWithData | null>(null);
  const [text, setText] = useState("CONFIDENTIAL");
  const [opacity, setOpacity] = useState(15);
  const [fontSize, setFontSize] = useState(48);
  const [rotation, setRotation] = useState(-45);
  const [position, setPosition] = useState<"center" | "diagonal" | "tile">("diagonal");
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

  const handleApply = async () => {
    if (!file || !text.trim()) return;
    setProcessing(true);
    setError(null);
    const result = await watermarkPdfText(file, text, { opacity: opacity / 100, fontSize, rotation, position });
    setProcessing(false);
    if (result.success && result.data) {
      downloadBytes(result.data, result.outputName ?? "watermarked.pdf");
      setDone(true);
    } else {
      setError(result.error ?? "An unknown error occurred.");
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 rounded-full px-4 py-1.5 mb-4">
            <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" /></svg>
            <span className="text-sm font-medium text-amber-700 dark:text-amber-300">Pro Feature</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Watermark PDF</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Add text or image watermarks to any PDF. Customize opacity, position, rotation, and more.
          </p>
        </div>

        {/* Pro gate */}
        <div className="card p-8 mb-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Unlock Watermark Tool</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto">
            Add custom text watermarks with full control over opacity, font size, rotation, and placement. Pro users also get image watermarks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a href="https://buy.stripe.com/test_dRmeVd5Nj4k75QUcSD0Jq00" target="_blank" rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4">
              Get Pro — $9/month
            </a>
            <a href="/pricing" className="btn-secondary text-lg px-8 py-4">
              See All Plans
            </a>
          </div>
          <p className="text-sm text-slate-400">7-day free trial · Cancel anytime · $49 lifetime option available</p>
        </div>

        {/* Demo preview */}
        <div className="card p-6 mb-6">
          <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-4 text-sm uppercase tracking-wide">Preview</h3>
          <div className="relative bg-slate-100 dark:bg-slate-800 rounded-xl p-8 min-h-48 overflow-hidden">
            <div className="text-center text-slate-400 dark:text-slate-600 text-sm mb-2">Sample PDF Content</div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span
                className="text-indigo-300 dark:text-indigo-800 font-black"
                style={{
                  fontSize: `${Math.max(12, fontSize * 0.4)}px`,
                  opacity: opacity / 100,
                  transform: `rotate(${rotation}deg)`,
                }}
              >
                {text || "CONFIDENTIAL"}
              </span>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="card p-6 mb-6 space-y-5">
          <div>
            <label className="block font-medium text-slate-700 dark:text-slate-200 text-sm mb-2">Watermark Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}
              placeholder="e.g. CONFIDENTIAL, DRAFT, © 2026"
              className="input-field" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-slate-700 dark:text-slate-200 text-sm mb-2">Opacity: {opacity}%</label>
              <input type="range" min={5} max={50} value={opacity}
                onChange={(e) => setOpacity(parseInt(e.target.value))}
                className="w-full accent-indigo-600" />
            </div>
            <div>
              <label className="block font-medium text-slate-700 dark:text-slate-200 text-sm mb-2">Font Size: {fontSize}px</label>
              <input type="range" min={16} max={96} value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                className="w-full accent-indigo-600" />
            </div>
            <div>
              <label className="block font-medium text-slate-700 dark:text-slate-200 text-sm mb-2">Rotation: {rotation}°</label>
              <input type="range" min={-90} max={90} value={rotation}
                onChange={(e) => setRotation(parseInt(e.target.value))}
                className="w-full accent-indigo-600" />
            </div>
            <div>
              <label className="block font-medium text-slate-700 dark:text-slate-200 text-sm mb-2">Position</label>
              <select value={position} onChange={(e) => setPosition(e.target.value as "center" | "diagonal" | "tile")}
                className="input-field">
                <option value="diagonal">Diagonal</option>
                <option value="center">Center</option>
                <option value="tile">Tile / Repeat</option>
              </select>
            </div>
          </div>
        </div>

        {/* File upload */}
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
            <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-700 dark:text-slate-200">Select PDF file</p>
              <p className="text-sm text-slate-400 dark:text-slate-500">Max 10MB on free plan</p>
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
          </div>
        )}

        {done && (
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 mb-6">
            <p className="text-emerald-700 dark:text-emerald-400 font-semibold">✓ Watermarked PDF downloaded!</p>
            <button onClick={() => { setDone(false); setFile(null); }} className="text-sm text-emerald-600 dark:text-emerald-300 underline mt-1">Watermark another</button>
          </div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-6">
            <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
          </div>
        )}

        {file && !done && (
          <button onClick={handleApply} disabled={processing}
            className="btn-primary w-full text-lg py-4 disabled:opacity-60 disabled:cursor-not-allowed">
            {processing ? "Applying watermark..." : "Apply Watermark →"}
          </button>
        )}
      </div>
    </div>
  );
}
