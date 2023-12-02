import { Lora } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const FONT = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "Hassan Pizzeria & Kebab",
  description: "Pizzeria & Kebab Starogard Gdańsk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <Head>
        <meta name="robots" content="noindex,nofollow" />
        <title>Hassan - Pizzeria & Kebab</title>
        <meta
          name="description"
          content="Nasza restauracja to miejsce, gdzie tradycja orientalnej kuchni łączy się z niepowtarzalnymi smakami, przywołującymi podróże kulinarne do Bliskiego Wschodu. Zapraszamy do skosztowania naszych wyjątkowych kebabów, które stanowią idealne połączenie tradycji i świeżości."
        ></meta>
      </Head>
      <body className={FONT.className}>{children}</body>
    </html>
  );
}
