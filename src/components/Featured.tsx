const features = [
  {
    icon: "🏆",
    title: "Бесплатный вход",
    desc: "Никаких взносов. Регистрируйся и сражайся — участие абсолютно бесплатно для всех.",
  },
  {
    icon: "⚔️",
    title: "Clash Royale",
    desc: "Режим 1 vs 1. Докажи, что твоя колода лучшая в честном дуэли один на один.",
  },
  {
    icon: "🌟",
    title: "Brawl Stars",
    desc: "Режим 3 vs 3. Собери команду из трёх бойцов и сокруши соперников в командном сражении.",
  },
  {
    icon: "📊",
    title: "Таблица лидеров",
    desc: "Отслеживай свои результаты в реальном времени. Борись за место в топе лучших игроков.",
  },
];

export default function Featured() {
  return (
    <div
      id="tournaments"
      className="min-h-screen px-6 py-20 bg-[#0d0d1a] flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h3 className="uppercase mb-4 text-sm tracking-widest text-yellow-400 text-center">
          Почему ClashBrawlTurn
        </h3>
        <p className="text-3xl lg:text-5xl mb-16 text-white leading-tight text-center font-bold">
          Турниры нового уровня —<br />играй, побеждай, становись легендой
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="border border-white/10 p-6 hover:border-yellow-400/50 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-wide">
                {f.title}
              </h4>
              <p className="text-neutral-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="bg-yellow-400 text-black font-bold px-10 py-3 uppercase tracking-wide text-sm hover:bg-yellow-300 transition-colors duration-300">
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
}