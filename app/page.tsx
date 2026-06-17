import Link from 'next/link'
import StickyNavbar from '@/components/StickyNavbar'

const projects = [
  {
    href: '/skullnbones/',
    src: '/assets/snb.jpg',
    alt: 'Skull and Bones',
    num: '01',
    title: 'Skull and Bones',
    studio: 'Ubisoft Singapore',
    role: 'Technical Game Designer',
    tags: ['AAA', 'AI Design', 'Encounter Design', 'Live Ops Support'],
    description:
      'Worked on the Sea Monster feature - a core PvE pillar where players battle giant creatures in open-sea encounters. Worked during the full lifecycle from paper design through prototyping, realization, and post-launch balance.',
  },
  {
    href: '/utilityai/',
    src: '/assets/utility-ai.jpg',
    alt: 'Utility AI System',
    num: '02',
    title: 'Utility AI System',
    studio: 'Personal Project',
    role: 'AI & Systems Designer',
    tags: ['Unreal Engine', 'C++', 'EQS', 'Combat AI'],
    description:
      'Built a modular Utility AI framework in Unreal Engine. Designed scoring, goal generation, and navigational behaviors (Cover, Reposition, Strafe, Flank) for a multi-agent combat scenario.',
  },
]

const githubProjects = [
  {
    href: 'https://github.com/iAmGrazerX/SoulsEnemyAI',
    title: 'Souls Enemy AI',
    num: '01',
    tags: ['Souls Like', 'C++', 'GAS', 'State Tree', 'Architecture Design'],
    description:
      'Built a modular Souls-like AI combat framework in Unreal Engine using StateTree and Gameplay Ability System, featuring weapon-driven behaviors, adaptive attack selection, and data-driven combat configuration.',
    language: 'Blueprint & C++',
  },
  {
    href: 'https://github.com/iAmGrazerX/SWAT_AICompanion',
    title: 'SWAT AI Companion',
    num: '02',
    tags: ['Tactical Sim', 'C++', 'GAS', 'AI Commands', 'Companion AI'],
    description:
      'Tactical AI companion inspired by Ready or Not. Listens to player commands and executes them through Unreal\'s Gameplay Ability System - supports breach, cover, move, and engage orders.',
    language: 'Blueprint & C++',
  },
  {
    href: 'https://github.com/iAmGrazerX/Military-Sim-Prototype',
    title: 'Military Sim Prototype',
    num: '03',
    tags: ['Tactical Sim', 'Blueprint', 'Third Person', '3Cs', 'Prototype'],
    description:
      'Hardcore third-person shooter prototype with Ghost Recon Breakpoint-inspired 3Cs (Character, Camera, Controls). Focuses on grounded movement feel, ADS, and input responsiveness.',
    language: 'Blueprint',
  },
  {
    href: 'https://github.com/iAmGrazerX/AlienAI',
    title: 'Alien AI',
    num: '04',
    tags: ['Horror AI', 'State Tree', 'AI Perception', 'Prototype'],
    description:
      'Replication of the Alien Isolation xenomorph AI using Unreal\'s AI Perception system. Explores sight, sound, and prediction-based threat assessment for horror-game tension.',
    language: 'Blueprint',
  },
  {
    href: 'https://github.com/iAmGrazerX/ModularWeaponSystem',
    title: 'Modular Weapon System',
    num: '05',
    tags: ['Weapon Design', 'Blueprint', 'Systems Design', 'Data Driven System'],
    description:
      'Advanced modular weapon framework enabling designers to configure fully functional weapons - projectile, hitscan, ADS, recoil, and spray patterns - entirely through data assets, without touching a single Blueprint script.',
    language: 'Blueprint',
  },
]

