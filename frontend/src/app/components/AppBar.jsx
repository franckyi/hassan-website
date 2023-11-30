"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import getBusinessInfo from "../services/getBusinessInfo";
import Link from "next/link";

export default function AppBar() {
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
    <nav className="flex justify-between p-4 items-center bg-stone-950">
      <Image
        src="/logo.svg"
        alt="Hassan Pizzeria & Kebab Logo"
        className="lg:ml-8"
        width={188}
        height={50}
        priority
        draggable="false"
      />
      <div className="font-bold text-lg uppercase">
        <Link
          href="/"
          className="lg:ml-4 px-2 lg:px-4 py-2 border-2 border-orange-900 hover:bg-orange-500 hover:border-orange-500 hover:text-stone-950 rounded"
        >
          <MenuBookOutlinedIcon />
          &nbsp;Lokal
        </Link>
        <Link
          href="/menu"
          className="lg:ml-4 px-2 lg:px-4 py-2 border-2 border-orange-900 hover:bg-orange-500 hover:border-orange-500 hover:text-stone-950 rounded"
        >
          <MenuBookOutlinedIcon />
          &nbsp;Menu
        </Link>
        <Link
          href="/contacts"
          className="lg:ml-4 px-2 lg:px-4 py-2 border-2 border-orange-900 hover:bg-orange-500 hover:border-orange-500 hover:text-stone-950 rounded"
        >
          <MyLocationOutlinedIcon />
          &nbsp;Jak dojechać
        </Link>
      </div>
      {businessInfo && (
        <a
          href={`tel:${businessInfo.data.attributes.phone}`}
          className="text-lg lg:mr-8 px-2 lg:px-4 py-2 font-bold text-stone-950 bg-orange-500 hover:bg-orange-700 hover:text-white rounded"
        >
          <LocalPhoneIcon />
          &nbsp;{businessInfo.data.attributes.phone}
        </a>
      )}
    </nav>
  );
}
