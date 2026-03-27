import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Schedule from "@/components/Schedule";
import Leaderboard from "@/components/Leaderboard";
import Register from "@/components/Register";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Schedule />
      <Leaderboard />
      <Register />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;