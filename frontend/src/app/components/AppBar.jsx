import Image from "next/image";

export default function AppBar() {
  return (
    <nav className="flex justify-between p-4 items-center bg-stone-950">
      <Image
        src="/logo.svg"
        alt="Hassan Pizzeria & Kebab Logo"
        className="lg:ml-8"
        width={188}
        height={50}
        priority
        draggable="false"
      />
      <div>
        <a
          href="#"
          className="text-sm lg:ml-4 px-2 lg:px-4 py-2 border-2 border-slate-900 hover:border-2 hover:border-b-8 hover:border-amber-400 hover:rounded"
        >
          Menu
        </a>
        <a
          href="#"
          className="text-sm lg:ml-4 px-2 lg:px-4 py-2 border-2 border-slate-900 hover:border-2 hover:border-b-8 hover:border-amber-400 hover:rounded"
        >
          Galeria
        </a>
        <a
          href="#"
          className="text-sm lg:ml-4 px-2 lg:px-4 py-2 border-2 border-slate-900 hover:border-2 hover:border-b-8 hover:border-amber-400 hover:rounded"
        >
          Jak dojechać
        </a>
        <a
          href="#"
          className="text-sm lg:ml-4 px-2 lg:px-4 py-2 border-2 border-slate-900 hover:border-2 hover:border-b-8 hover:border-amber-400 hover:rounded"
        >
          Zadzwoń
        </a>
      </div>
    </nav>
  );
}
