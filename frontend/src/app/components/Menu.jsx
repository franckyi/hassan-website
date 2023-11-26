import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import LocalPizzaOutlinedIcon from "@mui/icons-material/LocalPizzaOutlined";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";

const currency = "zł";
const standardPizzaSize = "24 cm";
const largePizzaSize = "32 cm";

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
    <>
      <h2 className="my-12 font-extrabold lg:text-5xl">Menu</h2>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>Pizzy</Button>
          <Button>Kebab</Button>
          <Button>Dodatki</Button>
        </ButtonGroup>
      </Box>

      <div className="p-4 w-3/4 bg-stone-900/90">
        <h3 className="my-12 font-extrabold lg:text-4xl text-orange-500">
          Pizzy
        </h3>
        <p className="mb-4 text-md text-right">
          <span>{standardPizzaSize} </span>
          <span className="text-stone-500"> / </span>
          <span className="text-orange-500">{largePizzaSize}</span>
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
                  {pizza.attributes.spicy > 0 && (
                    <span className="text-orange-500">
                      &nbsp;
                      {Array.from(
                        { length: pizza.attributes.spicy },
                        (_, index) => (
                          <LocalFireDepartmentRoundedIcon key={index} />
                        )
                      )}
                    </span>
                  )}
                  {pizza.attributes.customLabelAfterName && (
                    <span className="text-orange-500 italic">
                      &nbsp;⌀ {pizza.attributes.customLabelAfterName}
                    </span>
                  )}
                  <div className="grow border-b-2 border-dotted border-stone-500"></div>
                  <span className="text-xl font-bold">
                    {pizza.attributes.price}{" "}
                    <span className="text-xs">{currency}</span>
                  </span>
                  <span className="text-xl text-stone-500">&nbsp;/</span> &nbsp;
                  <span className="text-orange-500 text-xl font-bold">
                    {pizza.attributes.price + pizza.attributes.priceDiff}&nbsp;
                    <span className="text-xs">{currency}</span>
                  </span>
                </div>

                <span className="text-sm text-stone-400">
                  {pizza.attributes.ingredients}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
