import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import { Button } from "./Button";

export const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center my-[30px] mx-[10px] flex-wrap shadow-md p-3">
      <img
        src={product.image}
        alt={product.name}
        className="h-[100px] w-[150px]"
      />
      <p className="w-[350px] text-left">{product.name}</p>
      <p className="w-[100px]">${product.price}</p>
      <Button
        text="Remove"
        className="text-white p-2 rounded bg-rose-600"
        onClick={() => dispatch(removeFromCart(product))}
      />
    </div>
  );
};
