import { useState, useCallback } from 'react';
import { Calendar, MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showBooking, setShowBooking] = useState(false);

  const submitForm = useCallback(
    (e) => {
      e.preventDefault();
      const body = encodeURIComponent(`Hi Ved,\n\n${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:hello@vedpatel.dev?subject=Project%20Inquiry&body=${body}`;
    },
    [name, email, message]
  );

  const openBooking = useCallback(() => setShowBooking(true), []);
  const closeBooking = useCallback(() => setShowBooking(false), []);

  const whatsappNumber = '919876543210'; // International format without +
  const waText = encodeURIComponent('Hi Ved, I want to book an appointment regarding AI projects.');

  return (
    <section id="contact" className="relative w-full bg-[#060c1a] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-start gap-2">
          <span className="text-sm tracking-widest text-cyan-300">CONTACT</span>
          <h2 className="text-3xl font-semibold md:text-4xl">Let’s build something intelligent</h2>
          <p className="max-w-2xl text-cyan-100/85">Have a project in mind? Drop a message or book a quick discovery call.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.form
            onSubmit={submitForm}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div>
              <label className="mb-1 block text-sm text-cyan-100/80">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-white/10 bg-[#0b1428] px-4 py-3 text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-cyan-100/80">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/10 bg-[#0b1428] px-4 py-3 text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-cyan-100/80">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="Tell me about your idea..."
                className="w-full rounded-lg border border-white/10 bg-[#0b1428] px-4 py-3 text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-medium text-white shadow-[0_10px_40px_-10px_rgba(37,99,235,.7)] transition hover:-translate-y-0.5"
            >
              <Send className="h-5 w-5" /> Send Message
            </button>
          </motion.form>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="mb-2 text-xl font-semibold">Book Appointment</h3>
              <p className="mb-4 text-sm text-cyan-100/85">Schedule a quick call to discuss your automation or AI needs.</p>
              <button
                onClick={openBooking}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400/20 px-4 py-2 text-cyan-200 hover:bg-cyan-400/30 hover:text-white"
              >
                <Calendar className="h-5 w-5" /> Open Calendar
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="mb-2 text-xl font-semibold">Message Me on WhatsApp</h3>
              <p className="mb-4 text-sm text-cyan-100/85">I usually reply within a few hours.</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${waText}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366]/20 px-4 py-2 text-[#d3ffe7] hover:bg-[#25D366]/30 hover:text-white"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {showBooking && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
          <div className="relative h-[80vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b1428] shadow-2xl">
            <button
              onClick={closeBooking}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur hover:bg-white/20"
              aria-label="Close"
            >
              Close
            </button>
            <iframe
              src="https://calendly.com/"
              title="Book with Ved"
              className="h-full w-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
