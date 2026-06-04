import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import LightboxImage from '@/components/LightboxImage'

export const metadata: Metadata = {
  title: 'Project – Utility AI | Prajwal Pandey',
}

export default function UtilityAIPage() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero */}
      <header className="relative w-full h-[26rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/utility-ai.png"
          alt="Utility AI"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white z-20">
          <h1 className="text-4xl md:text-6xl font-bold">Utility AI System</h1>
        </div>
      </header>

      {/* GitHub */}
      <section id="github" className="py-16 px-8 mt-16">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-300">GitHub Repository</h2>
          <a
            href="https://github.com/vjs22334/GenericNPCAI"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white text-white rounded-lg shadow-md flex justify-center items-center hover:bg-white hover:text-black transition"
          >
            View Repository on GitHub
          </a>
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
              'Collaborated with a programmer to build a modular Utility AI system in Unreal Engine.',
              'Created a Character Blueprint for the AI Controller to Move, Crouch, Aim & Shoot and handled the tech anim side of things.',
              'Worked with the Environment Query system for the AI to use while navigating around and performing behaviors such as Reposition, Strafe, Cover, Petrol & Flank.',
              'Worked in setting up the Goal Generator and Goal Data using C++.',
              'Also created a modular enemy class & weapon system to easily create different weapons and enemy classes with unique attributes.',
              'Overall balancing and scoring of the AI System Combat Scenario.',
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
                'Unreal Blueprint',
                'EQS',
                'Tech Anim',
                'C++',
                'AI System',
                'System Design',
                'Combat Design',
              ].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design */}
      <section id="design" className="py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-300">Design</h2>
          <p className="text-lg leading-relaxed mt-5 mb-8">
            Designed various AI Behaviors to simulate a battle arena scenario using various tactics and
            decision making (Similar to shooter games like Division).
            <br />
            Designed variables that impact the behaviors for the utility AI &amp; worked on the scoring
            for them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[
              { src: '/assets/design1.png', alt: 'Design 1' },
              { src: '/assets/design2.png', alt: 'Design 2' },
              { src: '/assets/design3.png', alt: 'Design 3' },
            ].map((img) => (
              <LightboxImage
                key={img.src}
                src={img.src}
                alt={img.alt}
                imgClassName="w-full h-96 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Weapon Component */}
      <section id="weapon-component" className="py-16 px-8 bg-zinc-900 text-zinc-200">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-300">
            Weapon Component
          </h2>
          <p className="text-lg leading-relaxed text-center mb-8">
            Created a small scale weapon component that works with player &amp; AI. The modular design
            enables the user to create different weapons using property tab.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <LightboxImage
              src="/assets/weapon1.png"
              alt="Weapon 1"
              containerClassName="md:col-span-2"
              imgClassName="w-full h-96 object-cover rounded-lg shadow-md"
            />
            <LightboxImage
              src="/assets/weapon2.png"
              alt="Weapon 2"
              imgClassName="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Environmental Query System */}
      <section id="eqs" className="py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-300">
            Environmental Query System
          </h2>
          <p className="text-lg leading-relaxed text-center mb-8">
            Used EQS to generate nodes in order to specific execute navigational behavior.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <LightboxImage
              src="/assets/EQS1.png"
              alt="EQS 1"
              imgClassName="w-full h-96 object-cover rounded-lg shadow-md"
            />
            <LightboxImage
              src="/assets/EQS2.gif"
              alt="EQS 2"
              containerClassName="md:col-span-2"
              imgClassName="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          <p className="text-lg leading-relaxed text-center mb-8">
            Cover EQS – Finds a cover that is hidden from all enemies, is near the target enemy and not
            reserved by any teammate.
          </p>
          <div className="relative group mb-6">
            <LightboxImage
              src="/assets/EQS3.png"
              alt="EQS 3"
              containerClassName="w-1/2 mx-auto"
              imgClassName="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          <p className="text-lg leading-relaxed text-center mb-8">
            Reposition EQS to find a better position to shoot enemy with context to other enemies and
            teammates around.
          </p>
          <div className="mx-auto flex flex-col items-center mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/EQS4.png"
              alt="EQS 4"
              className="w-9/12 h-auto object-cover rounded-lg shadow-md mb-8"
            />
          </div>
          <p className="text-lg leading-relaxed text-center mb-8">
            List of EQS Context used for better node calculation results.
          </p>
        </div>
      </section>

      {/* Character */}
      <section id="character" className="py-16 px-8 bg-zinc-900 text-zinc-200">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-300">Character</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <LightboxImage
              src="/assets/character1.png"
              alt="Character 1"
              imgClassName="w-full h-96 object-cover rounded-lg shadow-md"
            />
            <LightboxImage
              src="/assets/character2.png"
              alt="Character 2"
              imgClassName="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <LightboxImage
              src="/assets/character3.png"
              alt="Character 3"
              imgClassName="w-full h-96 object-cover rounded-lg shadow-md"
            />
            <LightboxImage
              src="/assets/character4.png"
              alt="Character 4"
              imgClassName="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          <p className="text-lg leading-relaxed mb-8">
            Worked with Unreal&apos;s Animation Blueprint to create Aim offset for the AI controller to
            look, aim &amp; shoot along with other movement abilities.
          </p>
        </div>
      </section>

      {/* Videos */}
      <section id="videos" className="py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="relative w-full">
              <iframe
                className="w-full h-96 rounded-lg shadow-lg mx-auto"
                src="https://www.youtube.com/embed/T-m9Xv3hVhY?si=l0KMTSYSFt1O98Wr"
                title="Utility AI Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <p className="text-lg text-center leading-relaxed mt-4">Showcase</p>
            </div>
            <div className="relative w-full">
              <iframe
                className="w-full h-96 rounded-lg shadow-lg mx-auto"
                src="https://www.youtube.com/embed/t9uvMAhkY3o?si=J7-EEM6PLUdaFugF"
                title="Behavior Data Component"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <p className="text-lg text-center leading-relaxed mt-4">
                Example on how to use Behavior Data Component
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
