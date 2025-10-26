import { Brain, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'AI Agent Development', level: 95 },
  { name: 'n8n Automation', level: 90 },
  { name: 'OpenAI Integration', level: 92 },
  { name: 'Web Apps', level: 88 },
  { name: 'Chatbots', level: 93 },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0a1020] px-6 py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.08),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 text-cyan-300">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm tracking-widest">ABOUT ME</span>
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">Designing intelligent automations that scale</h2>
          <p className="text-cyan-100/80">
            I specialize in building autonomous AI agents, workflow automations, and smart integrations that turn business logic into real results. From idea to deployment, I design systems that are robust, efficient, and delightful to use.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/30 to-blue-600/20 shadow-[0_10px_40px_-10px_rgba(34,211,238,.6)]">
              <div className="absolute inset-0 grid place-items-center text-white/90">
                <Brain className="h-10 w-10" />
              </div>
            </div>
            <div className="text-cyan-100/90">
              <div className="text-lg font-medium">Ved Patel</div>
              <div className="text-sm">AI Agent Developer • Automation Expert</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {skills.map((s, i) => (
            <div key={s.name} className="">
              <div className="mb-2 flex items-center justify-between text-sm text-cyan-100/80">
                <span>{s.name}</span>
                <span>{s.level}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_25px_rgba(34,211,238,.65)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
