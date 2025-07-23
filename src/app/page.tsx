'use client';

import Image from "next/image";
import { useState } from "react";

type Technology = 
  'Next.js' | 'React' | 'Tailwind CSS' | 'Prisma' | 'TypeScript' | 'Stripe' | 
  'Google Maps API' | 'Solidity' | 'RainbowKit' | 'Ethers.js' | 'PostgreSQL' | 
  'Hardhat' | 'IPFS';

interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  media: Array<{
    type: 'image' | 'video';
    src: string;
  }>;
}

const projects: Project[] = [
  {
    title: "ExpatMe.fr - 2025 (En développement)",
    description: "Plateforme d'aide à l'expatriation avec quizz personnalisé. Intègre : API Google Maps, Prisma ORM, Stripe pour les paiements, et système de recommandation basé sur les réponses. Projet non finalisé mais architecture de base fonctionnelle.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Prisma", "Stripe", "Google Maps API", "TypeScript"],
    media: [
      { type: 'image', src: '/expatme1.png' },
      { type: 'image', src: '/expatme2.png' },
      { type: 'image', src: '/expatme3.png' },
      { type: 'image', src: '/expatme4.png' }
    ]
  },
  {
    title: "Multislot - 2025",
    description: "Projet de casino blockchain avec création de machines à sous personnalisables. Connexion grâce à RainbowKit.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Solidity", "RainbowKit", "Ethers.js"],
    media: [
      { type: 'image', src: '/Multislot 1.png' },
      { type: 'video', src: '/Multislot 2.mp4' }
    ]
  },
  {
    title: "Durandall - 2024",
    description: "Plateforme e-commerce avec base de données étendue. Développé avec Prisma, Tailwind et Next.js pour une expérience utilisateur élégante.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Prisma", "PostgreSQL"],
    media: [
      { type: 'image', src: '/Virgile 1.png' },
      { type: 'image', src: '/Virgile 2.png' },
      { type: 'image', src: '/Virgile 3.png' }
    ]
  },
  {
    title: "CertiFi - 2023",
    description: "Solution de certification blockchain via NFTs 100% fonctionnelle. Permet la création de diplômes et certificats sécurisés avec système de whitelist.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Solidity", "Hardhat", "IPFS"],
    media: [
      { type: 'image', src: '/CertiFi 1.png' }
    ]
  }
];

const techColors: Record<Technology, string> = {
  'Next.js': 'bg-blue-600',
  'React': 'bg-sky-600',
  'Tailwind CSS': 'bg-cyan-500',
  'Prisma': 'bg-emerald-600',
  'TypeScript': 'bg-blue-800',
  'Stripe': 'bg-purple-600',
  'Google Maps API': 'bg-red-600',
  'Solidity': 'bg-gray-600',
  'RainbowKit': 'bg-pink-600',
  'Ethers.js': 'bg-yellow-600',
  'PostgreSQL': 'bg-indigo-600',
  'Hardhat': 'bg-orange-600',
  'IPFS': 'bg-teal-600'
};

