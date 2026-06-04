import Link from 'next/link'
import StickyNavbar from '@/components/StickyNavbar'

export default function Home() {
  return (
    <>
      <StickyNavbar />

      {/* Hero */}
      <header className="relative aspect-[4/1]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white z-20">
          <h1 className="text-4xl md:text-6xl font-bold">Prajwal Pandey</h1>
          <p className="text-lg md:text-xl mt-2">Technical Game Designer</p>
          <div className="mt-6 flex space-x-4">
            <a href="#about" className="w-32 px-4 py-3 border border-white text-white rounded-lg flex justify-center items-center hover:bg-white hover:bg-opacity-80 hover:text-black transition">
              About Me
            </a>
            <a href="#projects" className="w-32 px-4 py-3 border border-white text-white rounded-lg flex justify-center items-center hover:bg-white hover:bg-opacity-80 hover:text-black transition">
              Projects
            </a>
            <a
              href="/prajwal-pandey-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 px-4 py-3 border border-white text-white rounded-lg flex justify-center items-center hover:bg-white hover:bg-opacity-80 hover:text-black transition"
            >
              CV
            </a>
          </div>
        </div>
      </header>

      {/* Projects */}
      <section id="projects" className="py-16 px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>

        {[
          { href: '/skullnbones/', src: '/assets/snb.jpg', alt: 'Skull and Bones' },
          { href: '/utilityai/', src: '/assets/utility-ai.jpg', alt: 'Utility AI' },
          { href: '/weapon/', src: '/assets/weapon.jpg', alt: 'Modular Weapon System' },
        ].map(({ href, src, alt }) => (
          <div key={href} className="relative w-full mb-8">
            <Link href={href} className="block w-full h-full relative group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className="w-full md:w-9/12 aspect-[16/9] object-cover mx-auto"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition" />
              <div className="absolute inset-0 flex items-center justify-center text-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition">
                Learn More →
              </div>
            </Link>
          </div>
        ))}
      </section>

      {/* About */}
      <section id="about" className="py-16 px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/profile.jpg"
              alt="Prajwal Pandey"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg leading-relaxed mb-4">
              Hi, I&apos;m <strong>Prajwal Pandey</strong>, a Technical Game Designer working at Ubisoft. I am passionate about bridging creativity and tech to build immersive player experiences.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I hold experience working with proprietary engine and specialize in AAA gameplay systems, mechanics prototyping, and scripting with a focus on optimization and scalability.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I have been playing video games for pretty much my entire life and now I&apos;m planning to craft fun games for the rest of it.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I thrive where creative ambition meets technical execution :)
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="mailto:therealprajwal@gmail.com" className="w-16 px-6 py-3 border border-white text-white rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition">
                <i className="fas fa-envelope" />
              </a>
              <a href="tel:+919167616525" className="w-16 px-6 py-3 border border-white text-white rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition">
                <i className="fas fa-phone" />
              </a>
              <a href="https://www.linkedin.com/in/grazerx/" target="_blank" rel="noopener noreferrer" className="w-16 px-6 py-3 border border-white text-white rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition">
                <i className="fab fa-linkedin" />
              </a>
            </div>
            <div className="mt-6">
              <a
                href="/prajwal-pandey-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-56 px-6 py-3 border border-white text-white rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                View CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
