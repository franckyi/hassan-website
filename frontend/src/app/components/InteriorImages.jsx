import { useState, useEffect } from "react";
import getBusinessInfo from "../services/getBusinessInfo";

const homeGalleryImagesUrl = "https://panel.kebab-hassan.pl/wp-json/wp/v2/media?parent=109";

const fallbackImages = [
  { source_url: "/local-1.webp", alt_text: "wnętrz restauracji" },
  { source_url: "/local-2.webp", alt_text: "wnętrz restauracji" },
  { source_url: "/local-3.webp", alt_text: "wnętrz restauracji" },
  { source_url: "/food-1.webp", alt_text: "zdjęcie potraw" },
];

export default function InteriorImages() {
  const [businessInfo, setBusinessInfo] = useState(null);
  const [images, setImages] = useState([]);

  async function getImages() {

    try {
      const res = await fetch(homeGalleryImagesUrl);
      const imagesResponse = await res.json();

      console.log("imagesResponse", imagesResponse);
      setImages(imagesResponse);
    }
    catch (error) {
      console.error("Nie mogłem pobierać aktualne zdjęcia", error);
      setImages(fallbackImages);
    }

  }

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
    getImages();
    fetchBusinessInfo();
  }, []);

  return (
    <>
      {images && <article className="w-full lg:flex">
        {images && images.map((img) => {
          return (
            <img
              key={img.id}
              src={img.source_url}
              className="w-full lg:w-1/4 lg:hover:scale-110 lg:ease-in lg:duration-150"
              width={400}
              height={400}
              alt={img.alt_text}
              draggable="false"
            />
            );
        })}
      </article>}

      {businessInfo && (
        <p className="text-xl lg:w-2/4 mx-8 my-16 text-center">
          {businessInfo.acf.descriptionPart3}
        </p>
      )}
    </>
  );
}
