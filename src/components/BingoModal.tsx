interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black/70 via-blue-950/60 to-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50" style={{animation: 'fadeIn 0.3s ease-out'}}>
      <div 
        className="bg-gradient-to-br from-slate-900/90 to-blue-900/90 rounded-xl p-8 max-w-xs w-full text-center border-2 border-lime-400 relative overflow-hidden animate-bounce"
        style={{
          boxShadow: '0 0 60px rgba(0, 255, 65, 0.5), inset 0 0 30px rgba(0, 255, 65, 0.2)'
        }}
      >
        {/* Animated corner glows */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-lime-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-magenta-500/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="text-6xl mb-4 drop-shadow-lg filter" style={{textShadow: '0 0 20px #00ff41'}}>
            ◆ ✦ ◆
          </div>
          <h2 className="text-4xl font-black text-lime-300 mb-2 uppercase tracking-wider" style={{textShadow: '0 0 20px #00ff41, 0 0 40px rgba(0, 255, 65, 0.6)'}}>
            B I N G O
          </h2>
          <p className="text-cyan-300 mb-6 text-sm font-mono uppercase tracking-widest">
            [ TARGET_SEQUENCE_COMPLETE ]
          </p>
          <p className="text-cyan-200 mb-8 text-xs font-bold">
            YOU ACHIEVED 5-IN-A-ROW
          </p>
          
          <button
            onClick={onDismiss}
            className="neon-glow-button w-full py-3 px-6 rounded-lg uppercase font-black tracking-widest text-base hover:shadow-2xl focus:outline-none"
          >
            Continue_Mission
          </button>
        </div>
      </div>
    </div>
  );
}
