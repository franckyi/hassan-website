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
        {businessInfo && businessInfo.data && (
          <p className="ml-auto w-2/4 mr-4 lg:mr-0 text-3xl font-extrabold text-orange-500">
            {businessInfo.data.attributes.shortName}
          </p>
        )}
        {businessInfo && businessInfo.data && (
          <p className="ml-auto w-2/4 mr-4 lg:mr-0">
            {businessInfo.data.attributes.address}
          </p>
        )}
        <iframe
          className="map-iframe lg:ml-auto lg:my-4 border-4 lg:border-8 border-orange-500 rounded-3xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2347.14209312779!2d18.5337033!3d53.9647444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47029c9dd0ca2e29%3A0xdf1c25e2072106f4!2sPizzeria%20Kebab%20Hassan!5e0!3m2!1sit!2spl!4v1701439315221!5m2!1sit!2spl"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>
      <p className="text-xs text-stone-800">{bgImgCredits}</p>
    </>
  );
}
