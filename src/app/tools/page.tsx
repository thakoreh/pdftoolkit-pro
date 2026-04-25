import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All PDF Tools",
  description:
    "Access all 6 PDF tools: merge, compress, split, watermark, rotate, and extract text. 100% browser-based, no upload needed.",
};

const tools = [
  {
    href: "/tools/merge",
    name: "Merge PDF",
    desc: "Combine multiple PDFs into one file. Drag to reorder pages.",
    color: "from-indigo-500 to-purple-500",
    badge: "Popular",
    badgeColor: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
  },
  {
    href: "/tools/compress",
    name: "Compress PDF",
    desc: "Reduce file size without sacrificing quality. Save storage space.",
    color: "from-cyan-500 to-blue-500",
    badge: "Popular",
    badgeColor: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
  },
  {
    href: "/tools/split",
    name: "Split PDF",
    desc: "Extract specific pages or split a PDF into multiple files.",
    color: "from-emerald-500 to-teal-500",
    badge: null,
    badgeColor: "",
  },
  {
    href: "/tools/watermark",
    name: "Watermark PDF",
    desc: "Add text or image watermarks. Batch apply to all pages.",
    color: "from-amber-500 to-orange-500",
    badge: "Pro",
    badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  },
  {
    href: "/tools/rotate",
    name: "Rotate PDF",
    desc: "Rotate individual pages or all pages. 90°, 180°, 270°.",
    color: "from-pink-500 to-rose-500",
    badge: null,
    badgeColor: "",
  },
  {
    href: "/tools/extract-text",
    name: "Extract Text",
    desc: "Pull text content out of any PDF. Copy, search, or export as TXT.",
    color: "from-violet-500 to-purple-500",
    badge: null,
    badgeColor: "",
  },
];

const icons: Record<string, React.ReactNode> = {
  "/tools/merge": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
  "/tools/compress": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  ),
  "/tools/split": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  "/tools/watermark": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  "/tools/rotate": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  "/tools/extract-text": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
            All PDF Tools
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            6 powerful tools to handle every PDF task. All processing happens in your
            browser — your files never leave your device.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="tool-card group block"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  {icons[tool.href]}
                </div>
                {tool.badge && (
                  <span className={`badge ${tool.badgeColor}`}>{tool.badge}</span>
                )}
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {tool.desc}
              </p>
              <div className="mt-4 flex items-center gap-1 text-indigo-600 dark:text-indigo-400 text-sm font-medium group-hover:gap-2 transition-all">
                Use tool
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
