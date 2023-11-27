import Link from "next/link";

const menus = ["pizza", "kebab", "dodatki"];

export default function MenuFilter() {
  return (
    <div className="my-4">
      {menus.map((item) => {
        let btnClasses =
          "px-4 uppercase text-orange-500 hover:text-white font-bold";
        btnClasses =
          item == "kebab"
            ? btnClasses + " border-orange-800 border-x"
            : btnClasses;
        return (
          <Link href={{ pathname: "/menu" }} className={btnClasses}>
            {item}
          </Link>
        );
      })}
    </div>
  );
}
