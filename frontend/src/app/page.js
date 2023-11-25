import Image from "next/image";
import AppBar from "./components/AppBar";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <>
      <AppBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('/bg.webp')] bg-contain bg-no-repeat">
        <p className="z-50 text-5xl font-extrabold">Mistrzowie smaku</p>
        <a className="z-50" href="#">
          Zobacz Menu
        </a>
        <h2>Nasze hity</h2>
        {/* <article>
          <Image />
        </article> */}
        <h2>Menu</h2>
        <Menu />
        <h2>Jak dojechać</h2>
      </main>
    </>
  );
}
