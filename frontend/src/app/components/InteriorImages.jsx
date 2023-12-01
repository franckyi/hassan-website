import { useState, useEffect } from "react";
import Image from "next/image";
import getBusinessInfo from "../services/getBusinessInfo";

const images = [
  { src: "/local-1.webp" },
  { src: "/local-2.webp" },
  { src: "/local-3.webp" },
];

export default function InteriorImages() {
  const [businessInfo, setBusinessInfo] = useState(null);

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
      <article className="w-full lg:flex">
        {images.map((img, index) => {
          return (
            <Image
              key={index}
              src={img.src}
              className="w-3/3 lg:w-1/3 hover:scale-110 ease-in duration-150"
              width={400}
              height={200}
              alt="wnętrz restauracji"
            />
          );
        })}
      </article>

      {businessInfo && (
        <p className="text-xl lg:w-2/4 mx-8 my-16 text-center">
          {businessInfo.data.attributes.descriptionPart3}
        </p>
      )}
    </>
  );
}