const skills = [
  {
    category: 'Design',
    icon: 'fas fa-gamepad',
    items: ['Systems Design', 'AI Design', 'Combat Design', 'System Architecture', 'Gameplay Balancing'],
  },
  {
    category: 'Technical',
    icon: 'fas fa-code',
    items: ['Unreal Blueprint', 'Gameplay Ability System', 'EQS', 'State Machine', 'AI Framework' , 'Rapid Prototyping'],
  },
  {
    category: 'Production',
    icon: 'fas fa-users',
    items: ['Feature Ownership', 'Cross-discipline Collaboration', 'Post-launch Support', 'Player Feedback Analysis'],
  },
  {
    category: 'Tools',
    icon: 'fas fa-tools',
    items: ['Unreal Engine 5', 'Proprietary Engines', 'Perforce', 'JIRA', 'Confluence'],
  },
]

export default function Home() {
  return (
    <>
      <StickyNavbar />

      {/* Hero */}
      <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay loop muted playsInline
        >
          <source src="/assets/banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-[#080808]" />

        <div className="relative z-20 text-center px-6 flex flex-col items-center">
          <p className="label-xs mb-6 animate-fade-up delay-100">Technical Design &middot; AI Design &middot; Gameplay System Design</p>
          <h1 className="font-display text-7xl md:text-[10rem] lg:text-[12rem] leading-none text-white tracking-wider animate-fade-up delay-200">
            PRAJWAL<br />PANDEY
          </h1>
          <p className="mt-6 text-zinc-400 text-sm md:text-base tracking-wide max-w-md animate-fade-up delay-300">
            Designing gameplay systems that bridge creative ambition and technical execution.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-up delay-400">
            <a
              href="#projects"
              className="px-8 py-3 bg-[#e8a020] text-black text-xs tracking-widest uppercase font-semibold hover:bg-amber-400 transition-colors"
            >
              View Work
            </a>
            <a
              href="#about"
              className="px-8 py-3 border border-white/30 text-white text-xs tracking-widest uppercase hover:border-white hover:bg-white/5 transition-colors"
            >
              About Me
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-zinc-500">
          <span className="text-[0.6rem] tracking-widest uppercase">Scroll</span>
          <i className="fas fa-chevron-down text-xs scroll-indicator" />
        </div>
      </header>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16">
          <p className="label-xs mb-3">Portfolio</p>
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider">SELECTED WORK</h2>
        </div>

        {projects.map((project, i) => (
          <div
            key={project.href}
            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} border-t border-white/5`}
          >
            {/* Image */}
            <div className="md:w-1/2 relative overflow-hidden aspect-[16/9] md:aspect-auto md:min-h-[420px] group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />
            </div>

            {/* Text */}
            <div className="md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12 bg-[#0d0d0d]">
              <span className="font-display text-6xl text-white/5 leading-none mb-4 select-none">{project.num}</span>
              <p className="label-xs mb-3">{project.studio}</p>
              <h3 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-2">{project.title}</h3>
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-6">{project.role}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[0.65rem] tracking-wider uppercase px-3 py-1 border border-white/10 text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">{project.description}</p>
              <Link
                href={project.href}
                className="self-start text-xs tracking-widest uppercase text-[#e8a020] hover:text-amber-300 transition-colors flex items-center gap-2 group"
              >
                View Case Study
                <i className="fas fa-arrow-right text-xs transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Open Source */}
      <section id="opensource" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16">
          <p className="label-xs mb-3">GitHub</p>
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider">OPEN SOURCE</h2>
          <p className="mt-4 text-zinc-500 text-sm max-w-xl">
            Personal R&amp;D projects - prototypes built to explore mechanics, systems, and AI techniques in Unreal Engine.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {githubProjects.map((project) => (
            <a
              key={project.href}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0d0d0d] p-8 md:p-10 flex flex-col hover:bg-[#111] transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-display text-5xl text-white/5 leading-none select-none">{project.num}</span>
                <div className="flex items-center gap-2 text-zinc-600 group-hover:text-[#e8a020] transition-colors">
                  <i className="fab fa-github text-lg" />
                  <i className="fas fa-arrow-up-right-from-square text-xs" />
                </div>
              </div>

              <h3 className="font-display text-2xl md:text-3xl text-white tracking-wider mb-3 group-hover:text-[#e8a020] transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[0.6rem] tracking-wider uppercase px-2.5 py-1 border border-white/10 text-zinc-500">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 mt-10 text-center md:text-left">
          <a
            href="https://github.com/iAmGrazerX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-zinc-500 hover:text-[#e8a020] transition-colors"
          >
            <i className="fab fa-github" />
            View all on GitHub
            <i className="fas fa-arrow-right text-xs transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="label-xs mb-3">Expertise</p>
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider mb-16">SKILL SET</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {skills.map(({ category, icon, items }) => (
              <div key={category} className="bg-[#080808] p-8">
                <i className={`${icon} text-[#e8a020] text-xl mb-5 block`} />
                <h3 className="font-display text-xl text-white tracking-wider mb-4">{category.toUpperCase()}</h3>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item} className="text-sm text-zinc-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#e8a020] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Photo */}
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/profile.jpg"
                alt="Prajwal Pandey"
                className="w-full aspect-[3/4] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#e8a020] pointer-events-none" />
            </div>

            {/* Bio */}
            <div>
              <p className="label-xs mb-3">About</p>
              <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider mb-8">WHO I AM</h2>

              <div className="grid grid-cols-3 gap-4 mb-10 py-6 border-y border-white/5">
                <div>
                  <p className="font-display text-3xl text-[#e8a020]">AAA</p>
                  <p className="text-[0.65rem] tracking-widest uppercase text-zinc-500 mt-1">Experience</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-[#e8a020]">Ubisoft</p>
                  <p className="text-[0.65rem] tracking-widest uppercase text-zinc-500 mt-1">Current Studio</p>
                </div>
                {/* <div>
                  <p className="font-display text-3xl text-[#e8a020]">Skull&nbsp;&amp;&nbsp;Bones</p>
                  <p className="text-[0.65rem] tracking-widest uppercase text-zinc-500 mt-1">Shipped Title</p>
                </div> */}
              </div>

              <p className="text-zinc-300 leading-relaxed mb-4">
                I&apos;m a Technical Game Designer with almost 3 years of industry experience specializing in AI architecture, Boss Encounter design, and Gameplay systems.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-4">
                I have experience in AAA gameplay systems, mechanics prototyping, and scripting with a focus on optimization and scalability. I&apos;ve worked with proprietary engines and cross-discipline teams to ship features that resonate with players.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-10">
                I enjoy building data-driven systems designed for designer-owned iteration.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="mailto:therealprajwal@gmail.com"
                  className="flex items-center gap-2 px-4 py-2.5 border border-white/10 text-zinc-400 hover:border-white/30 hover:text-white transition-colors text-sm"
                >
                  <i className="fas fa-envelope text-xs" /> Email
                </a>
                <a
                  href="https://www.linkedin.com/in/grazerx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 border border-white/10 text-zinc-400 hover:border-white/30 hover:text-white transition-colors text-sm"
                >
                  <i className="fab fa-linkedin text-xs" /> LinkedIn
                </a>
                <a
                  href="tel:+919167616525"
                  className="flex items-center gap-2 px-4 py-2.5 border border-white/10 text-zinc-400 hover:border-white/30 hover:text-white transition-colors text-sm"
                >
                  <i className="fas fa-phone text-xs" /> Phone
                </a>
              </div>

              <a
                href="/prajwal-pandey-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3 bg-[#e8a020] text-black text-xs tracking-widest uppercase font-semibold hover:bg-amber-400 transition-colors"
              >
                Download Resume <i className="fas fa-download text-xs" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-sm tracking-widest text-zinc-600">PRAJWAL PANDEY</p>
          <p className="text-xs text-zinc-600 tracking-wide">
            Open to new opportunities &mdash;{' '}
            <a href="mailto:therealprajwal@gmail.com" className="text-[#e8a020] hover:text-amber-300 transition-colors">
              Get in touch
            </a>
          </p>
          <p className="text-xs text-zinc-700">&copy; 2025</p>
        </div>
      </footer>
    </>
  )
}
