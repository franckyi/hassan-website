"use client";
import { useState } from "react";
import Menu from "./Menu";

const menus = ["pizza", "kebab", "dodatki"];
const heading = "Menu";

export default function MenuFilter() {
  const [filter, setFilter] = useState("pizza");

  return (
    <div className="my-4 md:w-3/4 p-2 lg:p-0 text-left">
      <h2
        className="lg:mt-28 mb-2 lg:mb-8 text-2xl lg:text-5xl font-extrabold text-center text-white"
        id={heading}
      >
        {heading}
      </h2>

      <div className="flex justify-center text-center">
        {menus.map((menu, index) => {
          let classes =
            "px-4 mb-8 text-stone-500 hover:text-white font-bold uppercase";
          const activeColorClass = " text-white lg:text-xl";
          let selectedMenu;

          function handleClick() {
            setFilter(selectedMenu);
          }

          if (menu === "kebab") {
            classes += " border-orange-800 border-x";
          }

          if (menu === filter) {
            classes += activeColorClass;
          }

          selectedMenu = menu;

          return (
            <button key={index} onClick={handleClick} className={classes}>
              {menu}
            </button>
          );
        })}
      </div>
      {filter === "pizza" && filter && <Menu selectedMenu={`${filter}s`} />}
      {filter === "kebab" && filter && <Menu selectedMenu={`${filter}s`} />}
      {filter === "dodatki" && filter && <Menu selectedMenu={`${filter}s`} />}
    </div>
  );
}
