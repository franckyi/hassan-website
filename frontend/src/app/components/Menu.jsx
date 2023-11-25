import LocalPizzaOutlinedIcon from "@mui/icons-material/LocalPizzaOutlined";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";

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
    <div className="p-4 w-3/4 bg-stone-900/90">
      <p className="text-right mb-4">
        <span className="text-xl">24 cm</span>{" "}
        <span className="text-stone-500">&nbsp;/</span>{" "}
        <span className="text-orange-500 text-2xl">32 cm</span>
      </p>
      <ul>
        {pizzas.data.map((pizza) => (
          <li className="flex justify-between gap-4 mb-4" key={pizza.id}>
            <LocalPizzaOutlinedIcon />
            <div className="grow">
              <div className="flex">
                <h4 className="text-xl font-bold uppercase">
                  {pizza.attributes.name}
                </h4>
                <div className="grow border-b-2 border-dotted border-stone-500"></div>
                <span className="text-xl font-bold">
                  {pizza.attributes.price} zł
                </span>
                <span className="text-stone-500">&nbsp;/</span> &nbsp;
                <span className="text-orange-500 text-2xl font-bold">
                  {pizza.attributes.price + pizza.attributes.priceDiff} zł
                </span>
              </div>
              {pizza.attributes.spicy > 0 && <LocalFireDepartmentRoundedIcon />}
              {pizza.attributes.customLabelAfterName}
              <span className="text-sm text-stone-400">
                {pizza.attributes.ingredients}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
