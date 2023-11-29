import AppBar from "./components/AppBar";
import InteriorImages from "./components/InteriorImages";
import Intro from "./components/Intro";
import Hits from "./components/Hits";
import MenuFilter from "./components/MenuFilter";

export default function Home() {
  return (
    <>
      <AppBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('/bg.webp')] bg-contain bg-no-repeat selection:text-orange-500">
        <Intro />
        <p className="text-xl w-2/4">
          Quel ramo del lago di Como, che volge a mezzogiorno, fra due catene
          non interrotte di monti. Quel ramo del lago di Como, che volge a
          mezzogiorno, fra due catene non interrotte di monti. Quel ramo del
          lago di Como, che volge a mezzogiorno, fra due catene non interrotte
          di monti. Quel ramo del lago di Como, che volge a mezzogiorno, fra due
          catene non interrotte di monti.
        </p>
        <Hits />
        <MenuFilter />
        <InteriorImages />
        <h2 className="my-8 font-extrabold lg:text-5xl">Jak dojechać</h2>
      </main>
    </>
  );
}
