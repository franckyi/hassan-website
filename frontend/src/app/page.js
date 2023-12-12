"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import AppBar from "./components/AppBar";
import InteriorImages from "./components/InteriorImages";
import Intro from "./components/Intro";
import PresentationText from "./components/PresentationText";
import Footer from "./components/Footer";
import CircularIndeterminate from "./components/CircularIndeterminate";
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

  return (
    <>
      <AppBar />
      <main className="overflow-hidden flex min-h-screen flex-col items-center justify-between pb-24 bg-[url('/bg.webp')] bg-top bg-stone-900 text-white lg:bg-contain bg-no-repeat selection:text-orange-500">
        <Intro />
        <PresentationText />
        <InteriorImages />
        <Link
          href="/menu"
          className="my-2 p-2 lg:px-4 text-base lg:text-xl bg-orange-500 text-white hover:tracking-wider hover:bg-orange-600 duration-500 rounded-full"
        >
          <MenuBookOutlinedIcon />
          &nbsp; Sprawdź nasz menu
        </Link>
        {!businessInfo && <CircularIndeterminate />}
        {businessInfo && (
          <Link
            href={`tel:${businessInfo.acf.telephone}`}
            className="my-2 p-2 lg:px-4 text-base lg:text-xl bg-orange-500 text-white hover:tracking-wider hover:bg-orange-600 duration-500 rounded-full"
          >
            <LocalPhoneIcon />
            &nbsp; Zamów {businessInfo.acf.telephone}
          </Link>
        )}
      </main>
      <Footer businessInfo={businessInfo} />
    </>
  );
}
