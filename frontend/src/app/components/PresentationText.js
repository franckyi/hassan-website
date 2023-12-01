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
    <div className="flex flex-col lg:flex-row p-4 lg:p-24 bg-orange-500 text-stone-800 font-semibold">
      <span className="my-4 lg:my-16 lg:-rotate-90 text-5xl lg:text-9xl text-white">
        kwestią smaku!
      </span>
      <p
        className="lg:w-3/4 lg:pl-16 lg:text-xl first-letter:text-2xl lg:first-letter:text-7xl first-line:font-bold first-line:text-orange-200
  first-letter:mr-3 first-letter:float-left tracking-wide lg:border-l-4 border-orange-400"
      >
        {businessInfo.data.attributes.description}
      </p>
      <p className="my-4 lg:my-0 lg:w-2/4 lg:ml-12 lg:text-xl first-line:text-orange-200 lg:first-line:text-stone-800">
        {businessInfo.data.attributes.descriptionPart2}
      </p>
    </div>
  );
}
