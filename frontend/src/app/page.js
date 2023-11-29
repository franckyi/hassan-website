"use client";
import { useState, useEffect } from "react";
import AppBar from "./components/AppBar";
import InteriorImages from "./components/InteriorImages";
import Intro from "./components/Intro";
import Hits from "./components/Hits";
import MenuFilter from "./components/MenuFilter";
import getBusinessInfo from "./services/getBusinessInfo";

export default function Home() {
  const [businessInfo, setBusinessInfo] = useState(null);

  // Funzione per ottenere e impostare le informazioni commerciali
  const fetchBusinessInfo = async () => {
    try {
      const info = await getBusinessInfo();
      setBusinessInfo(info);
    } catch (error) {
      // Gestisci gli errori qui, ad esempio:
      console.error(
        "Errore nel recupero delle informazioni commerciali:",
        error
      );
    }
  };

  useEffect(() => {
    fetchBusinessInfo();
  }, []); // L'array vuoto indica che l'effetto viene eseguito solo al mount del componente

  // Se le informazioni commerciali sono ancora in caricamento, mostra un messaggio di caricamento
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
        <Hits />
        <MenuFilter />
        <InteriorImages />
        <h2 className="my-8 font-extrabold lg:text-5xl">Jak dojechać</h2>
      </main>
    </>
  );
}
