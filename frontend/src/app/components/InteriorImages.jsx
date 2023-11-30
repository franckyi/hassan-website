import { useState, useEffect } from "react";
import Image from "next/image";
import getBusinessInfo from "../services/getBusinessInfo";

export default function InteriorImages() {
  const [businessInfo, setBusinessInfo] = useState(null);
  const images = [
    { src: "/local-1.webp" },
    { src: "/local-2.webp" },
    { src: "/local-3.webp" },
  ];

  const fetchBusinessInfo = async () => {
    try {
      const info = await getBusinessInfo();
      setBusinessInfo(info);
    } catch (error) {
      console.error(
        "Nie udało się pobierać danych. Spróbuj ponownie później.",
        error
      );
    }
  };

  useEffect(() => {
    fetchBusinessInfo();
  }, []);
  return (
    <>
      <h2 className="my-12 font-extrabold lg:text-5xl" id="galeria">
        Zapraszamy do naszego lokalu
      </h2>
      <article className="w-4/4 flex shadow-xl">
        {images.map((img, index) => {
          return (
            <Image
              key={index}
              src={img.src}
              className="hover:scale-110 ease-in duration-150"
              width={400}
              height={200}
              alt="wnętrz restauracji"
            />
          );
        })}
      </article>
      {businessInfo && (
        <p className="text-xl w-2/4 my-8 text-center">
          {businessInfo.data.attributes.descriptionPart3}
        </p>
      )}
    </>
  );
}
