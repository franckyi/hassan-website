"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import getBusinessInfo from "../services/getBusinessInfo";

const menuItemClasses =
  "lg:ml-4 px-4 py-2 flex flex-col items-center bg-stone-800 lg:hover:bg-orange-500 lg:hover:text-stone-950 rounded-lg";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  function handleNavClick() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <div
        className="mobile-menu z-50 fixed top-4 right-4 flex items-center justify-center bg-orange-900 hover:bg-orange-800 rounded-full cursor-pointer"
        onClick={handleNavClick}
      >
        <MenuIcon />
      </div>
      {isMobileMenuOpen && (
        <nav className="z-40 fixed top-0 lg:right-20 lg:m-4 p-4 w-screen lg:w-fit flex flex-col lg:flex-row items-center gap-4 bg-stone-950/90 lg:rounded-3xl">
          {businessInfo && (
            <a
              href={`tel:${businessInfo.acf.telephone}`}
              className="mr-auto sm:mx-auto px-8 lg:px-4 py-2 text-2xl font-bold text-stone-950 bg-orange-500 hover:bg-orange-700 hover:text-white rounded-full"
            >
              <LocalPhoneIcon />
              &nbsp;{businessInfo.acf.telephone}
            </a>
          )}

          {menuItems && (
            <div className="flex gap-2 text-sm lg:text-lg">
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
        </nav>
      )}
    </>
  );
}
