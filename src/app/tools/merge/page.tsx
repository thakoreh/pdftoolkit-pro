"use client";

import { useState, useCallback, useRef } from "react";
import { mergePdfs, readFileAsBytes, downloadBytes, formatBytes, type FileWithData } from "@/lib/pdf-utils";
import type { Metadata } from "next";

// Tool metadata
export const toolMeta = {
  title: "Merge PDF — Combine Multiple PDFs into One",
  desc: "Combine multiple PDF files into a single document. Drag to reorder, preview, and merge in seconds. 100% browser-based.",
};

export default function MergePage() {
  const [files, setFiles] = useState<FileWithData[]>([]);
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [reorderIdx, setReorderIdx] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(async (fileList: FileList) => {
    setError(null);
    const newFiles: FileWithData[] = [];
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      if (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")) {
        try {
          const data = await readFileAsBytes(file);
          newFiles.push({ name: file.name, size: file.size, data });
        } catch {
          setError(`Failed to read ${file.name}`);
        }
      }
    }
    setFiles((prev) => [...prev, ...newFiles]);
  }, []);

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const moveFile = (from: number, to: number) => {
    setFiles((prev) => {
      const copy = [...prev];
      const [item] = copy.splice(from, 1);
      copy.splice(to, 0, item);
      return copy;
    });
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      setError("Please add at least 2 PDF files to merge.");
      return;
    }
    setProcessing(true);
    setError(null);
    const result = await mergePdfs(files);
    setProcessing(false);
    if (result.success && result.data) {
      downloadBytes(result.data, result.outputName ?? "merged.pdf");
      setDone(true);
    } else {
      setError(result.error ?? "An unknown error occurred.");
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">PDF → PDF</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Merge PDF</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Combine multiple PDFs into one. Drag to reorder pages. All processing happens in your browser.
          </p>
        </div>

        {/* Drop Zone */}
        <div
          className={`drop-zone mb-6 ${dragOver ? "drop-zone-active" : ""}`}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            if (e.dataTransfer.files.length) handleFiles(e.dataTransfer.files);
          }}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,application/pdf"
            multiple
            className="hidden"
            onChange={(e) => e.target.files && handleFiles(e.target.files)}
          />
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-700 dark:text-slate-200">
                Drop PDF files here, or click to browse
              </p>
              <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
                Supports multiple files. Max 10MB on free plan.
              </p>
            </div>
          </div>
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="card p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {files.length} file{files.length !== 1 ? "s" : ""} selected
              </h3>
              <button
                onClick={() => setFiles([])}
                className="text-sm text-red-500 hover:text-red-600 font-medium"
              >
                Clear all
              </button>
            </div>
            <div className="space-y-2">
              {files.map((file, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-xl p-3 group"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-slate-700 dark:text-slate-200 text-sm truncate">{file.name}</p>
                      <p className="text-xs text-slate-400">{formatBytes(file.size)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    {idx > 0 && (
                      <button onClick={() => moveFile(idx, idx - 1)} className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors" title="Move up">
                        <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </button>
                    )}
                    {idx < files.length - 1 && (
                      <button onClick={() => moveFile(idx, idx + 1)} className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors" title="Move down">
                        <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                    <button onClick={() => removeFile(idx)} className="p-1.5 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors opacity-0 group-hover:opacity-100" title="Remove">
                      <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-6">
            <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Done state */}
        {done && (
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 mb-6">
            <p className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">✓ Merged PDF downloaded successfully!</p>
            <button onClick={() => { setDone(false); setFiles([]); }} className="text-sm text-emerald-600 dark:text-emerald-300 underline mt-1">
              Merge more files
            </button>
          </div>
        )}

        {/* Process button */}
        {files.length >= 2 && (
          <button
            onClick={handleMerge}
            disabled={processing}
            className="btn-primary w-full text-lg py-4 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {processing ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Merging...
              </span>
            ) : (
              `Merge ${files.length} PDFs →`
            )}
          </button>
        )}

        {/* Pro upgrade nudge */}
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
          <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Need more power?</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
            Pro lets you merge files up to 200MB with 50 files per batch.
          </p>
          <a
            href="/pricing"
            className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 dark:text-amber-400 hover:gap-2 transition-all"
          >
            Upgrade to Pro →
          </a>
        </div>
      </div>
    </div>
  );
}
