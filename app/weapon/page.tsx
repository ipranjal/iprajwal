import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Project – Modular Weapon System | Prajwal Pandey',
}

export default function WeaponPage() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero */}
      <header className="relative w-full h-[26rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/weapon.png"
          alt="Modular Weapon System"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white z-20">
          <h1 className="text-4xl md:text-6xl font-bold">Modular Weapon System</h1>
        </div>
      </header>

      {/* About */}
      <section id="responsibilities" className="py-16 px-8 mt-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-300">About</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <i className="fas fa-check-circle text-gray-400 mr-4 mt-1" />
              <p>
                Working on an Advance Modular Weapon system that allows the user to create weapons
                without touching blueprint scripts.
              </p>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-gray-400 mr-4 mt-1" />
              <p>
                The goal with this project is to create attributes like Mesh, Animation, projectile &amp;
                hitscan settings, Recoil &amp; Spray pattern, ADS Settings and additional realization
                settings that can be adjusted just through the property tab to create unique weapons for a
                game.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
