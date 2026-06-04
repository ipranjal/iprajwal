import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Modular Weapon System – Prajwal Pandey',
}

export default function WeaponPage() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero */}
      <header className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/weapon.png"
          alt="Modular Weapon System"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#080808] via-black/60 to-black/20" />
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-10 pb-16 pt-32">
          <p className="label-xs mb-4">Personal Project &middot; Unreal Engine 5</p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] text-white tracking-wider leading-none mb-4">
            MODULAR<br />WEAPON<br />SYSTEM
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl">
            Systems Designer &mdash; Data-driven weapon framework with zero blueprint scripting required
          </p>
        </div>
      </header>

      {/* Role strip */}
      <div className="border-y border-white/5 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Type', value: 'Personal Project' },
            { label: 'Engine', value: 'Unreal Engine 5' },
            { label: 'Role', value: 'Systems Designer' },
            { label: 'Status', value: 'In Development' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[0.6rem] tracking-widest uppercase text-zinc-600 mb-1">{label}</p>
              <p className="text-sm text-zinc-200">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="label-xs mb-3">Overview</p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-8">ABOUT THE PROJECT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start gap-4 p-6 border border-white/5 hover:border-[#e8a020]/30 transition-colors group">
              <span className="font-display text-2xl text-white/10 leading-none shrink-0 group-hover:text-[#e8a020]/30 transition-colors">01</span>
              <div>
                <h3 className="font-display text-xl text-white tracking-wider mb-3">DESIGNER-FIRST APPROACH</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Working on an advanced Modular Weapon System that allows designers to create fully functional weapons without touching a single Blueprint script. All configuration happens through the property panel.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 border border-white/5 hover:border-[#e8a020]/30 transition-colors group">
              <span className="font-display text-2xl text-white/10 leading-none shrink-0 group-hover:text-[#e8a020]/30 transition-colors">02</span>
              <div>
                <h3 className="font-display text-xl text-white tracking-wider mb-3">CONFIGURABLE ATTRIBUTES</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Exposes attributes like Mesh, Animations, Projectile &amp; Hitscan settings, Recoil &amp; Spray patterns, ADS settings, and additional realization options — all tunable through the property tab to create unique weapons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature list */}
      <section className="py-20 border-t border-white/5 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="label-xs mb-3">Features</p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-12">SYSTEM FEATURES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { title: 'Mesh & Animations', desc: 'Swap skeletal mesh and animation montages per weapon type.' },
              { title: 'Projectile & Hitscan', desc: 'Toggle between projectile and hitscan fire modes with configurable parameters.' },
              { title: 'Recoil & Spray', desc: 'Define recoil curves and spray patterns per weapon without scripting.' },
              { title: 'ADS Settings', desc: 'Configure aim-down-sights FOV, speed, and camera offsets per weapon.' },
              { title: 'Realization', desc: 'Set muzzle flash, shell eject, impact, and audio per weapon from data.' },
              { title: 'Zero Scripting', desc: 'All parameters driven from data — no Blueprint modifications needed by designers.' },
            ].map(({ title, desc }) => (
              <div key={title} className="p-6 border border-white/5 hover:border-[#e8a020]/30 transition-colors">
                <i className="fas fa-check-circle text-[#e8a020] text-sm mb-3 block" />
                <h3 className="font-display text-lg text-white tracking-wider mb-2">{title.toUpperCase()}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-sm tracking-widest text-zinc-600">PRAJWAL PANDEY</p>
          <p className="text-xs text-zinc-600">&copy; 2025</p>
        </div>
      </footer>
    </>
  )
}
