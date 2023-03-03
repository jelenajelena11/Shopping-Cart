import { CartCard } from "../components/CartCard";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const { cartItems } = useCart();
  return (
    <main>
      <section className="flex flex-col mt-16">
        <h1 className="text-2xl font-bold">Cart Items: {cartItems.length}</h1>
        {cartItems.map((product) => (
          <CartCard product={product} key={product.id} />
        ))}
      </section>
    </main>
  );
};
