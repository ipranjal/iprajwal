'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-black text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <h1>
          <Link href="/" className="text-xl font-bold">
            Prajwal Pandey
            <br />
            <span className="text-sm hidden md:block">Technical Game Designer</span>
          </Link>
        </h1>

        <button
          onClick={() => setOpen(!open)}
          className="block md:hidden text-white focus:outline-none"
        >
          <i className="fas fa-bars text-2xl" />
        </button>

        <nav className="hidden md:flex space-x-4">
          <Link href="/#about" className="w-32 px-4 py-2 border border-white text-white rounded-lg flex justify-center items-center hover:bg-white hover:bg-opacity-80 hover:text-black transition">
            About Me
          </Link>
          <Link href="/#projects" className="w-32 px-4 py-2 border border-white text-white rounded-lg flex justify-center items-center hover:bg-white hover:bg-opacity-80 hover:text-black transition">
            Projects
          </Link>
          <a
            href="/prajwal-pandey-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-32 px-4 py-2 border border-white text-white rounded-lg flex justify-center items-center hover:bg-white hover:bg-opacity-80 hover:text-black transition"
          >
            CV
          </a>
        </nav>
      </div>

      {open && (
        <div className="md:hidden bg-black text-white">
          <Link href="/#about" className="block px-4 py-2 border-t border-gray-700 hover:bg-gray-800">
            About Me
          </Link>
          <Link href="/#projects" className="block px-4 py-2 border-t border-gray-700 hover:bg-gray-800">
            Projects
          </Link>
          <a
            href="/prajwal-pandey-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 border-t border-gray-700 hover:bg-gray-800"
          >
            CV
          </a>
        </div>
      )}
    </div>
  )
}
