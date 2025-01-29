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
import Statistics from "./Statistics.jsx";
import About from "./About.jsx";
import NotFound from "./NotFound.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/category/:category" element={<Home />} />
            <Route path="/details/:gadgetId" element={<Details />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/cart" element={<Cart />} />
              <Route path="/dashboard/wishlist" element={<Wishlist />} />
            </Route>
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
