import { useState } from "react";

export default function Register() {
  const [game, setGame] = useState<"clash" | "brawl">("clash");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ nickname: "", tag: "", contact: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-[#0d0d1a] px-6 py-20 flex flex-col justify-center">
      <div className="max-w-xl mx-auto w-full">
        <h3 className="uppercase tracking-widest text-yellow-400 text-sm text-center mb-4">
          Бесплатно
        </h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-white text-center mb-10 leading-tight">
          Регистрация<br />на турнир
        </h2>

        {submitted ? (
          <div className="border border-yellow-400/40 bg-yellow-400/10 p-10 text-center">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-white font-bold text-2xl mb-2">Ты в игре!</h3>
            <p className="text-neutral-400">
              Заявка принята. Мы свяжемся с тобой перед стартом турнира.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setGame("clash")}
                className={`flex-1 py-3 uppercase text-sm font-bold tracking-wide transition-all duration-300 ${
                  game === "clash"
                    ? "bg-yellow-400 text-black"
                    : "border border-white/20 text-white hover:border-yellow-400"
                }`}
              >
                ⚔️ Clash Royale · 1v1
              </button>
              <button
                type="button"
                onClick={() => setGame("brawl")}
                className={`flex-1 py-3 uppercase text-sm font-bold tracking-wide transition-all duration-300 ${
                  game === "brawl"
                    ? "bg-yellow-400 text-black"
                    : "border border-white/20 text-white hover:border-yellow-400"
                }`}
              >
                🌟 Brawl Stars · 3v3
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-neutral-400 text-xs uppercase tracking-widest">
                Никнейм в игре
              </label>
              <input
                required
                type="text"
                placeholder={game === "clash" ? "Твой никнейм в Clash Royale" : "Никнейм капитана команды"}
                value={form.nickname}
                onChange={(e) => setForm({ ...form, nickname: e.target.value })}
                className="bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors placeholder:text-neutral-600"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-neutral-400 text-xs uppercase tracking-widest">
                Тег игрока / команды
              </label>
              <input
                required
                type="text"
                placeholder="#ABC123"
                value={form.tag}
                onChange={(e) => setForm({ ...form, tag: e.target.value })}
                className="bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors placeholder:text-neutral-600"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-neutral-400 text-xs uppercase tracking-widest">
                Telegram или Discord
              </label>
              <input
                required
                type="text"
                placeholder="@username"
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                className="bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors placeholder:text-neutral-600"
              />
            </div>

            {game === "brawl" && (
              <p className="text-neutral-500 text-xs border border-white/10 px-4 py-3">
                🌟 Режим 3 vs 3 — регистрируй всю команду. После подачи заявки мы пришлём инструкции для добавления остальных участников.
              </p>
            )}

            <button
              type="submit"
              className="bg-yellow-400 text-black font-bold py-4 uppercase tracking-widest text-sm hover:bg-yellow-300 transition-colors duration-300 mt-2"
            >
              Участвовать бесплатно
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
