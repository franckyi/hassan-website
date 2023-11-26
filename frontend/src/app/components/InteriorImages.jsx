import Image from "next/image";

export default function InteriorImages() {
  return (
    <>
      <h2 className="my-12 font-extrabold lg:text-5xl">
        Zapraszamy do naszego lokalu
      </h2>
      <article className="w-4/4 flex shadow-xl">
        <Image
          src="/local-1.webp"
          className="hover:scale-110 ease-in duration-150"
          width={400}
          height={200}
        />
        <Image
          src="/local-2.webp"
          className="hover:scale-110 ease-in duration-150"
          width={400}
          height={200}
        />
        <Image
          src="/local-3.webp"
          className="hover:scale-110 ease-in duration-150"
          width={400}
          height={200}
        />
      </article>
    </>
  );
}
