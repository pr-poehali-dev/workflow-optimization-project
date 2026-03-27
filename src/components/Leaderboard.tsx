import { useState } from "react";

const clashLeaders = [
  { rank: 1, name: "KingSlayer99", trophies: 8420, wins: 47, game: "Clash Royale" },
  { rank: 2, name: "DarkKnight_X", trophies: 8105, wins: 43, game: "Clash Royale" },
  { rank: 3, name: "RoyalDestroyer", trophies: 7890, wins: 39, game: "Clash Royale" },
  { rank: 4, name: "CardMaster_Pro", trophies: 7654, wins: 36, game: "Clash Royale" },
  { rank: 5, name: "IceWizard777", trophies: 7421, wins: 34, game: "Clash Royale" },
  { rank: 6, name: "GiantPusher", trophies: 7203, wins: 31, game: "Clash Royale" },
  { rank: 7, name: "HogRider_Real", trophies: 6988, wins: 29, game: "Clash Royale" },
];

const brawlLeaders = [
  { rank: 1, name: "SquadAlpha", trophies: 9210, wins: 52, game: "Brawl Stars" },
  { rank: 2, name: "StarForce3", trophies: 8870, wins: 48, game: "Brawl Stars" },
  { rank: 3, name: "BrawlKings", trophies: 8540, wins: 44, game: "Brawl Stars" },
  { rank: 4, name: "NightCrawlers", trophies: 8210, wins: 41, game: "Brawl Stars" },
  { rank: 5, name: "PixelWarriors", trophies: 7980, wins: 38, game: "Brawl Stars" },
  { rank: 6, name: "TeamThunder", trophies: 7720, wins: 35, game: "Brawl Stars" },
  { rank: 7, name: "BrawlElite", trophies: 7450, wins: 32, game: "Brawl Stars" },
];

const medalColors: Record<number, string> = {
  1: "text-yellow-400",
  2: "text-neutral-300",
  3: "text-amber-600",
};

export default function Leaderboard() {
  const [tab, setTab] = useState<"clash" | "brawl">("clash");
  const leaders = tab === "clash" ? clashLeaders : brawlLeaders;

  return (
    <section id="leaderboard" className="min-h-screen bg-[#0d0d1a] px-6 py-20 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <h3 className="uppercase tracking-widest text-yellow-400 text-sm text-center mb-4">
          Топ игроков
        </h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-white text-center mb-10 leading-tight">
          Таблица лидеров
        </h2>

        <div className="flex justify-center mb-8 gap-2">
          <button
            onClick={() => setTab("clash")}
            className={`px-6 py-2 uppercase text-sm font-bold tracking-wide transition-all duration-300 ${
              tab === "clash"
                ? "bg-yellow-400 text-black"
                : "border border-white/20 text-white hover:border-yellow-400 hover:text-yellow-400"
            }`}
          >
            ⚔️ Clash Royale · 1v1
          </button>
          <button
            onClick={() => setTab("brawl")}
            className={`px-6 py-2 uppercase text-sm font-bold tracking-wide transition-all duration-300 ${
              tab === "brawl"
                ? "bg-yellow-400 text-black"
                : "border border-white/20 text-white hover:border-yellow-400 hover:text-yellow-400"
            }`}
          >
            🌟 Brawl Stars · 3v3
          </button>
        </div>

        <div className="border border-white/10 overflow-hidden">
          <div className="grid grid-cols-4 px-6 py-3 bg-white/5 text-neutral-400 uppercase text-xs tracking-widest">
            <span>#</span>
            <span>Игрок</span>
            <span className="text-center">Кубки</span>
            <span className="text-right">Победы</span>
          </div>
          {leaders.map((p) => (
            <div
              key={p.rank}
              className="grid grid-cols-4 px-6 py-4 border-t border-white/5 hover:bg-white/5 transition-colors duration-200 items-center"
            >
              <span className={`font-bold text-lg ${medalColors[p.rank] ?? "text-neutral-500"}`}>
                {p.rank <= 3 ? ["🥇", "🥈", "🥉"][p.rank - 1] : p.rank}
              </span>
              <span className="text-white font-semibold">{p.name}</span>
              <span className="text-yellow-400 font-bold text-center">{p.trophies.toLocaleString()}</span>
              <span className="text-neutral-300 text-right">{p.wins} побед</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
