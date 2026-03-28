interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-6 bg-gradient-to-br from-[#050813] via-[#0a0e27] to-[#1a1a3e]">
      {/* Animated corner effects */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-magenta-500/20 to-transparent rounded-full blur-3xl opacity-50 animate-pulse"></div>
      
      <div className="relative z-10 text-center max-w-md">
        <div className="mb-4 inline-block">
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-magenta-400 to-cyan-400 neon-text-cyan tracking-widest drop-shadow-lg">
            SOC OPS
          </h1>
        </div>
        
        <p className="text-2xl font-bold text-cyan-400 mb-12 tracking-wider" style={{textShadow: '0 0 20px #00ffff'}}>
          [INIT_SOCIAL_BINGO_v2.1]
        </p>
        
        <div className="neon-border-cyan backdrop-blur-sm bg-gradient-to-b from-cyan-500/10 to-magenta-500/10 rounded-lg p-8 mb-12 border-2 relative overflow-hidden">
          {/* Border glow effect */}
          <div className="absolute inset-0 rounded-lg" style={{boxShadow: 'inset 0 0 20px rgba(0, 255, 255, 0.2)'}}></div>
          
          <h2 className="font-bold text-cyan-300 mb-4 text-lg neon-text-cyan tracking-wider relative z-10">
            [MISSION_BRIEFING]
          </h2>
          <ul className="text-left text-cyan-300 text-sm space-y-3 relative z-10">
            <li className="flex items-start gap-3">
              <span className="text-magenta-400 text-xl leading-none">→</span>
              <span>LOCATE targets matching the protocols</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-magenta-400 text-xl leading-none">→</span>
              <span>ENGAGE by tapping the coordinate grid</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-magenta-400 text-xl leading-none">→</span>
              <span>ACHIEVE 5-in-a-row to WIN</span>
            </li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="neon-glow-button w-full py-4 px-8 rounded-lg text-xl mb-4 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-950 focus:ring-cyan-400"
        >
          [LAUNCH_GAME]
        </button>
        
        <p className="text-cyan-500 text-xs tracking-widest opacity-75">
          // ENCRYPTED_CONNECTION_ESTABLISHED
        </p>
      </div>
    </div>
  );
}
