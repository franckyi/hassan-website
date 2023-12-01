"use client";
import { useState } from "react";
import Menu from "./Menu";

const menus = ["pizza", "kebab", "dodatki"];
const heading = "menu";

export default function MenuFilter() {
  const [filter, setFilter] = useState("pizza");

  return (
    <div className="my-4 w-2/4 text-left">
      <h2
        className="mt-28 mb-8 text-center font-extrabold lg:text-5xl capitalize"
        id={heading}
      >
        {heading}
      </h2>

      <div className="text-center">
        {menus.map((menu, index) => {
          let classes =
            "px-4 mb-8 mx-auto uppercase text-stone-500 hover:text-white font-bold";
          const activeColorClass = " text-white text-xl";
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
