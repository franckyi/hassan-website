import { Lora } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers.js";

const FONT = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "Hassan - Pizzeria & Kebab w Starogardzie Gdańskim",
  description:
    "Nasza restauracja to miejsce, gdzie tradycja orientalnej kuchni łączy się z niepowtarzalnymi smakami, przywołującymi podróże kulinarne do Bliskiego Wschodu. Zapraszamy do skosztowania naszych wyjątkowych kebabów, które stanowią idealne połączenie tradycji i świeżości.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={`${FONT.className} selection:bg-amber-300 selection:text-red-900`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
