import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center rounded-lg transition-all duration-200 select-none min-h-[70px] text-xs leading-tight font-bold uppercase tracking-tight';

  let stateClasses = '';
  let borderClasses = '';

  if (square.isFreeSpace) {
    stateClasses = 'bg-gradient-to-br from-purple-500/30 to-magenta-500/30 text-magenta-300';
    borderClasses = 'neon-border-magenta';
  } else if (isWinning) {
    stateClasses = 'bg-gradient-to-br from-lime-500/40 to-green-500/30 text-lime-200 shadow-xl';
    borderClasses = 'neon-border-lime';
  } else if (square.isMarked) {
    stateClasses = 'bg-gradient-to-br from-cyan-500/30 to-blue-500/20 text-cyan-200';
    borderClasses = 'neon-border-cyan';
  } else {
    stateClasses = 'bg-gradient-to-br from-slate-900/60 to-slate-800/40 text-cyan-300 hover:text-cyan-100 hover:from-slate-800/80 hover:to-slate-700/50 border border-cyan-500/50 hover:border-cyan-400';
    borderClasses = '';
  }

  const combinedClasses = [baseClasses, stateClasses, borderClasses].filter(Boolean).join(' ');

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={combinedClasses}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
      style={{
        ...(isWinning && { boxShadow: '0 0 30px rgba(0, 255, 65, 0.6), 0 0 60px rgba(0, 255, 65, 0.3)' }),
        ...(square.isMarked && !isWinning && square.isFreeSpace === false && { boxShadow: '0 0 20px rgba(0, 255, 255, 0.4), inset 0 0 10px rgba(0, 255, 255, 0.1)' }),
      }}
    >
      <span className="wrap-break-word hyphens-auto">
        {square.text}
      </span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-lime-400 text-sm font-black drop-shadow-lg" style={{textShadow: '0 0 10px #00ff41'}}>
          ◆
        </span>
      )}
      {square.isFreeSpace && (
        <span className="absolute inset-0 flex items-center justify-center opacity-30">
          ※
        </span>
      )}
    </button>
  );
}
