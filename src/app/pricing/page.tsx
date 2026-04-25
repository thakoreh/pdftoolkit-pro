import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — PDFToolkit Pro",
  description: "Start free. Upgrade to Pro for advanced PDF tools, larger files, and batch processing.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
            Simple, honest pricing
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Start free with all 6 tools. Upgrade when you need more power. Cancel
            anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free */}
          <div className="pricing-card">
            <div className="mb-6">
              <div className="badge badge-free mb-3">Free</div>
              <div className="text-5xl font-black text-slate-900 dark:text-white">
                $0 <span className="text-xl font-medium text-slate-400">/mo</span>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              No signup required. All 6 tools, right in your browser.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "All 6 PDF tools",
                "Up to 10MB per file",
                "2 files per batch",
                "Standard processing speed",
                "No watermarks on output",
                "Community support",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                  <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/tools" className="btn-secondary w-full text-center block py-3">
              Get Started Free
            </Link>
          </div>

          {/* Pro Monthly */}
          <div className="pricing-card-featured">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                Most Popular
              </span>
            </div>
            <div className="mb-6">
              <div className="badge badge-pro mb-3">Pro</div>
              <div className="text-5xl font-black text-slate-900 dark:text-white">
                $9 <span className="text-xl font-medium text-slate-400">/mo</span>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              For professionals who work with PDFs every day.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Everything in Free",
                "Up to 200MB per file",
                "50 files per batch",
                "Priority processing speed",
                "Custom text watermarks",
                "Image watermarks",
                "Batch watermark application",
                "Priority email support",
                "7-day free trial",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                  <svg className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="https://buy.stripe.com/test_dRmeVd5Nj4k75QUcSD0Jq00"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center block py-3"
            >
              Start 7-Day Free Trial
            </a>
          </div>

          {/* Lifetime */}
          <div className="pricing-card">
            <div className="mb-6">
              <div className="badge bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 mb-3">
                Lifetime
              </div>
              <div className="text-5xl font-black text-slate-900 dark:text-white">
                $49 <span className="text-xl font-medium text-slate-400">one-time</span>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              Pay once, own it forever. Best value for power users.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Everything in Pro",
                "Unlimited file sizes",
                "Unlimited batch size",
                "All current + future tools",
                "API access (coming soon)",
                "Dedicated support",
                "Lifetime updates",
                "30-day money-back guarantee",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                  <svg className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="https://buy.stripe.com/test_3csdRl5Nj4k71HaeUW0JL1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full text-center block py-3"
            >
              Get Lifetime Access
            </a>
          </div>
        </div>

        {/* Comparison table */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
            Feature comparison
          </h2>
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left p-4 font-semibold text-slate-700 dark:text-slate-200">Feature</th>
                  <th className="text-center p-4 font-semibold text-slate-700 dark:text-slate-200">Free</th>
                  <th className="text-center p-4 font-semibold text-slate-700 dark:text-slate-200 bg-indigo-50/50 dark:bg-indigo-950/20">Pro</th>
                  <th className="text-center p-4 font-semibold text-slate-700 dark:text-slate-200">Lifetime</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["All 6 PDF tools", true, true, true],
                  ["File size limit", "10MB", "200MB", "Unlimited"],
                  ["Batch size", "2 files", "50 files", "Unlimited"],
                  ["Processing speed", "Standard", "Priority", "Fastest"],
                  ["Text watermarks", false, true, true],
                  ["Image watermarks", false, true, true],
                  ["Batch watermarking", false, true, true],
                  ["OCR for scanned PDFs", false, false, true],
                  ["API access", false, false, true],
                  ["Future tools", false, false, true],
                  ["Support", "Community", "Priority email", "Dedicated"],
                ].map(([feature, free, pro, lifetime], i) => (
                  <tr key={i} className={`border-b border-slate-100 dark:border-slate-800 ${i % 2 === 0 ? "bg-slate-50/50 dark:bg-slate-900/50" : ""}`}>
                    <td className="p-4 text-slate-600 dark:text-slate-400">{feature as string}</td>
                    <td className="p-4 text-center">
                      {typeof free === "boolean" ? (
                        free ? <span className="text-emerald-500">✓</span> : <span className="text-slate-300">—</span>
                      ) : (
                        <span className="text-slate-500">{free as string}</span>
                      )}
                    </td>
                    <td className="p-4 text-center bg-indigo-50/50 dark:bg-indigo-950/20">
                      {typeof pro === "boolean" ? (
                        pro ? <span className="text-indigo-500">✓</span> : <span className="text-slate-300">—</span>
                      ) : (
                        <span className="text-indigo-600 dark:text-indigo-400 font-medium">{pro as string}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof lifetime === "boolean" ? (
                        lifetime ? <span className="text-amber-500">✓</span> : <span className="text-slate-300">—</span>
                      ) : (
                        <span className="text-amber-600 dark:text-amber-400 font-medium">{lifetime as string}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Money back guarantee */}
        <div className="mt-12 card p-8 text-center border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20">
          <div className="text-4xl mb-3">🛡️</div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            30-Day Money-Back Guarantee
          </h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Try PDFToolkit Pro or Lifetime risk-free. If you're not completely
            satisfied within 30 days, email us and we'll refund you — no questions
            asked.
          </p>
        </div>
      </div>
    </div>
  );
}
