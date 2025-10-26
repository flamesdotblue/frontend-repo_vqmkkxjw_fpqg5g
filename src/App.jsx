import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Github, Linkedin, Youtube, MessageCircle } from 'lucide-react';

export default function App() {
  useEffect(() => {
    document.title = 'Ved Patel | AI Agent Developer & Automation Expert';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Ved Patel — AI Agent Developer and Automation Expert. AI bots, n8n automation, OpenAI integration, chatbots, and smart web apps.'
      );
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = 'Ved Patel — AI Agent Developer and Automation Expert. AI bots, n8n automation, OpenAI integration, chatbots, and smart web apps.';
      document.head.appendChild(m);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords = 'Ved Patel, AI Agent Developer, Automation, n8n, OpenAI, Chatbots, Web Apps, RAG, LLM, Agents';
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const k = document.createElement('meta');
      k.name = 'keywords';
      k.content = keywords;
      document.head.appendChild(k);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1020] text-white">
      <header className="fixed left-0 right-0 top-0 z-40 mx-auto flex max-w-6xl items-center justify-between rounded-b-2xl border border-white/10 bg-[#0b1428]/60 px-5 py-3 backdrop-blur">
        <a href="#" className="font-semibold tracking-wide">
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Ved Patel</span>
        </a>
        <nav className="hidden gap-6 md:flex">
          <a href="#about" className="text-sm text-cyan-100/80 hover:text-white">About</a>
          <a href="#projects" className="text-sm text-cyan-100/80 hover:text-white">Projects</a>
          <a href="#contact" className="text-sm text-cyan-100/80 hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg border border-white/10 p-2 text-white/80 hover:text-white">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg border border-white/10 p-2 text-white/80 hover:text-white">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube" className="rounded-lg border border-white/10 p-2 text-white/80 hover:text-white">
            <Youtube className="h-5 w-5" />
          </a>
          <a href="https://wa.me/919876543210?text=Hi%20Ved%2C%20I%20want%20to%20book%20an%20appointment%20regarding%20AI%20projects." target="_blank" rel="noreferrer" aria-label="WhatsApp" className="rounded-lg border border-white/10 p-2 text-white/80 hover:text-white">
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-[#081128] px-6 py-8 text-center text-cyan-100/80">
        © 2025 Ved Patel | AI Agent Developer
      </footer>
    </div>
  );
}
