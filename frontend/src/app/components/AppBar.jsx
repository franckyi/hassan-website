"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import getBusinessInfo from "../services/getBusinessInfo";
import Link from "next/link";

const menuItemClasses =
  "lg:ml-4 px-2 lg:px-4 py-2 border-2 border-orange-900 hover:bg-orange-500 hover:border-orange-500 hover:text-stone-950 rounded";

const menuItems = [
  { text: "Start", href: "/", icon: HomeIcon, classes: menuItemClasses },
  {
    text: "Menu",
    href: "/menu",
    icon: MenuBookOutlinedIcon,
    classes: menuItemClasses,
  },
  {
    text: "Jak dojechać",
    href: "/contacts",
    icon: MyLocationOutlinedIcon,
    classes: menuItemClasses,
  },
];

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
    // MAKE VISIBLE AGAIN
    <nav className="z-50 hidden fixed bottom-0 lg:top-0 lg:bottom-auto m-4 p-2 lg:p-4 w-screen lg:w-fit flex flex-col lg:flex-row items-center gap-4 bg-stone-900 rounded-xl">
      <Image
        src="/logo.svg"
        alt="Hassan Pizzeria & Kebab Logo"
        className="lg:ml-4"
        width={188}
        height={50}
        priority
        draggable="false"
      />
      <div className="flex flex-col lg:flex-row gap-1 w-full lg:w-fit text-sm lg:text-lg font-bold lg:uppercase">
        {menuItems.map((item, index) => {
          return (
            <Link key={index} href={item.href} className={item.classes}>
              <item.icon />
              &nbsp;{item.text}
            </Link>
          );
        })}
      </div>
      {businessInfo && (
        <a
          href={`tel:${businessInfo.data.attributes.telephone}`}
          className="lg:mr-8 px-2 lg:px-4 py-2 text-2xl font-bold text-stone-950 bg-orange-500 hover:bg-orange-700 hover:text-white rounded"
        >
          <LocalPhoneIcon />
          &nbsp;{businessInfo.data.attributes.telephone}
        </a>
      )}
    </nav>
  );
}
