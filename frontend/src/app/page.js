import AppBar from "./components/AppBar";
import Menu from "./components/Menu";
import InteriorImages from "./components/InteriorImages";
import Intro from "./components/Intro";
import Hits from "./components/Hits";

export default function Home() {
  return (
    <>
      <AppBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('/bg.webp')] bg-contain bg-no-repeat selection:text-orange-500">
        <Intro />
        <InteriorImages />
        <Hits />
        <h2>Menu</h2>
        <Menu />
        <h2>Jak dojechać</h2>
      </main>
    </>
  );
}
