"use client";
import { useState, useEffect, useMemo } from "react";
import AppBar from "../components/AppBar";
import getBusinessInfo from "../services/getBusinessInfo";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const bgImgCredits =
  '<a href="https://it.freepik.com/foto-gratuito/tempo-di-pizza-gustosa-pizza-tradizionale-fatta-in-casa-ricetta-italiana_10213112.htm#query=pizza%20background&position=2&from_view=search&track=ais&uuid=1386a8d0-99f1-4e40-a8cf-f34285880cd4">Immagine di Racool_studio</a> su Freepik';

export default function Contacts() {
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

  // const Map = useMemo(
  //   () =>
  //     dynamic(() => import("../components/Map"), {
  //       loading: () => <p>A map is loading</p>,
  //       ssr: false,
  //     }),
  //   []
  // );

  if (!businessInfo) {
    return <p>Ładuję...</p>;
  }

  return (
    <>
      <AppBar />
      <main className="min-h-screen pt-8 pr-24 text-right bg-[url('/bg-contacts.webp')] bg-contain bg-no-repeat selection:text-orange-500">
        <h2 className="my-8 font-extrabold lg:text-5xl">Jak dojechać</h2>
        <p className="text-3xl font-extrabold text-orange-500">
          {businessInfo.data.attributes.shortName}
        </p>
        <p>{businessInfo.data.attributes.address}</p>
        {/* <div> */}
        {/* <Map position={[40.8054, -74.0241]} /> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2347.14209312779!2d18.5337033!3d53.9647444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47029c9dd0ca2e29%3A0xdf1c25e2072106f4!2sPizzeria%20Kebab%20Hassan!5e0!3m2!1sit!2spl!4v1701439315221!5m2!1sit!2spl"
          width="600"
          height="380"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="ml-auto my-4 border-8 border-orange-500 rounded-3xl"
        ></iframe>
        {/* </div> */}
      </main>
    </>
  );
}