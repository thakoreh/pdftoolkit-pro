import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "PDFToolkit Pro — Every PDF Tool You Need, Browser-Based",
  description:
    "Merge, compress, split, watermark, rotate, and extract text from PDFs — entirely in your browser. No upload, no account, no limits on the free tier.",
  keywords: ["PDF merge", "compress PDF", "split PDF", "watermark PDF", "rotate PDF", "extract text from PDF"],
};

const TOOLS = [
  {
    name: "Merge",
    href: "/tools/merge/",
    desc: "Combine multiple PDFs",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>`,
  },
  {
    name: "Compress",
    href: "/tools/compress/",
    desc: "Reduce file size",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4-4 4 4"/></svg>`,
  },
  {
    name: "Split",
    href: "/tools/split/",
    desc: "Separate pages",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"/><path d="m15 9 6-6"/></svg>`,
  },
  {
    name: "Watermark",
    href: "/tools/watermark/",
    desc: "Add text or image",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>`,
  },
  {
    name: "Rotate",
    href: "/tools/rotate/",
    desc: "Rotate pages",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>`,
  },
  {
    name: "Extract Text",
    href: "/tools/extract-text/",
    desc: "Copy from PDF",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I merge 20–30 PDFs a week for contracts. Used to upload to some sketchy site. PDFToolkit Pro is local, fast, and the reorder UI is actually good.",
    name: "Raj Patel",
    role: "Paralegal",
    company: "Whitmore & Associates",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    stars: 5,
  },
  {
    quote:
      "The watermark tool paid for itself in one afternoon. I batch-watermark client deliverables with our firm logo in two clicks. Game changer for my workflow.",
    name: "Camille Rousseau",
    role: "Graphic Designer",
    company: "Studio Rousseau",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    stars: 5,
  },
  {
    quote:
      "We were paying $40/month for a bloated PDF suite that needed an update every week. Switched our team of 8 to PDFToolkit Pro. No regrets.",
    name: "David Kim",
    role: "Operations Manager",
    company: "ClearPath Logistics",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    stars: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <nav style={{ borderBottom: "1px solid var(--color-border)", background: "rgba(250,250,249,0.85)", backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="7" fill="#4338ca"/>
              <path d="M8 7h8M8 11h10M8 15h10M8 19h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.125rem", fontWeight: 400, color: "var(--color-ink)" }}>
              PDFToolkit<span style={{ color: "var(--color-primary)" }}> Pro</span>
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <Link href="/tools/" style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--color-ink-light)", textDecoration: "none" }}>Tools</Link>
            <Link href="/pricing/" style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--color-ink-light)", textDecoration: "none" }}>Pricing</Link>
            <a
              href="https://github.com/thakoreh/pdftoolkit-pro"
              style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--color-ink-light)", textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <Link href="/tools/merge/" className="btn-primary" style={{ fontSize: "0.875rem", padding: "8px 18px" }}>
              Use Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "72px 24px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Background texture */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--color-primary-soft)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: 100, padding: "4px 14px", marginBottom: 20, fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-primary)" }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="6"/></svg>
            100% browser-based — your files never leave your device
          </div>

          {/* Heading */}
          <h1 style={{ fontSize: "clamp(2.5rem,5vw,3.75rem)", marginBottom: 20, maxWidth: 700, margin: "0 auto 20px" }}>
            The PDF toolkit that{" "}
            <span style={{ color: "var(--color-primary)" }}>respects your time</span>
          </h1>

          {/* Subtitle */}
          <p style={{ fontSize: "clamp(1rem,2vw,1.1875rem)", color: "var(--color-ink-muted)", maxWidth: 540, margin: "0 auto 40px", lineHeight: 1.7 }}>
            Merge, compress, split, watermark, rotate, and extract text — all in one clean interface.
            No upload. No account. No waiting.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 56 }}>
            <Link href="/tools/merge/" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              Start Merging Free
            </Link>
            <Link href="/tools/" className="btn-secondary">See all tools</Link>
          </div>

          {/* Product mockup — realistic merge UI */}
          <div style={{ maxWidth: 860, margin: "0 auto", perspective: 1000 }}>
            <div style={{
              background: "#1e293b",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.08)",
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.06)",
              transform: "rotateX(2deg)",
              transition: "transform 0.3s",
            }}>
              {/* Browser chrome */}
              <div style={{ background: "#111827", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ display: "flex", gap: 6 }}>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }}/>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#f59e0b" }}/>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e" }}/>
                </div>
                <div style={{ flex: 1, background: "#1f2937", borderRadius: 6, padding: "4px 12px", fontSize: "0.6875rem", color: "#94a3b8", fontFamily: "var(--font-mono)", textAlign: "left" }}>
                  pdftollkit.pro/tools/merge
                </div>
              </div>

              {/* App UI */}
              <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", minHeight: 320 }}>
                {/* Sidebar */}
                <div style={{ background: "#151f35", padding: "16px", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#475569", marginBottom: 10 }}>Tools</div>
                  {[
                    { name: "Merge", active: true },
                    { name: "Compress", active: false },
                    { name: "Split", active: false },
                    { name: "Watermark", active: false },
                    { name: "Rotate", active: false },
                    { name: "Extract Text", active: false },
                  ].map((t) => (
                    <div key={t.name} style={{
                      padding: "7px 10px",
                      borderRadius: 6,
                      fontSize: "0.8125rem",
                      fontWeight: t.active ? 600 : 400,
                      color: t.active ? "#818cf8" : "#64748b",
                      background: t.active ? "rgba(99,102,241,0.12)" : "transparent",
                      marginBottom: 2,
                    }}>{t.name}</div>
                  ))}
                </div>

                {/* Main panel */}
                <div style={{ padding: 24 }}>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>Merge PDF</div>
                  <div style={{ fontSize: "0.75rem", color: "#64748b", marginBottom: 16 }}>Combine multiple files into one document</div>

                  {/* Drop zone */}
                  <div style={{ border: "2px dashed #334155", borderRadius: 10, padding: "24px 16px", textAlign: "center", marginBottom: 16, background: "rgba(255,255,255,0.02)" }}>
                    <div style={{ fontSize: "0.75rem", color: "#64748b", marginBottom: 6 }}>Drop PDF files here or</div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#4338ca", color: "white", fontSize: "0.75rem", fontWeight: 600, padding: "6px 14px", borderRadius: 7, cursor: "pointer" }}>
                      Browse Files
                    </div>
                  </div>

                  {/* File list */}
                  {[
                    { name: "Q4-Contract-Draft.pdf", size: "2.4 MB" },
                    { name: "Appendix-A-Signatures.pdf", size: "890 KB" },
                    { name: "Exhibit-B-Financials.pdf", size: "1.1 MB" },
                  ].map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px", background: "rgba(255,255,255,0.04)", borderRadius: 8, marginBottom: 6 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                        <span style={{ fontSize: "0.8125rem", color: "#e2e8f0", fontFamily: "var(--font-mono)" }}>{f.name}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: "0.6875rem", color: "#64748b" }}>{f.size}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                    </div>
                  ))}

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12, padding: "10px 12px", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 8 }}>
                    <span style={{ fontSize: "0.75rem", color: "#4ade80" }}>3 files · 4.4 MB total</span>
                    <div style={{ display: "flex", gap: 6 }}>
                      <div style={{ fontSize: "0.6875rem", fontWeight: 600, color: "white", background: "#4338ca", padding: "4px 10px", borderRadius: 6 }}>Merge PDF</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool grid */}
      <section style={{ padding: "48px 24px 72px", background: "white", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-label">The Tools</div>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", marginBottom: 12 }}>Six tools. Every PDF task.</h2>
            <p style={{ color: "var(--color-ink-muted)", fontSize: "1rem", maxWidth: 460, margin: "0 auto" }}>
              One clean interface. No account, no upload, no waiting. Pick a tool and go.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {TOOLS.map((tool) => (
              <Link key={tool.name} href={tool.href} className="tool-card">
                <div dangerouslySetInnerHTML={{ __html: tool.icon }} style={{ color: "var(--color-primary)", width: 40, height: 40 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9375rem" }}>{tool.name}</div>
                  <div style={{ fontSize: "0.8125rem", color: "var(--color-ink-muted)" }}>{tool.desc}</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light)" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Why This</div>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>Built for people who value their time</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
            {[
              {
                icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>`,
                title: "100% Private",
                desc: "Files never leave your browser. No server upload, no third-party access. Works offline.",
              },
              {
                icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
                title: "Instant Results",
                desc: "Process PDFs in seconds. No upload latency, no server queue, no waiting on someone else's machine.",
              },
              {
                icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
                title: "Works Everywhere",
                desc: "Mac, Windows, Linux, iPhone, Android. Any modern browser. Nothing to install.",
              },
              {
                icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
                title: "Dark Mode",
                desc: "Toggle dark mode any time. Easy on the eyes during long work sessions.",
              },
            ].map((f) => (
              <div key={f.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 40, height: 40, background: "var(--color-primary-soft)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--color-primary)" }} dangerouslySetInnerHTML={{ __html: f.icon }} />
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)", lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "64px 24px", background: "var(--color-paper)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-label">Social Proof</div>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>Used by professionals daily</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testimonial-card">
                {/* Stars */}
                <div style={{ display: "flex", gap: 3 }}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                {/* Quote */}
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "var(--color-ink-light)", fontStyle: "italic", flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 12, borderTop: "1px solid var(--color-border)" }}>
                  <img src={t.avatar} alt={t.name} width={40} height={40} style={{ borderRadius: "50%", objectFit: "cover" }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.875rem" }}>{t.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--color-ink-muted)" }}>{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "72px 24px", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Pricing</div>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", marginBottom: 12 }}>Honest pricing. No lock-in.</h2>
            <p style={{ color: "var(--color-ink-muted)", maxWidth: 400, margin: "0 auto" }}>
              Start free. Upgrade when you need batch processing and advanced features.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20, maxWidth: 700, margin: "0 auto" }}>
            {/* Free */}
            <div className="pricing-card">
              <div>
                <span className="badge-free">Free</span>
                <div style={{ marginTop: 12, fontFamily: "var(--font-serif)", fontSize: "2.5rem" }}>$0</div>
                <div style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)" }}>forever</div>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {["All 6 tools", "Up to 50MB per file", "2 files per batch", "No watermarks on output", "Dark mode"].map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.875rem", color: "var(--color-ink-light)" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><path d="M20 6 9 17l-5-5"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/tools/merge/" className="btn-secondary" style={{ justifyContent: "center", textAlign: "center" }}>
                Get started free
              </Link>
            </div>

            {/* Pro */}
            <div className="pricing-card featured">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span className="badge-pro">Pro</span>
                <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-primary)", background: "var(--color-primary-soft)", padding: "2px 8px", borderRadius: 100 }}>
                  Save 40%
                </div>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "2.5rem" }}>$9</span>
                  <span style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)" }}>/month</span>
                </div>
                <div style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)" }}>or $5/mo billed annually</div>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {["Unlimited file sizes", "Unlimited batch size", "No output watermarks", "Priority processing", "Batch history (local)", "All future Pro tools"].map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.875rem", color: "var(--color-ink-light)" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><path d="M20 6 9 17l-5-5"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/pricing/" className="btn-primary" style={{ justifyContent: "center", textAlign: "center" }}>
                Start Pro trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "64px 24px", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-label">FAQ</div>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)" }}>Questions people ask</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              {
                q: "Are my files uploaded to a server?",
                a: "No. All processing happens in your browser using JavaScript. Your files never leave your device. This is not a server-side tool — the PDF manipulation runs entirely on your machine.",
              },
              {
                q: "What happens to my files?",
                a: "Files are loaded into memory, processed, and made available for download. Nothing is stored on any server. When you close or refresh the tab, all data is gone.",
              },
              {
                q: "Is there a file size limit?",
                a: "The free tier allows files up to 50MB. Pro removes all size limits. Very large files may take longer to process depending on your device.",
              },
              {
                q: "Do you add watermarks to output?",
                a: "Free users: no watermarks on any output. Pro: unlimited watermarking of your own files, not for stripping others' watermarks.",
              },
              {
                q: "Can I use this offline?",
                a: "Yes. After the first load, PDFToolkit Pro works fully offline — all tools and processing are client-side.",
              },
            ].map((item, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--color-border)", padding: "20px 0" }}>
                <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "0.9375rem", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {item.q}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </summary>
                <p style={{ marginTop: 12, fontSize: "0.9375rem", color: "var(--color-ink-muted)", lineHeight: 1.7 }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--color-border)", padding: "32px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="7" fill="#4338ca"/>
              <path d="M8 7h8M8 11h10M8 15h10M8 19h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.9375rem" }}>PDFToolkit<span style={{ color: "var(--color-primary)" }}> Pro</span></span>
          </div>
          <div style={{ display: "flex", gap: 20, fontSize: "0.8125rem", color: "var(--color-ink-muted)" }}>
            <Link href="/tools/" style={{ color: "inherit", textDecoration: "none" }}>Tools</Link>
            <Link href="/pricing/" style={{ color: "inherit", textDecoration: "none" }}>Pricing</Link>
            <a href="https://github.com/thakoreh/pdftoolkit-pro" style={{ color: "inherit", textDecoration: "none" }} target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <p style={{ fontSize: "0.75rem", color: "var(--color-ink-muted)" }}>
            © {new Date().getFullYear()} PDFToolkit Pro. Your files never leave your device.
          </p>
        </div>
      </footer>
    </>
  );
}
