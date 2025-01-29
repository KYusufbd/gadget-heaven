import { Link, NavLink } from "react-router";
import { BsCart3 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="max-w[1540px] navbar mx-auto my-6 w-11/12 items-center">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 font-medium shadow">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl font-bold">
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex flex-row gap-12 font-medium">
          <li>
            <NavLink to="/" className="hover:underline">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/statistics" className="hover:underline">
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className="hover:underline">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:underline">
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <Link to={"/dashboard/cart"}>
          <BsCart3 className="btn btn-ghost rounded-full p-2 text-5xl outline outline-2 outline-gray-100" />
        </Link>
        <Link to={"/dashboard/wishlist"}>
          <MdFavoriteBorder className="btn btn-ghost rounded-full p-2 text-5xl outline outline-2 outline-gray-100" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
