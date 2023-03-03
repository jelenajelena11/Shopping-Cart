import { useEffect } from "react";
import { useSelector } from "react-redux";
import { CartCard } from "../components/CartCard";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartList);
  const total = useSelector((state) => state.cart.total);

  useEffect(() => {
    document.title = "Cart";
  }, []);

  return (
    <main>
      <section className="flex flex-col mt-16">
        <h1 className="text-2xl font-bold">
          Cart Items: {cartItems.length} / ${total}
        </h1>
        {cartItems.map((product) => (
          <CartCard product={product} key={product.id} />
        ))}
      </section>
    </main>
  );
};
