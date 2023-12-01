import { useState, useEffect } from "react";
import getBusinessInfo from "../services/getBusinessInfo";

export default function PresentationText() {
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

  if (!businessInfo) {
    return <p>Ładuję...</p>;
  }
  return (
    <div className="p-24 flex bg-orange-500 text-stone-800 font-semibold">
      <span className="my-16 -rotate-90 lg:text-9xl text-white">
        kwestią smaku!
      </span>
      <p
        className="text-xl w-3/4 pl-8 first-letter:text-7xl first-line:font-bold first-line:text-orange-200
  first-letter:mr-3 first-letter:float-left tracking-wide border-l-4 border-orange-400"
      >
        {businessInfo.data.attributes.description}
      </p>
      <p className="text-xl w-2/4 ml-12">
        {businessInfo.data.attributes.descriptionPart2}
      </p>
    </div>
  );
}
