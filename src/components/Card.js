import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import { Button } from "./Button";

export const Card = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartList);
  const [inTheCart, setInTheCart] = useState(false);

  useEffect(() => {
    const isInCart = cartItems.find((item) => item.id === product.id);
    if (isInCart) {
      setInTheCart(true);
    } else {
      setInTheCart(false);
    }
  }, [cartItems, product.id]);

  return (
    <div className="mx-6 mb-4 w-[350px]">
      <div className="px-2 py-4 border border-solid border-gray-300 rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="h-[250px] object-cover"
        />
        <p className="my-4 font-semibold text-left">{product.name}</p>
        <div className="flex justify-between my-6 items-center">
          <span className="font-semibold">${product.price}</span>
          {inTheCart ? (
            <Button
              onClick={() => dispatch(removeFromCart(product))}
              text="Remove"
              className="text-white p-2 rounded bg-rose-600"
            />
          ) : (
            <Button
              onClick={() => dispatch(addToCart(product))}
              text="Add to Cart"
              className="py-2 px-3 rounded hover:bg-[#103F80] bg-[#103f80d9] text-white border border-transparent"
            />
          )}
        </div>
      </div>
    </div>
  );
};
