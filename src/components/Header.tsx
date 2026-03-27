interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-lg uppercase tracking-widest">
          Clash<span className="text-yellow-400">Brawl</span>Turn
        </div>
        <nav className="flex gap-6">
          <a href="#tournaments" className="text-white hover:text-yellow-400 transition-colors duration-300 uppercase text-sm">
            Турниры
          </a>
          <a href="#leaderboard" className="text-white hover:text-yellow-400 transition-colors duration-300 uppercase text-sm">
            Лидеры
          </a>
          <a
            href="#leaderboard"
            className="bg-yellow-400 text-black font-bold px-4 py-1.5 uppercase text-xs tracking-wide hover:bg-yellow-300 transition-colors duration-300"
          >
            Играть
          </a>
        </nav>
      </div>
    </header>
  );
}