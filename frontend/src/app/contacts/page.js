"use client";
import { useState, useEffect } from "react";
import AppBar from "../components/AppBar";
import getBusinessInfo from "../services/getBusinessInfo";

const bgImgCredits = (
  <a href="https://it.freepik.com/foto-gratuito/tempo-di-pizza-gustosa-pizza-tradizionale-fatta-in-casa-ricetta-italiana_10213112.htm#query=pizza%20background&position=2&from_view=search&track=ais&uuid=1386a8d0-99f1-4e40-a8cf-f34285880cd4">
    Photo by Racool_studio
  </a>
);
const heading = "Jak dojechać";

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

  return (
    <>
      <AppBar />
      <main className="min-h-screen pt-4 lg:pt-8 lg:pr-24 text-right bg-[url('/bg-contacts.webp')] bg-contain bg-no-repeat selection:text-orange-500">
        <h2 className="mt-16 lg:mt-28 my-8 mr-4 lg:mr-0 font-extrabold text-2xl lg:text-5xl">
          {heading}
        </h2>
        {businessInfo && businessInfo.acf && (
          <p className="ml-auto w-2/4 mr-4 lg:mr-0 text-3xl font-extrabold text-orange-500">
            {businessInfo.acf.shortName}
          </p>
        )}
        {businessInfo && businessInfo.acf && (
          <p className="ml-auto w-2/4 mr-4 lg:mr-0">
            {businessInfo.acf.address}
          </p>
        )}
        <iframe
          className="map-iframe lg:ml-auto lg:my-4 border-4 lg:border-8 border-orange-500 rounded-3xl"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9388.591662758228!2d18.533721!3d53.964641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47029c9dd0ca2e29%3A0xdf1c25e2072106f4!2sPizzeria%20Kebab%20Hassan!5e0!3m2!1spl!2spl!4v1712215024663!5m2!1spl!2spl"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>
      <p className="text-xs text-stone-800">{bgImgCredits}</p>
    </>
  );
}
