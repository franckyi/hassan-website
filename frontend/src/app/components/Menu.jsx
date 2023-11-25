import LocalPizzaOutlinedIcon from "@mui/icons-material/LocalPizzaOutlined";

async function getPizzas() {
  const res = await fetch("http://localhost:1337/api/pizzas?populate=*");

  if (!res.ok) {
    throw new Error("Failed to fetch pizzas... Please try again later.");
  }

  return res.json();
}

export default async function Menu() {
  const pizzas = await getPizzas();

  return (
    <ul>
      {pizzas.data.map((pizza) => (
        <li key={pizza.id}>
          <LocalPizzaOutlinedIcon />
          {pizza.attributes.name}
          {pizza.attributes.price}
          {pizza.attributes.spicy}
          {pizza.attributes.customLabelAfterName}
          {pizza.attributes.ingredients}
        </li>
      ))}
    </ul>
  );
}
