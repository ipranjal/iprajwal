'use client'

import { useState, useEffect } from 'react'
import Navbar from './Navbar'

export default function StickyNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <Navbar transparent={!scrolled} />
    </div>
  )
}
