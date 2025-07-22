import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Inferno Dyno",
      role: "Founder / Builder",
      bio: "Former Web3 enthusiast with 3+ years experience. Onchain developing experiences. Passionate about bridging traditional Esports with Blockchain Technology.",
      avatar: "@infernodyno_.png",
      twitter: "https://x.com/Infernodyno_"
    },
    {
      name: "NIN77",
      role: "Co-Founder",
      bio: "Professional esports competitor turned entrepreneur. Multiple tournament victories and deep understanding of competitive gaming ecosystems.",
      avatar: "@NIN77_A.png",
      twitter: "https://x.com/NIN77_A"
    },
    {
      name: "ꜱʜ⨀ʀɪꜰ",
      role: "Marketing Manager",
      bio: "Growth marketing specialist with expertise in Web3 community building. Promoter, Entrepreneur, Influencer",
      avatar: "@md_sharif169.png",
      twitter: "https://x.com/md_sharif169"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Spline 3D Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <iframe
          src="https://my.spline.design/interfaceii-SAnbe82LL3wBBFS07UUY9I42/"
          width="100%"
          height="100%"
          className="border-0 pointer-events-auto"
          style={{ 
            pointerEvents: 'auto',
            overflow: 'hidden'
          }}
          onWheel={(e) => e.preventDefault()}
          title="ES71 ESPORTS Team 3D Background"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen py-20 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 pointer-events-auto">
          <ScrollAnimation className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-play font-bold mb-6 hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-500">
              <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-play font-medium subtitle hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all duration-300">
              The visionaries building the future of onchain esports gaming
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <ScrollAnimation
                key={member.name}
                delay={index * 0.2}
                className="group"
              >
                <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105 hover-this">
                  <div className="relative mb-6">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-purple-500/30 group-hover:border-purple-400/60 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-200 transition-colors hover-this"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-play font-bold text-white mb-1 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-300">{member.name}</h3>
                    <p className="text-purple-300 font-play font-medium subtitle mb-4 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] transition-all duration-300">{member.role}</p>
                    <p className="text-gray-300 text-sm font-play leading-relaxed hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.3)] transition-all duration-300">{member.bio}</p>
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-purple-300 hover:text-purple-200 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] transition-all duration-300 font-play hover-this"
                    >
                      <span className="text-sm">Follow on X</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;