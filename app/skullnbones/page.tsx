import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import SwiperCarousel from '@/components/SwiperCarousel'

export const metadata: Metadata = {
  title: 'Skull and Bones – Prajwal Pandey',
}

const responsibilities = [
  'Owned the Sea Monster feature — a core PvE pillar where players combat giant creatures in open-sea encounters.',
  'Designed encounter flow, spawn logic, and phase transitions to create a dynamic challenge that scaled with player progression.',
  'Built quick prototypes and iterated rapidly from paper design to playable build in a proprietary engine.',
  'Established a functional design pipeline and toolset in close collaboration with tech and design leads.',
  'Designed a modular AI system providing flexibility and reusability across encounter variants.',
  'Collaborated with the art team to achieve cinematic quality while preserving gameplay readability.',
  'Partnered with the animation team on attack timings and tech anim workflows for smooth, responsive combat.',
  'Led realization integration — working with VFX, audio, and UX to deliver complete, shippable encounters.',
  'Shipped and supported the full feature post-launch, responding to live player data and balance feedback.',
]

const skills = ['AI Design', 'Encounter Design', 'Visual Scripting', 'Prototyping', 'Realization Design', 'Balancing', 'Post-launch Support', 'Cross-discipline Collaboration']

export default function SkullNBonesPage() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero */}
      <header className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/snb.jpg"
          alt="Skull and Bones"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#080808] via-black/60 to-black/20" />
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-10 pb-16 pt-32">
          <p className="label-xs mb-4">Ubisoft Singapore &middot; AAA Title</p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] text-white tracking-wider leading-none mb-4">
            SKULL<br />AND BONES
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl">
            Technical Game Designer &mdash; Sea Monster Feature Lead
          </p>
        </div>
      </header>

      {/* Role strip */}
      <div className="border-y border-white/5 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Studio', value: 'Ubisoft Singapore' },
            { label: 'Role', value: 'Technical Game Designer' },
            { label: 'Feature', value: 'Sea Monster' },
            { label: 'Platform', value: 'PS5 / XSX / PC' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[0.6rem] tracking-widest uppercase text-zinc-600 mb-1">{label}</p>
              <p className="text-sm text-zinc-200">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trailer */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="label-xs mb-3">Trailer</p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-10">GAME OVERVIEW</h2>
          <div className="aspect-[16/9] max-w-4xl mx-auto">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/76GXWdSdk5M?start=69"
              title="Skull and Bones Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-20 border-t border-white/5 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="label-xs mb-3">Contributions</p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-12">RESPONSIBILITIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {responsibilities.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 border border-white/5 hover:border-[#e8a020]/30 transition-colors group">
                <span className="font-display text-2xl text-white/10 leading-none shrink-0 mt-0.5 group-hover:text-[#e8a020]/30 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm text-zinc-400 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="label-xs mb-4">Key Skills</p>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span key={skill} className="text-xs tracking-wider uppercase px-3 py-1.5 border border-white/10 text-zinc-400 hover:border-[#e8a020]/50 hover:text-zinc-200 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="label-xs mb-3">Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-10">SCREENSHOTS</h2>
          <SwiperCarousel
            images={[
              { src: '/assets/sab-1.jpg', alt: 'Screenshot 1' },
              { src: '/assets/sab-2.jpg', alt: 'Screenshot 2' },
            ]}
          />
        </div>
      </section>

      {/* Gameplay */}
      <section className="py-20 border-t border-white/5 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="label-xs mb-3">Video</p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-10">GAMEPLAY</h2>
          <div className="aspect-[16/9] max-w-4xl mx-auto">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/q4x2dnri0FM?si=1KSWfRaluM5FY5hm"
              title="Skull and Bones Gameplay"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
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
