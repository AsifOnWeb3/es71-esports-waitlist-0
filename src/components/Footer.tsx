import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-black/50 backdrop-blur-sm border-t border-purple-500/20 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <img src="/finalll-logo.svg" alt="ES71 ESPORTS" className="w-16 h-16" />
          <span className="text-lg font-play font-bold bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-300">
            ES71 ESPORTS
          </span>
        </div>
        
        <p className="text-gray-400 mb-2 font-play hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.3)] transition-all duration-300">
          © 2025 ES71 ESPORTS
        </p>
        
        <div className="flex flex-col items-center mb-4">
          <span className="text-gray-400 text-sm font-play mb-2">Built on</span>
          <img src="/logo-footer.svg" alt="Powered by Monad" className="h-8" />
        </div>
        
        <a
          href="https://twitter.com/es71esports"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 bg-purple-500/20 hover:bg-purple-500/40 rounded-full transition-all duration-300 hover:scale-110 hover-this"
        >
          <svg className="w-5 h-5 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;