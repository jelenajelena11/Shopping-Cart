import { useEffect } from "react";
import { Card } from "../components/Card";
import products from "../data.json";

export const Home = () => {
  useEffect(() => {
    document.title = "Shopping Cart";
  }, []);

  return (
    <main>
      <section className="flex flex-wrap mt-16 justify-evenly lg:justify-normal">
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </section>
    </main>
  );
};
