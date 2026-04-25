"use client";

import { useState, useCallback, useRef } from "react";
import { extractText, readFileAsBytes, formatBytes, type FileWithData } from "@/lib/pdf-utils";

export default function ExtractTextPage() {
  const [file, setFile] = useState<FileWithData | null>(null);
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(async (f: File) => {
    setError(null);
    setDone(false);
    setText("");
    try {
      const data = await readFileAsBytes(f);
      setFile({ name: f.name, size: f.size, data });
      setLoading(true);
      const result = await extractText({ name: f.name, size: f.size, data });
      setLoading(false);
      if (result.success) {
        setText(result.text ?? "");
        setDone(true);
      } else {
        setError(result.error ?? "Failed to extract text.");
      }
    } catch {
      setLoading(false);
      setError("Failed to read the file.");
    }
  }, []);

  const copyText = () => {
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById("copy-btn");
      if (btn) {
        btn.textContent = "✓ Copied!";
        setTimeout(() => (btn.textContent = "Copy Text"), 2000);
      }
    });
  };

  const downloadText = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = (file?.name.replace(/\.pdf$/i, "") ?? "document") + "_text.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-violet-50 dark:bg-violet-950/50 border border-violet-200 dark:border-violet-800 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-violet-700 dark:text-violet-300">PDF → Text</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Extract Text</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Pull text content out of any PDF. Copy, search, or export as a text file.
          </p>
        </div>

        {/* Drop zone */}
        {!file && (
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
              <div className="w-16 h-16 bg-violet-100 dark:bg-violet-900/50 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-700 dark:text-slate-200">Drop your PDF here, or click to browse</p>
                <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">Max 10MB on free plan</p>
              </div>
            </div>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="card p-8 mb-6 text-center">
            <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-500 dark:text-slate-400">Extracting text from your PDF...</p>
          </div>
        )}

        {/* File info */}
        {file && !loading && (
          <div className="card p-4 mb-6 flex items-center gap-3">
            <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-slate-700 dark:text-slate-200 text-sm truncate">{file.name}</p>
              <p className="text-xs text-slate-400">{formatBytes(file.size)}</p>
            </div>
            <button onClick={() => { setFile(null); setText(""); setDone(false); }} className="text-sm text-red-500 font-medium">Change</button>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-6">
            <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Text output */}
        {text && (
          <div className="card mb-6 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-700 dark:text-slate-200 text-sm">Extracted Text</h3>
              <div className="flex items-center gap-2">
                <button id="copy-btn" onClick={copyText}
                  className="btn-secondary text-sm py-1.5 px-3 flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Text
                </button>
                <button onClick={downloadText}
                  className="btn-primary text-sm py-1.5 px-3 flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download .txt
                </button>
              </div>
            </div>
            <div className="p-4 max-h-96 overflow-y-auto">
              <pre className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-wrap font-mono leading-relaxed">
                {text}
              </pre>
            </div>
          </div>
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
          <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Need OCR for scanned PDFs?</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Pro supports OCR for scanned/image-based PDFs that don't have selectable text.</p>
          <a href="/pricing" className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 dark:text-amber-400 hover:gap-2 transition-all">Upgrade to Pro →</a>
        </div>
      </div>
    </div>
  );
}
