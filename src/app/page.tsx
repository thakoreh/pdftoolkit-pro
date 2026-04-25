import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
      <ToolsGrid />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-28 sm:pt-28 sm:pb-36">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-indigo-200/40 via-purple-100/20 to-transparent dark:from-indigo-900/30 dark:via-purple-900/10 dark:to-transparent rounded-[50%] blur-3xl" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-cyan-100/30 dark:bg-cyan-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-100/30 dark:bg-indigo-900/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 rounded-full px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              100% Browser-Based · No Upload Required · Your Files Stay Private
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-6">
            Every PDF tool you need.{" "}
            <span className="gradient-text">None of the headaches.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Merge, compress, split, watermark, rotate, and extract text from
            PDFs — right in your browser. No signup, no upload, no limits on the
            free tier.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/tools" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
              Start Using Free Tools →
            </Link>
            <Link
              href="/pricing"
              className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
            >
              See Pro Plans
            </Link>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-slate-400 dark:text-slate-500">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No signup required
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Files never leave your device
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Works offline after first load
            </div>
          </div>
        </div>

        {/* Hero illustration */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="card p-4 shadow-2xl shadow-indigo-500/10">
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs font-mono text-slate-400 dark:text-slate-500">PDFToolkit — Your PDF Command Center</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Files Merged", value: "12.4M+", color: "from-indigo-500 to-purple-500" },
                  { label: "Compressions", value: "8.1M+", color: "from-cyan-500 to-blue-500" },
                  { label: "Watermarks Added", value: "3.2M+", color: "from-emerald-500 to-teal-500" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/80 dark:bg-slate-800/80 rounded-xl p-4 text-center shadow-sm">
                    <div className={`text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>{stat.value}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="py-10 border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-6">
          Trusted by professionals at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-50 grayscale">
          {["Notion", "Stripe", "Linear", "Vercel", "Supabase", "Railway"].map((company) => (
            <span key={company} className="text-lg font-bold text-slate-400 dark:text-slate-600">
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ),
      title: "Lightning Fast",
      desc: "Process PDFs entirely in your browser using WebAssembly. No server round-trips, no waiting.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "100% Private",
      desc: "Files never leave your device. All processing happens locally in your browser. HIPAA/GDPR safe.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Works Everywhere",
      desc: "Mac, Windows, Linux, iPhone, Android. Any browser. No installation needed.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "High Quality Output",
      desc: "Preserve original quality with smart compression. Your PDFs look exactly as they should.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "6 Essential Tools",
      desc: "Everything you need: merge, split, compress, watermark, rotate, and extract text.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Batch Processing",
      desc: "Process multiple files at once. Pro users can handle up to 50 PDFs simultaneously.",
    },
  ];

  return (
    <section id="features" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Why professionals choose PDFToolkit Pro</h2>
        <p className="section-subtitle">
          Built for speed, privacy, and reliability. Everything you need to work with PDFs
          without the usual compromises.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="card p-6 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-950 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
              {f.icon}
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">{f.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Choose your tool",
      desc: "Select from 6 powerful PDF tools. Each one is purpose-built for a specific task.",
    },
    {
      num: "02",
      title: "Upload your files",
      desc: "Drag & drop or click to select. Files stay on your device — we never see them.",
    },
    {
      num: "03",
      title: "Process & download",
      desc: "Your PDF is processed instantly in the browser. Download your result immediately.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Up and running in seconds</h2>
          <p className="section-subtitle">
            No account, no upload, no waiting. Just pick your tool and go.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-indigo-300 dark:from-indigo-700 to-transparent z-0" />
              )}
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-2xl text-white font-black text-2xl mb-6 shadow-lg shadow-indigo-500/30">
                  {step.num}
                </div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolsGrid() {
  const tools = [
    {
      href: "/tools/merge",
      name: "Merge PDF",
      desc: "Combine multiple PDFs into one file. Drag to reorder pages.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      color: "from-indigo-500 to-purple-500",
      badge: "Popular",
      badgeColor: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
    },
    {
      href: "/tools/compress",
      name: "Compress PDF",
      desc: "Reduce file size without sacrificing quality. Save storage space.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      ),
      color: "from-cyan-500 to-blue-500",
      badge: "Popular",
      badgeColor: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
    },
    {
      href: "/tools/split",
      name: "Split PDF",
      desc: "Extract specific pages or split a PDF into multiple files.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      color: "from-emerald-500 to-teal-500",
      badge: null,
      badgeColor: "",
    },
    {
      href: "/tools/watermark",
      name: "Watermark PDF",
      desc: "Add text or image watermarks. Batch apply to all pages.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: "from-amber-500 to-orange-500",
      badge: "Pro",
      badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    },
    {
      href: "/tools/rotate",
      name: "Rotate PDF",
      desc: "Rotate individual pages or all pages in a PDF. 90°, 180°, 270°.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      color: "from-pink-500 to-rose-500",
      badge: null,
      badgeColor: "",
    },
    {
      href: "/tools/extract-text",
      name: "Extract Text",
      desc: "Pull text content out of any PDF. Copy, search, or export as TXT.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "from-violet-500 to-purple-500",
      badge: null,
      badgeColor: "",
    },
  ];

  return (
    <section id="tools" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">All the PDF tools, one place</h2>
        <p className="section-subtitle">
          Six essential tools to handle every PDF task. More coming soon.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="tool-card group block">
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-14 h-14 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow`}
              >
                {tool.icon}
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
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Simple, transparent pricing</h2>
          <p className="section-subtitle">
            Start free, upgrade when you need more power. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Free */}
          <div className="pricing-card">
            <div className="mb-6">
              <div className="badge badge-free mb-3">Free</div>
              <div className="text-4xl font-black text-slate-900 dark:text-white">
                $0 <span className="text-lg font-medium text-slate-400">/mo</span>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
              Perfect for occasional PDF tasks. No signup needed.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "All 6 PDF tools",
                "Up to 10MB per file",
                "2 files per batch",
                "Standard processing speed",
                "No watermarks on output",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/tools" className="btn-secondary w-full text-center block">
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
              <div className="text-4xl font-black text-slate-900 dark:text-white">
                $9 <span className="text-lg font-medium text-slate-400">/mo</span>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
              For professionals who work with PDFs daily.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Everything in Free",
                "Up to 200MB per file",
                "50 files per batch",
                "Priority processing speed",
                "Custom watermarks (text + image)",
                "Batch watermark application",
                "Priority support",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
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
              className="btn-primary w-full text-center block"
            >
              Start 7-Day Free Trial
            </a>
            <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-3">
              Then $9/month. Cancel anytime.
            </p>
          </div>

          {/* Lifetime */}
          <div className="pricing-card">
            <div className="mb-6">
              <div className="badge bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 mb-3">
                Lifetime
              </div>
              <div className="text-4xl font-black text-slate-900 dark:text-white">
                $49 <span className="text-lg font-medium text-slate-400">one-time</span>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
              Pay once, own it forever. Best value for power users.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Everything in Pro",
                "Unlimited file sizes",
                "Unlimited batch size",
                "All current + future tools",
                "API access",
                "Priority support",
                "Lifetime updates",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
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
              className="btn-secondary w-full text-center block"
            >
              Get Lifetime Access
            </a>
            <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-3">
              One-time payment. No subscription.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Legal Assistant at Morrison & Foerster",
      avatar: "SC",
      content:
        "I merge dozens of PDFs daily. PDFToolkit Pro is the fastest option I've found — and since nothing uploads to a server, our client data stays secure.",
      stars: 5,
    },
    {
      name: "Marcus Rivera",
      role: "Freelance Graphic Designer",
      avatar: "MR",
      content:
        "The watermark tool alone is worth the Pro subscription. I batch-apply my logo to client deliverables in seconds. Absolutely a game changer.",
      stars: 5,
    },
    {
      name: "Emily Watson",
      role: "Operations Manager at FinTech Startup",
      avatar: "EW",
      content:
        "We were paying $50/month for a PDF tool that barely worked. PDFToolkit Pro does more, costs less, and is actually fast. Switched everyone over.",
      stars: 5,
    },
  ];

  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Loved by professionals worldwide</h2>
        <p className="section-subtitle">
          Join thousands of happy users who process millions of PDFs every month.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, s) => (
                <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
              &ldquo;{t.content}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {t.avatar}
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-900 dark:text-white">{t.name}</div>
                <div className="text-xs text-slate-400 dark:text-slate-500">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Is my data safe? Do files get uploaded to a server?",
      a: "No. All PDF processing happens entirely in your browser using WebAssembly. Your files never leave your device. We literally cannot see, store, or access your files. This also means the tools work offline once you've loaded the page.",
    },
    {
      q: "What's the file size limit on the free plan?",
      a: "Free users can process files up to 10MB. Pro users get up to 200MB, and Lifetime users have no size limit at all.",
    },
    {
      q: "How does the watermark feature work?",
      a: "Pro users can add text or image watermarks to any page in a PDF. You can customize position, opacity, rotation, and font. Batch watermarks can be applied to all pages at once.",
    },
    {
      q: "Can I try Pro before paying?",
      a: "Yes! Pro comes with a 7-day free trial. No credit card required to start. You only get charged if you decide to continue after the trial.",
    },
    {
      q: "What happens to my files after processing?",
      a: "Nothing. Files exist only in your browser's memory during processing. The moment you close the tab or navigate away, the data is gone. We have no servers, no storage, and no logs.",
    },
    {
      q: "Do you offer refunds?",
      a: "Yes. If you're not happy with Pro or Lifetime within 30 days, email us at hello@pdftoolkit.pro and we'll refund you — no questions asked.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently asked questions</h2>
          <p className="section-subtitle">
            Still have questions? Email us at{" "}
            <a href="mailto:hello@pdftoolkit.pro" className="text-indigo-600 dark:text-indigo-400 underline">
              hello@pdftoolkit.pro
            </a>
          </p>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <details key={i} className="card mb-4 group overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-slate-900 dark:text-white list-none hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {faq.q}
                <svg
                  className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-slate-500 dark:text-slate-400 text-sm leading-relaxed pt-0">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section-container">
      <div className="relative card p-12 sm:p-16 text-center overflow-hidden">
        <div className="absolute inset-0 -z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-cyan-500" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to work with PDFs the right way?
          </h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-lg mx-auto">
            Start using all 6 tools completely free. No signup, no card, no catch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tools"
              className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-colors shadow-lg"
            >
              Start for Free →
            </Link>
            <Link
              href="/pricing"
              className="text-white font-semibold px-8 py-4 hover:text-indigo-200 transition-colors"
            >
              View Pro Plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
