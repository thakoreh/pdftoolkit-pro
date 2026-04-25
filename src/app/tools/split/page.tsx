"use client";

import { useState, useCallback, useRef } from "react";
import { splitPdf, readFileAsBytes, downloadBytes, formatBytes, type FileWithData } from "@/lib/pdf-utils";

export default function SplitPage() {
  const [file, setFile] = useState<FileWithData | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [ranges, setRanges] = useState([{ start: 1, end: 1 }]);
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
      const { PDFDocument } = await import("pdf-lib");
      const pdf = await PDFDocument.load(data);
      const count = pdf.getPageCount();
      setFile({ name: f.name, size: f.size, data });
      setPageCount(count);
      setRanges([{ start: 1, end: Math.min(1, count) }]);
    } catch {
      setError("Failed to read the PDF file.");
    }
  }, []);

  const addRange = () => {
    setRanges((prev) => [...prev, { start: 1, end: pageCount }]);
  };

  const removeRange = (idx: number) => {
    setRanges((prev) => prev.filter((_, i) => i !== idx));
  };

  const updateRange = (idx: number, field: "start" | "end", val: string) => {
    const n = parseInt(val) || 1;
    setRanges((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], [field]: Math.max(1, Math.min(pageCount, n)) };
      return copy;
    });
  };

  const handleSplit = async () => {
    if (!file) return;
    setProcessing(true);
    setError(null);
    const result = await splitPdf(file, ranges);
    setProcessing(false);
    if (result.success && result.data) {
      downloadBytes(result.data, result.outputName ?? "extracted.pdf");
      setDone(true);
    } else {
      setError(result.error ?? "An unknown error occurred.");
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">PDF → Selected Pages</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Split PDF</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Extract specific pages from a PDF. Select ranges or individual pages.
          </p>
        </div>

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
            <input ref={fileInputRef} type="file" accept=".pdf,application/pdf" className="hidden"
              onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-700 dark:text-slate-200">Drop your PDF here, or click to browse</p>
                <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">Max 10MB on free plan</p>
              </div>
            </div>
          </div>
        )}

        {file && (
          <div className="card p-6 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-700 dark:text-slate-200 truncate">{file.name}</p>
                <p className="text-sm text-slate-400">{formatBytes(file.size)} · {pageCount} pages</p>
              </div>
              <button onClick={() => { setFile(null); setDone(false); }} className="text-sm text-red-500 font-medium">Change file</button>
            </div>

            <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
              <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-4 text-sm uppercase tracking-wide">
                Select page ranges to extract
              </h4>
              <div className="space-y-3">
                {ranges.map((range, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-sm text-slate-500 dark:text-slate-400 w-6">#{idx + 1}</span>
                    <div className="flex items-center gap-2 flex-1">
                      <label className="text-sm text-slate-500 dark:text-slate-400">From</label>
                      <input
                        type="number"
                        min={1}
                        max={pageCount}
                        value={range.start}
                        onChange={(e) => updateRange(idx, "start", e.target.value)}
                        className="input-field w-20 py-2 text-center"
                      />
                      <label className="text-sm text-slate-500 dark:text-slate-400">to</label>
                      <input
                        type="number"
                        min={1}
                        max={pageCount}
                        value={range.end}
                        onChange={(e) => updateRange(idx, "end", e.target.value)}
                        className="input-field w-20 py-2 text-center"
                      />
                      <span className="text-xs text-slate-400">({pageCount} pages total)</span>
                    </div>
                    {ranges.length > 1 && (
                      <button onClick={() => removeRange(idx)} className="text-red-500 hover:text-red-600 p-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button onClick={addRange} className="mt-4 text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                + Add another range
              </button>
            </div>
          </div>
        )}

        {done && (
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 mb-6">
            <p className="text-emerald-700 dark:text-emerald-400 font-semibold">✓ Pages extracted and downloaded!</p>
            <button onClick={() => { setDone(false); setFile(null); }} className="text-sm text-emerald-600 dark:text-emerald-300 underline mt-1">Split another file</button>
          </div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-6">
            <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
          </div>
        )}

        {file && !done && (
          <button onClick={handleSplit} disabled={processing}
            className="btn-primary w-full text-lg py-4 disabled:opacity-60 disabled:cursor-not-allowed">
            {processing ? "Extracting..." : "Extract Selected Pages →"}
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
          <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Need more control?</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Pro gives you visual page previews, drag-to-select, and batch splitting.</p>
          <a href="/pricing" className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 dark:text-amber-400 hover:gap-2 transition-all">Upgrade to Pro →</a>
        </div>
      </div>
    </div>
  );
}
