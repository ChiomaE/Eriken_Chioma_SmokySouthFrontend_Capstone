import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";

export default function AppRoutes() {
    return (
        <Routes>
            
            <Route path="/cart" element={<Cart />} />
        </Routes>

        /* 
        <Routes>
            <Route path="/about" element={<Cart />} />
        </Routes>
        */
    )
}