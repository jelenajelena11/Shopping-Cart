import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import cart from "../assets/images/cart.png";

export const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartList);
  const activeStyle = "block py-2 pl-3 pr-4 text-[#000000] bg-[#eee] rounded";
  const inactiveStyle = "block py-2 pl-3 pr-4 text-[#000000] bg-white rounded";
  return (
    <header className="max-w-[1200px] m-auto h-[70px] text-lg border-b-2 border-solid border-[#eee] flex justify-between items-center py-0 px-3">
      <Link to="/" className="flex items-center">
        <img src={cart} className="h-6 mr-3 sm:h-9" alt="Shopping Cart Logo" />
        <span className="font-500">Shopping Cart</span>
      </Link>
      <Link to="/cart" className="flex md:order-2 text-[#000000]">
        <p className="font-bold">Cart: </p>
        <span className="ml-1 font-bold">{cartItems.length}</span>
      </Link>
      <nav className="bg-white rounded">
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? activeStyle : inactiveStyle
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? activeStyle : inactiveStyle
                }
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
