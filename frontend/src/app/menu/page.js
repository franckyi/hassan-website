"use client";
import { useState, useEffect } from "react";
import AppBar from "../components/AppBar";
import getBusinessInfo from "../services/getBusinessInfo";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MenuFilter from "../components/MenuFilter";

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
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('/bg.webp')] bg-cover bg-no-repeat selection:text-orange-500">
        <MenuFilter />
      </main>
    </>
  );
}
