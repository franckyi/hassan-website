"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import AppBar from "./components/AppBar";
import InteriorImages from "./components/InteriorImages";
import Intro from "./components/Intro";
import PresentationText from "./components/PresentationText";
import getBusinessInfo from "./services/getBusinessInfo";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

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
      <main className="flex min-h-screen flex-col items-center justify-between pb-24 bg-[url('/bg.webp')] bg-contain bg-no-repeat selection:text-orange-500">
        <Intro />
        <PresentationText />
        <InteriorImages />
        <Link
          href="/menu"
          className="text-2xl text-orange-500 hover:tracking-wider duration-500"
        >
          <MenuBookOutlinedIcon />
          &nbsp; Sprawdź nasz menu
        </Link>
        <Link
          href={`tel:${businessInfo.data.attributes.telephone}`}
          className="text-2xl text-orange-500 hover:tracking-wider duration-500"
        >
          <LocalPhoneIcon />
          &nbsp; Zamów {businessInfo.data.attributes.telephone}
        </Link>
      </main>
    </>
  );
}
