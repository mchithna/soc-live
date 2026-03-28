import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Header with neon styling */}
      <header className="flex items-center justify-between p-4 border-b-2 border-cyan-500/50 bg-gradient-to-r from-slate-900/80 to-blue-900/50 backdrop-blur-sm relative overflow-hidden" style={{boxShadow: '0 4px 20px rgba(0, 255, 255, 0.15)'}}>
        {/* Animated header glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 animate-pulse"></div>
        
        <button
          onClick={onReset}
          className="relative z-10 text-cyan-400 hover:text-cyan-200 text-sm px-4 py-2 rounded font-bold uppercase tracking-wider border border-cyan-600/50 hover:border-cyan-400/80 bg-cyan-950/30 transition-all hover:shadow-lg hover:shadow-cyan-500/50"
          style={{textShadow: '0 0 10px rgba(0, 255, 255, 0.5)'}}
        >
          ◄ EXIT
        </button>
        
        <h1 className="relative z-10 font-black text-2xl neon-text-cyan tracking-widest" style={{textShadow: '0 0 20px #00ffff, 0 0 40px rgba(0, 255, 255, 0.5)'}}>
          SOC⋮OPS
        </h1>
        
        <div className="w-20"></div>
      </header>

      {/* Instructions */}
      <div className="text-center py-3 px-4 bg-slate-900/50 border-b border-magenta-500/30">
        <p className="text-cyan-400 text-xs font-mono uppercase tracking-widest" style={{textShadow: '0 0 10px rgba(0, 255, 255, 0.4)'}}>
          ▸ LOCATE_TARGETS && TAP_SQUARES ◂
        </p>
      </div>

      {/* Bingo indicator with dramatic effect */}
      {hasBingo && (
        <div className="text-center py-4 px-4 bg-gradient-to-r from-lime-600/40 via-green-600/40 to-lime-600/40 border-y-2 border-lime-400 border-solid relative overflow-hidden" style={{boxShadow: '0 0 30px rgba(0, 255, 65, 0.5), inset 0 0 30px rgba(0, 255, 65, 0.2)'}}>
          <div className="absolute inset-0 animate-pulse"></div>
          <p className="relative z-10 font-black text-lg text-lime-200 uppercase tracking-widest" style={{textShadow: '0 0 20px #00ff41, 0 0 40px rgba(0, 255, 65, 0.6)'}}>
            ⬥ B I N G O ! ⬥
          </p>
          <p className="relative z-10 text-lime-300 text-xs mt-1 font-mono tracking-widest">
            TARGET_ACQUIRED
          </p>
        </div>
      )}

      {/* Board container */}
      <div className="flex-1 flex items-center justify-center p-4 relative">
        {/* Outer glow effect */}
        <div className="absolute inset-8 rounded-2xl pointer-events-none opacity-30" style={{boxShadow: 'inset 0 0 60px rgba(0, 255, 255, 0.3), 0 0 60px rgba(0, 255, 255, 0.1)'}}></div>
        
        <div className="bg-gradient-to-br from-slate-900/40 to-blue-900/30 p-6 rounded-xl relative z-10 backdrop-blur-sm border border-cyan-500/30" style={{boxShadow: '0 0 40px rgba(0, 255, 255, 0.2)'}}>
          <BingoBoard
            board={board}
            winningSquareIds={winningSquareIds}
            onSquareClick={onSquareClick}
          />
        </div>
      </div>
    </div>
  );
}
