import { useState, useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import { Play, Mail } from 'lucide-react';

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = useCallback(() => setShowVideo(true), []);
  const closeVideo = useCallback(() => setShowVideo(false), []);

  const scrollToContact = useCallback(() => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a1020] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient glow overlay (non-blocking for interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1020]/30 to-[#0a1020]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-20 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs tracking-wider text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,.35)]">
          AI Agent Developer • Automation Expert
        </span>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(45,212,191,.35)]">
            Building the Future with AI Agents
          </span>
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-cyan-100/80 md:text-xl">
          Hi, I’m <span className="font-semibold text-white">Ved Patel</span> — I create intelligent AI bots, automation systems, and smart web integrations.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={openVideo}
            className="group relative inline-flex items-center gap-2 rounded-xl bg-cyan-400/20 px-6 py-3 text-cyan-200 backdrop-blur transition transform will-change-transform hover:-translate-y-0.5 hover:bg-cyan-400/30 hover:text-white hover:shadow-[0_10px_40px_-10px_rgba(34,211,238,.7)] active:translate-y-0"
          >
            <span className="absolute inset-0 -z-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
            <Play className="h-5 w-5" />
            Watch My Work
          </button>

          <button
            onClick={scrollToContact}
            className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-medium text-white shadow-[0_10px_40px_-10px_rgba(37,99,235,.7)] transition transform will-change-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="absolute inset-0 rounded-xl ring-2 ring-cyan-300/40" />
            <Mail className="h-5 w-5" />
            Contact Me
          </button>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b1428] shadow-2xl">
            <button
              onClick={closeVideo}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur hover:bg-white/20"
              aria-label="Close"
            >
              Close
            </button>
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                title="AI Project Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="border-t border-white/10 p-4 text-center text-cyan-100/80">AI Agents in Action — Demo Reel</div>
          </div>
        </div>
      )}
    </section>
  );
}