export default function Home() {
  const [currentIndices, setCurrentIndices] = useState<number[]>(projects.map(() => 0));
  const [expandedProjects, setExpandedProjects] = useState<boolean[]>(projects.map(() => false));

  const toggleProject = (index: number) => {
    setExpandedProjects(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const navigateSlide = (projectIndex: number, direction: number) => {
    setCurrentIndices(prev => {
      const newIndices = [...prev];
      const mediaCount = projects[projectIndex].media.length;
      newIndices[projectIndex] = (newIndices[projectIndex] + direction + mediaCount) % mediaCount;
      return newIndices;
    });
  };

  return (
    <main className="min-h-screen bg-black text-white font-mono">
      {/* Header Section */}
      <header className="py-12 text-center border-b border-gray-800">
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-16 rounded-full border-2 border-gray-600 overflow-hidden">
            <Image
              src="/Design sans titre.png"
              width={64}
              height={64}
              alt="Photo Enzo Rolandin"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">ENZO_ROLANDIN</h1>
            <p className="text-xl text-gray-400">PORTFOLIO_2025</p>
          </div>
        </div>
        <p className="mt-4 text-gray-500">enzo.rolandin@gmail.com</p>
      </header>

      {/* About Section */}
      <section className="max-w-2xl mx-auto px-6 py-8 mb-12 text-center border border-gray-800 bg-gray-900">
        <p className="text-lg leading-relaxed font-bold">
          {`> DEVELOPPEUR_19ANS`} <br />
          {`> BRETAGNE_FRANCE`} <br />
          {`> SPECIALISATION: WEB3_FULLSTACK`} <br />
          {`> LANGUES: FRANCAIS_ANGLAIS`}
        </p>
        <div className="mt-6">
          <div className="text-gray-400 mb-2">{`> TECHNOLOGIES_PRINCIPALES:`}</div>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-xs bg-blue-600 px-2 py-1 rounded">Next.js</span>
            <span className="text-xs bg-sky-600 px-2 py-1 rounded">React</span>
            <span className="text-xs bg-cyan-500 px-2 py-1 rounded">Tailwind CSS</span>
            <span className="text-xs bg-blue-800 px-2 py-1 rounded">TypeScript</span>
          </div>
        </div>
      </section>

      {/* Projects Tree */}
      <section className="max-w-6xl mx-auto px-6 space-y-2 pb-20">
        <div className="text-gray-500 mb-4">{`> PROJETS_ (${projects.length})`}</div>
        
        {projects.map((project, projectIndex) => (
          <div key={projectIndex} className="ml-4">
            {/* Project Header */}
            <div 
              className={`flex items-center py-3 px-4 hover:bg-gray-900 cursor-pointer ${expandedProjects[projectIndex] ? 'bg-gray-900' : ''}`}
              onClick={() => toggleProject(projectIndex)}
            >
              <span className="mr-2">{expandedProjects[projectIndex] ? '▼' : '▶'}</span>
              <span className="font-bold">{project.title}</span>
              {project.title.includes("En développement") && (
                <span className="ml-2 text-xs bg-yellow-600 text-white px-2 py-1 rounded">EN COURS</span>
              )}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleProject(projectIndex);
                }}
                className="ml-auto px-3 py-1 bg-gray-800 hover:bg-gray-700 text-xs rounded"
              >
                {expandedProjects[projectIndex] ? '[FERMER]' : '[OUVRIR]'}
              </button>
            </div>

            {/* Project Content */}
            {expandedProjects[projectIndex] && (
              <div className="ml-8 border-l-2 border-gray-700 pl-4 py-4">
                <div className="mb-6 bg-gray-900 p-4 rounded">
                  <div className="text-gray-400 mb-2">{`> DESCRIPTION:`}</div>
                  <p className="font-bold">{project.description}</p>
                  
                  <div className="mt-4">
                    <div className="text-gray-400 mb-1">{`> TECHNOS_UTILISEES:`}</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className={`text-xs px-2 py-1 rounded ${techColors[tech]}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="text-gray-400 mb-2">{`> MEDIA:`}</div>
                <div className="relative h-96 md:h-[32rem] rounded border border-gray-800 bg-black overflow-hidden">
                  {project.media.map((media, mediaIndex) => (
                    <div 
                      key={mediaIndex}
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                        mediaIndex === currentIndices[projectIndex] ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {media.type === 'video' ? (
                        <video
                          src={media.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <Image
                          src={media.src}
                          alt={`${project.title} - ${mediaIndex + 1}`}
                          fill
                          className="object-contain"
                        />
                      )}
                    </div>
                  ))}

                  {project.media.length > 1 && (
                    <>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateSlide(projectIndex, -1);
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800/90 text-white p-2 rounded-full transition border border-gray-700"
                      >
                        ◄
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateSlide(projectIndex, 1);
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800/90 text-white p-2 rounded-full transition border border-gray-700"
                      >
                        ►
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800 text-xs">
        <p>{`© ${new Date().getFullYear()} ENZO_ROLANDIN - TOUS_DROITS_RÉSERVÉS`}</p>
      </footer>
    </main>
  );
}