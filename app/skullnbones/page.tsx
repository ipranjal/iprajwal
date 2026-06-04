import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import SwiperCarousel from '@/components/SwiperCarousel'

export const metadata: Metadata = {
  title: 'Project – Skull and Bones | Prajwal Pandey',
}

export default function SkullNBonesPage() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero */}
      <header className="relative w-full h-[26rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/snb.jpg"
          alt="Skull n Bones"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white z-20">
          <h1 className="text-4xl md:text-6xl font-bold">Skull and Bones</h1>
        </div>
      </header>

      {/* Trailer */}
      <section id="trailer" className="py-16 px-8 mt-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Trailer</h2>
          <div className="relative w-full">
            <iframe
              className="w-full md:w-9/12 aspect-[16/9] rounded-lg shadow-lg mx-auto block"
              src="https://www.youtube.com/embed/76GXWdSdk5M?start=69"
              title="Skull and Bones Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section id="responsibilities" className="py-16 px-8 bg-zinc-900 text-zinc-200">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-300">
            Responsibilities
          </h2>
          <ul className="space-y-4">
            {[
              'Owned the Sea Monster feature. A core part of the game where players combat giant creatures.',
              'Worked on the encounter design for the unique gameplay experience in a game based on ship-to-ship combat.',
              'Worked on quick prototypes and iterations to turn early paper design ideas into a playable build.',
              'Contributed to establishing a functional pipeline & tools with collaboration from leads.',
              'Designed a modular AI system that allowed flexibility during encounter design.',
              'Collaborated with the art team to achieve an aesthetic look while keeping the gameplay intent clear.',
              'Worked closely with the animation team to get the right attack timings and tech anim workflow for smooth gameplay.',
              'Collaborated with the realization team to integrate proper signs & feedback (Art, VFX, Anim & Sound) in the engine.',
              'Shipped and supported the complete feature post-launch, including addressing player feedback and balancing the feature with progressing player skills.',
            ].map((item) => (
              <li key={item} className="flex items-start">
                <i className="fas fa-check-circle text-gray-400 mr-4 mt-1" />
                <p>{item}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-300 text-center">Key Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'AI Design',
                'Encounter Design',
                'Visual Scripting',
                'Prototyping',
                'Realization Design',
                'Balancing',
                'Addressing Player Feedback',
                'Collaboration',
              ].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section id="screenshots" className="py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-300">
            Screenshots
          </h2>
          <SwiperCarousel
            images={[
              { src: '/assets/sab-1.jpg', alt: 'Screenshot 1' },
              { src: '/assets/sab-2.jpg', alt: 'Screenshot 2' },
            ]}
          />
        </div>
      </section>

      {/* Gameplay */}
      <section id="gameplay" className="py-16 px-8 bg-zinc-900 text-zinc-200">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Gameplay</h2>
          <div className="relative w-full">
            <iframe
              className="w-full md:w-9/12 aspect-[16/9] rounded-lg shadow-lg mx-auto block"
              src="https://www.youtube.com/embed/q4x2dnri0FM?si=1KSWfRaluM5FY5hm"
              title="Skull and Bones Gameplay"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  )
}
