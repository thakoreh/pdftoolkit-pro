import type { Metadata } from "next";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: {
    default: "PDFToolkit Pro — All the PDF Tools You Need in One Place",
    template: "%s | PDFToolkit Pro",
  },
  description:
    "Merge, split, compress, watermark, rotate, and extract text from PDFs. Fast, secure, and works entirely in your browser. No upload needed.",
  keywords: [
    "PDF tools",
    "merge PDF",
    "compress PDF",
    "watermark PDF",
    "split PDF",
    "rotate PDF",
    "PDF editor",
  ],
  authors: [{ name: "PDFToolkit Pro" }],
  creator: "PDFToolkit Pro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pdftoolkit.pro",
    siteName: "PDFToolkit Pro",
    title: "PDFToolkit Pro — All the PDF Tools You Need in One Place",
    description:
      "Merge, split, compress, watermark, rotate, and extract text from PDFs. Fast, secure, browser-based.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDFToolkit Pro — All the PDF Tools You Need in One Place",
    description:
      "Merge, split, compress, watermark, rotate, and extract text from PDFs. Fast, secure, browser-based.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10 dark:border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="font-bold text-lg text-slate-900 dark:text-white">
              PDFToolkit<span className="gradient-text">Pro</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="/tools" className="nav-link">
              Tools
            </a>
            <a href="/pricing" className="nav-link">
              Pricing
            </a>
            <a
              href="https://twitter.com/intent/tweet?text=Check%20out%20PDFToolkit%20Pro%20-%20all%20the%20PDF%20tools%20you%20need%20in%20one%20place!"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Share
            </a>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="/tools" className="btn-primary text-sm py-2 px-4 hidden sm:inline-flex">
              Start Free
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                PDFToolkit<span className="gradient-text">Pro</span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm leading-relaxed">
              The most complete browser-based PDF toolkit. Merge, compress,
              split, watermark, rotate, and extract text — all without uploading
              your files to any server.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <span className="badge badge-free">100% Free Tier</span>
              <span className="badge badge-pro">Pro Available</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
              Tools
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Merge PDF", href: "/tools/merge" },
                { name: "Compress PDF", href: "/tools/compress" },
                { name: "Split PDF", href: "/tools/split" },
                { name: "Watermark", href: "/tools/watermark" },
                { name: "Rotate PDF", href: "/tools/rotate" },
                { name: "Extract Text", href: "/tools/extract-text" },
              ].map((tool) => (
                <li key={tool.href}>
                  <a
                    href={tool.href}
                    className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors"
                  >
                    {tool.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="/pricing" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/#features" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            © 2026 PDFToolkit Pro. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@pdftoolkit.pro"
              className="text-sm text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-sm text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
