"use client";
import { useState, useEffect } from "react";
import AppBar from "./components/AppBar";
import InteriorImages from "./components/InteriorImages";
import Intro from "./components/Intro";
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
        <InteriorImages />
      </main>
    </>
  );
}
