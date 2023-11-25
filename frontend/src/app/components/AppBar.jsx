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
      <div className="font-bold text-lg">
        <a
          href="#"
          className="lg:ml-4 px-2 lg:px-4 py-2 border-2 border-orange-900 hover:bg-orange-500 hover:border-orange-500 hover:text-stone-950 rounded"
        >
          Menu
        </a>
        <a
          href="#"
          className="lg:ml-4 px-2 lg:px-4 py-2 border-2 border-orange-900 hover:bg-orange-500 hover:border-orange-500 hover:text-stone-950 rounded"
        >
          Galeria
        </a>
        <a
          href="#"
          className="lg:ml-4 px-2 lg:px-4 py-2 border-2 border-orange-900 hover:bg-orange-500 hover:border-orange-500 hover:text-stone-950 rounded"
        >
          Jak dojechać
        </a>
      </div>
      <a
        href="#"
        className="text-lg lg:mr-8 px-2 lg:px-4 py-2 font-bold text-stone-950 bg-orange-500 hover:bg-orange-700 hover:text-white rounded"
      >
        Zadzwoń
      </a>
    </nav>
  );
}
