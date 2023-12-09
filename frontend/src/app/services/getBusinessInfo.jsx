const businessInfoFallback = {
  acf: {
    shortName: "Hassan - Pizzeria & Kebab",
    nip: "",
    email: "kontakt@kebab-hassan.pl",
    address: "ul. Kościuszki 34D, 83-200 Starogard Gdański",
    description:
      "Witaj w Restauracji Kebab Hassan, najwyższej jakości kebaby w sercu Starogardu Gdańskiego! Nasza restauracja to miejsce, gdzie tradycja orientalnej kuchni łączy się z niepowtarzalnymi smakami, przywołującymi podróże kulinarne do Bliskiego Wschodu.\r\n\r\n\r\n\r\nZapraszamy do skosztowania naszych wyjątkowych kebabów, które stanowią idealne połączenie tradycji i świeżości. Odwiedź Restaurację Kebab Hassan i rozkoszuj się autentycznymi smakami Bliskiego Wschodu w samym sercu Starogardu Gdańskiego!",
    descriptionPart2:
      "W Kebab Hassan kładziemy nacisk na świeże składniki i autentyczne smaki, serwując soczyste mięso w delikatnej bułce czy tortilli lub jako urozmaicone sałatki. Nasze dania są starannie przygotowywane, łącząc najwyższą jakość mięsa z bogactwem aromatycznych przypraw, by dostarczyć wyjątkowego doświadczenia smakowego.",
    descriptionPart3:
      "To miejsce jest idealne dla miłośników wyjątkowych doznań kulinarnej podróży i poszukiwaczy prawdziwych smaków Bliskiego Wschodu w codziennych posiłkach!",
    telephone: "58 775 20 72",
  },
};

async function getBusinessInfo() {
  const res = await fetch(
    "http://panel.kebab-hassan.pl/wp-json/wp/v2/stores/42"
  );

  if (!res.ok) {
    return businessInfoFallback;
  }

  return res.json();
}

export default getBusinessInfo;
