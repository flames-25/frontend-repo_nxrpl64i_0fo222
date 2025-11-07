import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s build something cool</h2>
          <p className="mt-3 text-white/70">Tell us about your idea and we’ll get back within 24 hours.</p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm text-white/70">Name</label>
                <input required className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm text-white/70">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="block text-sm text-white/70">Message</label>
                <textarea rows={4} required className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="inline-flex justify-center rounded-md bg-white/90 px-5 py-2.5 text-sm font-semibold text-black hover:bg-white">Send</button>
              {sent && <p className="text-sm text-emerald-400">Thanks! We’ll be in touch shortly.</p>}
            </div>
          </form>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-fuchsia-500/10 p-6">
            <h3 className="text-lg font-semibold">What you get</h3>
            <ul className="mt-3 space-y-2 text-white/80 text-sm">
              <li>• Free discovery call</li>
              <li>• Concept moodboard and motion direction</li>
              <li>• Technical feasibility + timeline</li>
              <li>• Transparent pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
