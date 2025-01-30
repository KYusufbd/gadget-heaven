import { Link, NavLink } from "react-router";
import { BsCart3 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav
      className={`navbar mx-auto mt-6 max-w-page-width ${path === "/" ? "-mb-28 text-white" : "mb-6"} z-10 w-11/12 items-center px-4`}
    >
      <div className="navbar-start">
        <div className="dropdown text-txtcol">
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
          <ul className="menu dropdown-content menu-lg z-[1] mt-3 w-[92vw] absolute -left-4 rounded-box bg-bgcol p-2 font-medium shadow">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:underline">
                About
              </NavLink>
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
      <div className="navbar-end flex gap-4 text-txtcol">
        <Link to={"/dashboard/cart"}>
          <BsCart3 className="btn btn-ghost rounded-full bg-white p-2 text-5xl outline outline-2 outline-gray-100" />
        </Link>
        <Link to={"/dashboard/wishlist"}>
          <MdFavoriteBorder className="btn btn-ghost rounded-full bg-white p-2 text-5xl outline outline-2 outline-gray-100" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
