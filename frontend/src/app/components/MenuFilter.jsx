"use client";
import { useState } from "react";
import Menu from "./Menu";

const menus = ["pizza", "kebab", "dodatki"];
const heading = "Menu";

export default function MenuFilter() {
  const [filter, setFilter] = useState("pizza");

  return (
    <div className="my-4 text-center">
      <h2 className="my-8 font-extrabold lg:text-5xl">{heading}</h2>

      {menus.map((menu, index) => {
        let classes =
          "px-4 uppercase text-orange-500 hover:text-white font-bold";
        const activeColorClass = " text-white";
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
      {filter === "pizza" && filter && <Menu selectedMenu={`${filter}s`} />}
      {filter === "kebab" && filter && <Menu selectedMenu={`${filter}s`} />}
      {filter === "dodatki" && filter && <Menu selectedMenu={`${filter}s`} />}
    </div>
  );
}
