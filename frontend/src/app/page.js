"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
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
      <Head>
        <meta name="robots" content="noindex,nofollow" />
        <title>Hassan - Pizzeria & Kebab</title>
        <meta
          name="description"
          content="Nasza restauracja to miejsce, gdzie tradycja orientalnej kuchni łączy się z niepowtarzalnymi smakami, przywołującymi podróże kulinarne do Bliskiego Wschodu. Zapraszamy do skosztowania naszych wyjątkowych kebabów, które stanowią idealne połączenie tradycji i świeżości."
        ></meta>
      </Head>
      <AppBar />
      <main className="overflow-hidden flex min-h-screen flex-col items-center justify-between pb-24 bg-[url('/bg.webp')] bg-top bg-350 lg:bg-contain bg-no-repeat selection:text-orange-500">
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
        {!businessInfo && <CircularIndeterminate />}
        {businessInfo && (
          <Link
            href={`tel:${businessInfo.data.attributes.telephone}`}
            className="text-2xl text-orange-500 hover:tracking-wider duration-500"
          >
            <LocalPhoneIcon />
            &nbsp; Zamów {businessInfo.data.attributes.telephone}
          </Link>
        )}
      </main>
      <Footer businessInfo={businessInfo} />
    </>
  );
}
