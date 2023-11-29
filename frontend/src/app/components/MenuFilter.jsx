"use client";
import { useState } from "react";
// import Menu from "./Menu";

const menus = ["pizza", "kebab", "dodatki"];
const heading = "Menu";

export default function MenuFilter() {
  const [filter, setFilter] = useState(null);

  return (
    <div className="my-4">
      <h2 className="my-8 font-extrabold lg:text-5xl">{heading}</h2>

      {menus.map((menu) => {
        let classes =
          "px-4 uppercase text-orange-500 hover:text-white font-bold";
        let selected;

        function handleClick() {
          console.log("clicked filter");
          setFilter(selected);
        }

        if (menu === "kebab") {
          classes += " border-orange-800 border-x";
          selected = "kebab";
        } else if (menu === "pizza") {
          selected = "pizza";
        } else if (menu === "dodatki") {
          selected = "dodatki";
        }

        return (
          <button onClick={handleClick} className={classes}>
            {menu}
          </button>
        );
      })}
      {/* {filter === "pizza" && <Menu />} */}
      {filter === "pizza" && <h2>You choose pizza!</h2>}
      {filter === "kebab" && <h2>You choose kebab!</h2>}
      {filter === "dodatki" && <h2>You choose dodatki!</h2>}
    </div>
  );
}
