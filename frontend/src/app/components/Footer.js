import Image from "next/image";

export default function Footer(props) {
  return (
    <footer className="p-4 text-center text-xs bg-stone-950 text-stone-500">
      <Image
        src="/logo.svg"
        alt="Hassan Pizzeria & Kebab Logo"
        className="mx-auto mb-2"
        width={113}
        height={30}
        priority
        draggable="false"
      />
      {props.businessInfo && (
        <p>{props.businessInfo.data.attributes.address}</p>
      )}
    </footer>
  );
}
