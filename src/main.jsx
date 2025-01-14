import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import App from "./App.jsx";
import Home from "./Home.jsx";
import Details from "./Details.jsx";
import Dashboard from "./Dashboard.jsx";
import Cart from "./Cart.jsx";
import Wishlist from "./Wishlist.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/details/:gadgetId" element={<Details />} />
          <Route
            path="statistics"
            element={<h1 className="text-5xl">This is statistics page!</h1>}
          />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/cart" element={<Cart />} />
            <Route path="/dashboard/wishlist" element={<Wishlist />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
