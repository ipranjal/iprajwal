'use client'

import { useState, useEffect } from 'react'
import Navbar from './Navbar'

export default function StickyNavbar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const header = document.querySelector('header')
    const toggle = () => {
      if (header) {
        setVisible(window.scrollY > header.offsetHeight)
      }
    }
    toggle()
    window.addEventListener('scroll', toggle)
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  return (
    <div
      id="sticky-header"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <Navbar />
    </div>
  )
}
