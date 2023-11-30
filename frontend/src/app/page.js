"use client";
import { useState, useEffect } from "react";
import AppBar from "./components/AppBar";
import InteriorImages from "./components/InteriorImages";
import Intro from "./components/Intro";
import Hits from "./components/Hits";
import MenuFilter from "./components/MenuFilter";
// import CircularIndeterminate from "./components/CircularIndeterminate";
import getBusinessInfo from "./services/getBusinessInfo";

export default function Home() {
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
    // <CircularIndeterminate />;
  }

  return (
    <>
      <AppBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('/bg.webp')] bg-contain bg-no-repeat selection:text-orange-500">
        <Intro />
        <p className="text-xl w-2/4">
          {businessInfo.data.attributes.description}
        </p>
        <p className="my-8 text-xl w-2/4">
          {businessInfo.data.attributes.descriptionPart2}
        </p>
        <p className="text-xl w-2/4">
          {businessInfo.data.attributes.descriptionPart3}
        </p>
        <Hits />
        <MenuFilter />
        <InteriorImages />
        <h2 className="my-8 font-extrabold lg:text-5xl">Jak dojechać</h2>
      </main>
    </>
  );
}
