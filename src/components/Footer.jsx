import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <div>© {new Date().getFullYear()} TrackSence. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#analytics" className="hover:text-white">Analytics</a>
          <a href="#notes" className="hover:text-white">Notes</a>
          <a href="#expenses" className="hover:text-white">Expenses</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
