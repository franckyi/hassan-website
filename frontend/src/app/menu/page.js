"use client";
import { useState, useEffect } from "react";
import AppBar from "../components/AppBar";
import getBusinessInfo from "../services/getBusinessInfo";
import MenuFilter from "../components/MenuFilter";

const bgImgCredits =
  '<a href="https://it.freepik.com/foto-gratuito/deliziosa-pizza-napoletana-su-una-tavola_8588233.htm#query=pizza%20background&position=14&from_view=search&track=ais&uuid=1386a8d0-99f1-4e40-a8cf-f34285880cd4">Immagine di pressahotkey</a> su Freepik';

export default function MenuPage() {
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
      <main className="flex min-h-screen flex-col items-center justify-between pb-16 bg-[url('/bg-menu.webp')] bg-cover bg-no-repeat selection:text-orange-500">
        <MenuFilter />
      </main>
    </>
  );
}