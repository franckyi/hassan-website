export default function Menu({ pizzas }) {
  return (
    <ul>
      {pizzas &&
        pizzas.map((pizza) => {
          <li key={pizza.id}>{pizza.name}</li>;
        })}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/api/pizzas?populate=*");
  const pizzas = await res.json();

  return {
    props: {
      pizzas,
    },
  };
}
