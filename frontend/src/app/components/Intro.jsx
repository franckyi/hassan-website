const heroTextLines = ["Życie jest", "kwestią smaku!"];

// const links = [
//   { name: "Nasze hity", link: "#" },
//   { name: "Zobacz Menu", link: "#" },
// ];

export default function Intro() {
  return (
    <section className="min-h-screen flex flex-col text-center justify-center">
      {heroTextLines.map((item, index) => {
        return (
          <p key={index} className="lg:text-8xl my-4 font-extrabold">
            {item}
          </p>
        );
      })}
      {/* {links.map((item, index) => {
        return (
          <a
            key={index}
            className="my-1 mx-auto px-4 w-fit bg-orange-500 text-black hover:text-white font-bold uppercase hover:tracking-widest hover:font-bold hover:underline"
            href={item.link}
          >
            {item.name}
          </a>
        );
      })} */}
    </section>
  );
}
