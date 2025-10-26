import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Autonomous Lead Qualifier Bot',
    desc: 'An AI agent that scores inbound leads, asks clarifying questions, and books meetings via Calendly.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1920&auto=format&fit=crop',
    demo: 'https://youtu.be/dQw4w9WgXcQ',
    code: 'https://github.com/',
  },
  {
    title: 'n8n Workflow Orchestrator',
    desc: 'Scalable automation pipelines connecting CRMs, Slack, email, and internal tools with robust observability.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1920&auto=format&fit=crop',
    demo: 'https://example.com',
    code: 'https://github.com/',
  },
  {
    title: 'Chatbot for Customer Support',
    desc: 'Context-aware assistant with RAG, multi-turn memory, and tool use for order status and returns.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1920&auto=format&fit=crop',
    demo: 'https://example.com',
    code: 'https://github.com/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#070d1c] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-start gap-2">
          <span className="text-sm tracking-widest text-cyan-300">PROJECTS</span>
          <h2 className="text-3xl font-semibold md:text-4xl">Recent AI builds</h2>
          <p className="max-w-2xl text-cyan-100/85">A glimpse into automation systems and AI agents I’ve delivered.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition transform will-change-transform hover:-translate-y-1 hover:shadow-[0_25px_80px_-20px_rgba(59,130,246,.45)]"
              style={{ perspective: 1000 }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070d1c] via-transparent to-transparent opacity-70" />
              </div>

              <div className="space-y-3 p-5">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-cyan-100/85">{p.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-cyan-400/20 px-3 py-2 text-cyan-200 hover:bg-cyan-400/30 hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4" /> View Demo
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-white hover:bg-white/20"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </div>
              </div>

              {/* Glow */}
              <div className="pointer-events-none absolute -inset-px opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at 0 0, rgba(34,211,238,.15), transparent 40%)' }} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
