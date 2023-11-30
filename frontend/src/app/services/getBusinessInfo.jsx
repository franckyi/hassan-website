const businessInfoFallback = {
  data: {
    id: 1,
    attributes: {
      shortName: "Kebab Hassan",
      nip: null,
      email: null,
      address: "ul. Kościuszki 34D, 83-200 Starogard Gdański",
      createdAt: "2023-11-25T11:58:27.042Z",
      updatedAt: "2023-11-30T18:28:08.862Z",
      publishedAt: "2023-11-30T18:28:08.857Z",
      phone: 587752072,
      description:
        "Witaj w Restauracji Kebab Hassan, najwyższej jakości kebaby w sercu Starogardu Gdańskiego! Nasza restauracja to miejsce, gdzie tradycja orientalnej kuchni łączy się z niepowtarzalnymi smakami, przywołującymi podróże kulinarne do Bliskiego Wschodu.\n\n\n\nZapraszamy do skosztowania naszych wyjątkowych kebabów, które stanowią idealne połączenie tradycji i świeżości. Odwiedź Restaurację Kebab Hassan i rozkoszuj się autentycznymi smakami Bliskiego Wschodu w samym sercu Starogardu Gdańskiego!",
      descriptionPart2:
        "W Kebab Hassan kładziemy nacisk na świeże składniki i autentyczne smaki, serwując soczyste mięso w delikatnej bułce czy tortilli lub jako urozmaicone sałatki. Nasze dania są starannie przygotowywane, łącząc najwyższą jakość mięsa z bogactwem aromatycznych przypraw, by dostarczyć wyjątkowego doświadczenia smakowego.",
      descriptionPart3:
        "To miejsce jest idealne dla miłośników wyjątkowych doznań kulinarnej podróży i poszukiwaczy prawdziwych smaków Bliskiego Wschodu w codziennych posiłkach!",
    },
  },
  meta: {},
};

async function getBusinessInfo() {
  const res = await fetch("http://localhost:1337/api/business-info?populate=*");

  if (!res.ok) {
    return businessInfoFallback;
  }

  return res.json();
}

export default getBusinessInfo;
