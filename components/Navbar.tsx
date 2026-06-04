'use client'

import { useState } from 'react'
import Link from 'next/link'

interface NavbarProps {
  transparent?: boolean
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const [open, setOpen] = useState(false)

  const bg = transparent
    ? 'bg-transparent'
    : 'bg-[#080808]/90 backdrop-blur-md border-b border-white/5'

  return (
    <div className={`w-full transition-all duration-500 ${bg}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6 md:px-10">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 border border-[#e8a020] flex items-center justify-center shrink-0">
            <span className="font-display text-[#e8a020] text-sm leading-none">PP</span>
          </div>
          <div>
            <p className="font-display tracking-widest text-white text-sm leading-none">PRAJWAL PANDEY</p>
            <p className="text-[0.6rem] tracking-[0.18em] uppercase text-zinc-500 leading-none mt-1">Technical Game Designer</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#projects" className="nav-link text-xs tracking-widest uppercase text-zinc-400 hover:text-white">
            Work
          </Link>
          <Link href="/#about" className="nav-link text-xs tracking-widest uppercase text-zinc-400 hover:text-white">
            About
          </Link>
          <a
            href="/prajwal-pandey-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase px-5 py-2 border border-[#e8a020] text-[#e8a020] hover:bg-[#e8a020] hover:text-black transition-colors duration-200"
          >
            Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-1">
          <i className={`fas ${open ? 'fa-times' : 'fa-bars'} text-lg`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#080808] border-t border-white/5 px-6 py-4 flex flex-col gap-5">
          <Link href="/#projects" className="text-xs tracking-widest uppercase text-zinc-400 hover:text-white transition-colors" onClick={() => setOpen(false)}>
            Work
          </Link>
          <Link href="/#about" className="text-xs tracking-widest uppercase text-zinc-400 hover:text-white transition-colors" onClick={() => setOpen(false)}>
            About
          </Link>
          <a
            href="/prajwal-pandey-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-[#e8a020]"
          >
            Resume
          </a>
        </div>
      )}
    </div>
  )
}
