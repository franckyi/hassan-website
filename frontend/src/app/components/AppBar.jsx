"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import getBusinessInfo from "../services/getBusinessInfo";

const menuItemClasses =
  "lg:ml-4 px-4 py-2 bg-stone-800 lg:hover:bg-orange-500 lg:hover:text-stone-950 rounded";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

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

  function handleMobileClick() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <div
        className="mobile-menu z-50 fixed bottom-4 right-4 flex items-center justify-center bg-orange-900 hover:bg-orange-800 rounded-full cursor-pointer"
        onClick={handleMobileClick}
      >
        <MenuIcon />
      </div>
      {isMobileMenuOpen && (
        <nav className="z-40 fixed bottom-0 lg:top-0 lg:bottom-auto lg:right-0 lg:m-4 p-4 w-screen lg:w-fit flex flex-col lg:flex-row items-center gap-4 bg-stone-900 rounded-xl">
          <Image
            src="/logo.svg"
            alt="Hassan Pizzeria & Kebab Logo"
            className="hidden lg:block lg:static lg:top-0 lg:left-0 lg:mx-8"
            width={188}
            height={50}
            priority
            draggable="false"
          />
          {menuItems && (
            <div className="flex gap-1 lg:block lg:w-fit text-sm lg:text-lg">
              {menuItems.map((item, index) => {
                return (
                  <Link key={index} href={item.href} className={item.classes}>
                    <item.icon />
                    &nbsp;{item.text}
                  </Link>
                );
              })}
            </div>
          )}
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
      )}
    </>
  );
}
