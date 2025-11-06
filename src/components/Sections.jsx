import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Notebook, Wallet, Filter, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const sectionTitle = (title, subtitle) => (
  <div className="mb-10">
    <h2 className="text-2xl md:text-4xl font-semibold">
      {title} <span className="bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-text text-transparent">{subtitle}</span>
    </h2>
  </div>
);

export default function Sections() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* About */}
      <section id="about" className="relative py-16 md:py-24">
        <div className="absolute inset-0 -z-0 opacity-40 pointer-events-none">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative z-10">
          {sectionTitle('About', 'TrackSence')}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4 text-white/85">
              <p>
                TrackSence is an intelligent expense companion. It helps you capture purchases, categorize spending, and understand habits using smooth, interactive charts and responsive 3D visuals.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
                  <Wallet className="text-cyan-300" size={18}/> Real-time expense tracking
                </li>
                <li className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
                  <BarChart3 className="text-fuchsia-300" size={18}/> Analytics & insights
                </li>
                <li className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
                  <Notebook className="text-violet-300" size={18}/> Finance notes
                </li>
                <li className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
                  <Filter className="text-emerald-300" size={18}/> Smart filters
                </li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
              <div className="h-56 rounded-xl bg-black/40 backdrop-blur flex items-center justify-center">
                <p className="text-white/60">3D fintech visual showcasing glassmorphism</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section id="analytics" className="py-16 md:py-24">
        {sectionTitle('Analytics', 'Dashboard')}
        <div className="grid md:grid-cols-3 gap-6">
          {['Monthly Spend', 'Top Categories', 'Trend'].map((title, idx) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 text-sm text-white/70">{title}</div>
              <div className="h-40 rounded-lg bg-gradient-to-br from-cyan-400/10 via-fuchsia-500/10 to-violet-600/10" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Notes */}
      <section id="notes" className="py-16 md:py-24">
        {sectionTitle('Notes', 'Workspace')}
        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
          <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 ring-fuchsia-500/40 placeholder:text-white/40" placeholder="Title" />
          <textarea className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 h-32 outline-none focus:ring-2 ring-fuchsia-500/40 placeholder:text-white/40" placeholder="Write your finance note..." />
          <div className="flex justify-end">
            <button type="button" className="rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-2 text-sm font-medium text-black shadow-lg shadow-cyan-500/20">Save Note</button>
          </div>
        </motion.form>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1,2,3].map(i => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-white/70 text-sm">Note {i}</div>
              <p className="mt-2 text-white/85 text-sm">Ideas about optimizing subscriptions and monthly budgets.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expenses */}
      <section id="expenses" className="py-16 md:py-24">
        {sectionTitle('Expense', 'Tracking')}
        <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-6 text-xs uppercase tracking-wide text-white/60 bg-white/5">
            <div className="p-3">Date</div>
            <div className="p-3">Merchant</div>
            <div className="p-3">Category</div>
            <div className="p-3">Method</div>
            <div className="p-3">Note</div>
            <div className="p-3 text-right">Amount</div>
          </div>
          {[['2025-11-05','Netflix','Subscriptions','Card','Monthly plan','$15.99'],['2025-11-02','Whole Foods','Groceries','Card','Weekly fresh','$64.20'],['2025-11-01','Uber','Transport','Wallet','Airport ride','$32.80']].map((row, idx) => (
            <div key={idx} className="grid grid-cols-2 md:grid-cols-6 text-sm text-white/85 odd:bg-white/[0.03]">
              {row.slice(0,5).map((cell, i) => (
                <div key={i} className="p-3">{cell}</div>
              ))}
              <div className="p-3 text-right font-medium text-emerald-300">{row[5]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24">
        {sectionTitle('Get in', 'Touch')}
        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <input id="name" className="peer w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 ring-cyan-500/40 placeholder-transparent" placeholder="Name" />
            <label htmlFor="name" className="pointer-events-none absolute left-4 top-3 text-white/50 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-300 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs">Name</label>
          </div>
          <div className="relative">
            <input id="email" className="peer w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 ring-cyan-500/40 placeholder-transparent" placeholder="Email" />
            <label htmlFor="email" className="pointer-events-none absolute left-4 top-3 text-white/50 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-300 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs">Email</label>
          </div>
          <div className="md:col-span-2 relative">
            <textarea id="message" className="peer w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 h-32 outline-none focus:ring-2 ring-cyan-500/40 placeholder-transparent" placeholder="Message" />
            <label htmlFor="message" className="pointer-events-none absolute left-4 top-3 text-white/50 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-300 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs">Message</label>
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button type="button" className="rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-2.5 text-sm font-medium text-black shadow-lg shadow-cyan-500/20">Send</button>
          </div>
        </motion.form>
      </section>
    </div>
  );
}
