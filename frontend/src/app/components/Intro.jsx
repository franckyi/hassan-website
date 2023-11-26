export default function Intro() {
  return (
    <section className="min-h-screen flex flex-col text-center justify-center">
      <span className="lg:text-8xl my-4 font-extrabold">
        Życie jest <br />
        kwestią smaku!
      </span>
      <a
        className="my-1 mx-auto px-4 w-fit bg-orange-500 text-black hover:text-white font-bold uppercase hover:tracking-widest hover:font-bold hover:underline"
        href="#"
      >
        Nasze hity
      </a>
      <a
        className="my-1 mx-auto px-4 w-fit bg-orange-500 text-black hover:text-white font-bold uppercase hover:tracking-widest hover:font-bold hover:underline"
        href="#"
      >
        Zobacz Menu
      </a>
    </section>
  );
}
