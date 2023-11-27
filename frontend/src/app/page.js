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
        <Hits />

        <Menu />
        <InteriorImages />
        <h2 className="my-8 font-extrabold lg:text-5xl">Jak dojechać</h2>
      </main>
    </>
  );
}
