const tournaments = [
  {
    game: "Clash Royale",
    mode: "1 vs 1",
    icon: "⚔️",
    name: "Королевский дуэль — Апрель",
    date: "5 апреля 2026",
    time: "19:00 МСК",
    slots: 32,
    filled: 24,
    color: "from-blue-900/40 to-purple-900/40",
    badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    game: "Brawl Stars",
    mode: "3 vs 3",
    icon: "🌟",
    name: "Командная битва — Апрель",
    date: "12 апреля 2026",
    time: "18:00 МСК",
    slots: 16,
    filled: 9,
    color: "from-yellow-900/40 to-orange-900/40",
    badge: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  },
  {
    game: "Clash Royale",
    mode: "1 vs 1",
    icon: "⚔️",
    name: "Гранд-турнир Мая",
    date: "3 мая 2026",
    time: "20:00 МСК",
    slots: 64,
    filled: 11,
    color: "from-blue-900/40 to-purple-900/40",
    badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    game: "Brawl Stars",
    mode: "3 vs 3",
    icon: "🌟",
    name: "Звёздная лига — Май",
    date: "17 мая 2026",
    time: "17:00 МСК",
    slots: 12,
    filled: 2,
    color: "from-yellow-900/40 to-orange-900/40",
    badge: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  },
];

export default function Schedule() {
  return (
    <section id="tournaments" className="min-h-screen bg-[#080814] px-6 py-20 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <h3 className="uppercase tracking-widest text-yellow-400 text-sm text-center mb-4">
          Ближайшие события
        </h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-white text-center mb-14 leading-tight">
          Расписание турниров
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tournaments.map((t) => {
            const percent = Math.round((t.filled / t.slots) * 100);
            return (
              <div
                key={t.name}
                className={`bg-gradient-to-br ${t.color} border border-white/10 p-6 hover:border-yellow-400/40 transition-colors duration-300`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={`text-xs uppercase tracking-widest border px-2 py-0.5 ${t.badge}`}>
                      {t.icon} {t.game} · {t.mode}
                    </span>
                    <h4 className="text-white font-bold text-lg mt-3">{t.name}</h4>
                  </div>
                  <span className="text-2xl">{t.icon}</span>
                </div>

                <div className="flex gap-4 text-sm text-neutral-300 mb-5">
                  <span>📅 {t.date}</span>
                  <span>🕐 {t.time}</span>
                </div>

                <div className="mb-5">
                  <div className="flex justify-between text-xs text-neutral-400 mb-1">
                    <span>Участники</span>
                    <span>{t.filled} / {t.slots} мест</span>
                  </div>
                  <div className="h-1.5 bg-white/10 w-full">
                    <div
                      className="h-full bg-yellow-400 transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>

                <button className="w-full bg-yellow-400 text-black font-bold py-2.5 uppercase tracking-wide text-sm hover:bg-yellow-300 transition-colors duration-300">
                  Зарегистрироваться
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
