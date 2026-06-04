import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import LightboxImage from '@/components/LightboxImage'

export const metadata: Metadata = {
  title: 'Utility AI System – Prajwal Pandey',
}

const responsibilities = [
  'Collaborated with a programmer to design and build a modular Utility AI system in Unreal Engine.',
  'Created a Character Blueprint for the AI Controller to Move, Crouch, Aim, and Shoot — including full tech anim setup.',
  'Used the Environment Query System (EQS) for navigational behaviors: Reposition, Strafe, Cover, Patrol, and Flank.',
  'Implemented Goal Generator and Goal Data structures using C++.',
  'Built a modular enemy class and weapon system to create different weapon types and enemy archetypes via data.',
  'Responsible for overall balancing and scoring of the AI behavior system in a multi-agent combat scenario.',
]

const skills = ['Unreal Blueprint', 'C++', 'EQS', 'Tech Anim', 'AI System', 'System Design', 'Combat Design', 'Balancing']

export default function UtilityAIPage() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero */}
      <header className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/utility-ai.png"
          alt="Utility AI System"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#080808] via-black/60 to-black/20" />
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-10 pb-16 pt-32">
          <p className="label-xs mb-4">Personal Project &middot; Unreal Engine 5</p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] text-white tracking-wider leading-none mb-4">
            UTILITY<br />AI SYSTEM
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl">
            AI & Systems Designer &mdash; Modular combat AI framework with multi-agent tactical behaviors
          </p>
        </div>
      </header>

      {/* Role strip */}
      <div className="border-y border-white/5 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Type', value: 'Personal Project' },
            { label: 'Engine', value: 'Unreal Engine 5' },
            { label: 'Role', value: 'AI & Systems Designer' },
            { label: 'Repository', value: 'Public on GitHub' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[0.6rem] tracking-widest uppercase text-zinc-600 mb-1">{label}</p>
              <p className="text-sm text-zinc-200">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-start gap-4">
          <p className="label-xs">Repository</p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-4">OPEN SOURCE</h2>
          <a
            href="https://github.com/vjs22334/GenericNPCAI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 border border-white/20 text-zinc-300 text-xs tracking-widest uppercase hover:border-[#e8a020] hover:text-[#e8a020] transition-colors"
          >
            <i className="fab fa-github" /> View Repository on GitHub
          </a>
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

      {/* Design */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="label-xs mb-3">Design Work</p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-4">AI BEHAVIOR DESIGN</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-10 max-w-2xl">
            Designed AI behaviors to simulate a battle arena scenario using various tactics and decision-making — similar to shooter games like The Division.
            Designed variables that impact behaviors and worked on the utility scoring for them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            {['/assets/design1.png', '/assets/design2.png', '/assets/design3.png'].map((src, i) => (
              <LightboxImage
                key={src}
                src={src}
                alt={`Design ${i + 1}`}
                imgClassName="w-full h-72 object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Weapon Component */}
      <section className="py-20 border-t border-white/5 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="label-xs mb-3">Sub-system</p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-4">WEAPON COMPONENT</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-10 max-w-2xl">
            Created a modular weapon component that works with both player and AI. The data-driven design enables creating different weapons purely through the property panel.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <LightboxImage
              src="/assets/weapon1.png"
              alt="Weapon 1"
              containerClassName="md:col-span-2"
              imgClassName="w-full h-80 object-cover"
            />
            <LightboxImage
              src="/assets/weapon2.png"
              alt="Weapon 2"
              imgClassName="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* EQS */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="label-xs mb-3">Technical Design</p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-4">ENVIRONMENT QUERY SYSTEM</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-10 max-w-2xl">
            Used EQS to generate navigation nodes for specific AI behaviors. Each query is tuned to evaluate positional advantage relative to enemies and teammates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            <LightboxImage src="/assets/EQS1.png" alt="EQS 1" imgClassName="w-full h-72 object-cover" />
            <LightboxImage src="/assets/EQS2.gif" alt="EQS 2" containerClassName="md:col-span-2" imgClassName="w-full h-72 object-cover" />
          </div>
          <p className="text-zinc-500 text-xs tracking-wide text-center mb-8">
            Cover EQS &mdash; finds a position hidden from all enemies, near the target, and not reserved by any teammate.
          </p>
          <div className="flex justify-center mb-6">
            <LightboxImage src="/assets/EQS3.png" alt="EQS 3" containerClassName="w-full md:w-1/2" imgClassName="w-full h-72 object-cover" />
          </div>
          <p className="text-zinc-500 text-xs tracking-wide text-center mb-8">
            Reposition EQS &mdash; finds a better firing position with context to nearby enemies and teammates.
          </p>
          <div className="flex justify-center mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/EQS4.png" alt="EQS Context List" className="w-full md:w-2/3 h-auto object-cover" />
          </div>
          <p className="text-zinc-500 text-xs tracking-wide text-center">
            EQS Context list used for improved node calculation.
          </p>
        </div>
      </section>

      {/* Character */}
      <section className="py-20 border-t border-white/5 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="label-xs mb-3">Animation</p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-4">CHARACTER SETUP</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-10 max-w-2xl">
            Built Unreal&apos;s Animation Blueprint to create aim offsets for the AI controller to look, aim, and shoot — along with movement ability blends.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            {[
              ['/assets/character1.png', 'Character 1'],
              ['/assets/character2.png', 'Character 2'],
              ['/assets/character3.png', 'Character 3'],
              ['/assets/character4.png', 'Character 4'],
            ].map(([src, alt]) => (
              <LightboxImage key={src} src={src} alt={alt} imgClassName="w-full h-72 object-cover" />
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="label-xs mb-3">Videos</p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-10">SHOWCASE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="aspect-[16/9]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/T-m9Xv3hVhY?si=l0KMTSYSFt1O98Wr"
                  title="Utility AI Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-xs text-zinc-500 mt-3 tracking-wide">Full system showcase</p>
            </div>
            <div>
              <div className="aspect-[16/9]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/t9uvMAhkY3o?si=J7-EEM6PLUdaFugF"
                  title="Behavior Data Component"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-xs text-zinc-500 mt-3 tracking-wide">How to use the Behavior Data Component</p>
            </div>
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
