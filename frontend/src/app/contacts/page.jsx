"use client";
import { useState, useEffect } from "react";
import AppBar from "../components/AppBar";
import getBusinessInfo from "../services/getBusinessInfo";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

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

  if (!businessInfo) {
    return <p>Ładuję...</p>;
  }

  return (
    <>
      <AppBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('/bg.webp')] bg-contain bg-no-repeat selection:text-orange-500">
        <h2 className="my-8 font-extrabold lg:text-5xl">Jak dojechać</h2>
        <div className="text-xl w-2/4 flex flex-col gap-4">
          <p className="text-3xl font-extrabold">
            {businessInfo.data.attributes.shortName}
          </p>
          {businessInfo.data.attributes.address}
          <a
            href={`tel:${businessInfo.data.attributes.phone}`}
            className="text-lg px-2 lg:px-4 py-2 font-bold text-stone-950 bg-orange-500 hover:bg-orange-700 hover:text-white rounded"
          >
            <LocalPhoneIcon />
            &nbsp;{businessInfo.data.attributes.phone}
          </a>
        </div>
        <h2 className="my-8 font-extrabold lg:text-5xl">Jak dojechać</h2>
      </main>
    </>
  );
}
