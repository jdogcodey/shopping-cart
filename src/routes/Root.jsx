import { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { Outlet } from 'react-router-dom'

export default function Root() {
    const [shoppingCart, setShoppingCart] = useState([]);

    function addToCart(item) {
        setShoppingCart((prevCart) => [...prevCart, item])
    }

    function removeFromCart(itemToRemove) {
        setShoppingCart((prevCart) => prevCart.filter((cartItem) => cartItem !== itemToRemove))
    }

    return (
    <>
        <Header />
        <Sidebar />
        <Outlet context={{shoppingCart, addToCart, removeFromCart}} />
        <Footer />
    </>
    )}