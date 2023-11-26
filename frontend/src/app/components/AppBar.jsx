import Image from "next/image";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

export default function AppBar() {
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
        <a
          href="#"
          className="lg:ml-4 px-2 lg:px-4 py-2 border-2 border-orange-900 hover:bg-orange-500 hover:border-orange-500 hover:text-stone-950 rounded"
        >
          <MenuBookOutlinedIcon />
          &nbsp;Menu
        </a>
        <a
          href="#"
          className="lg:ml-4 px-2 lg:px-4 py-2 border-2 border-orange-900 hover:bg-orange-500 hover:border-orange-500 hover:text-stone-950 rounded"
        >
          <PhotoLibraryOutlinedIcon />
          &nbsp;Galeria
        </a>
        <a
          href="#"
          className="lg:ml-4 px-2 lg:px-4 py-2 border-2 border-orange-900 hover:bg-orange-500 hover:border-orange-500 hover:text-stone-950 rounded"
        >
          <MyLocationOutlinedIcon />
          &nbsp;Jak dojechać
        </a>
      </div>
      <a
        href="#"
        className="text-lg lg:mr-8 px-2 lg:px-4 py-2 font-bold text-stone-950 bg-orange-500 hover:bg-orange-700 hover:text-white rounded"
      >
        <LocalPhoneIcon />
        &nbsp;Zadzwoń
      </a>
    </nav>
  );
}
