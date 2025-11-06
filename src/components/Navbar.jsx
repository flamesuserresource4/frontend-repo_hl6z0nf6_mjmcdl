import React from 'react';
import { Rocket, LineChart, Notebook, Wallet, Info, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-violet-600 shadow-lg shadow-fuchsia-500/20" />
          <span className="font-semibold tracking-tight">TrackSence</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#about" className="hover:text-white transition-colors flex items-center gap-2"><Info size={16}/>About</a>
          <a href="#analytics" className="hover:text-white transition-colors flex items-center gap-2"><LineChart size={16}/>Analytics</a>
          <a href="#notes" className="hover:text-white transition-colors flex items-center gap-2"><Notebook size={16}/>Notes</a>
          <a href="#expenses" className="hover:text-white transition-colors flex items-center gap-2"><Wallet size={16}/>Expenses</a>
          <a href="#contact" className="hover:text-white transition-colors flex items-center gap-2"><Mail size={16}/>Contact</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 px-4 py-2 text-sm transition-colors border border-white/10">
          <Rocket size={16} className="text-cyan-400"/>
          Launch App
        </button>
      </div>
    </header>
  );
}
