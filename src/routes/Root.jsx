import { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { Outlet } from 'react-router-dom'

export default function Root() {
    const [shoppingCart, setShoppingCart] = useState([]);

    function addToCart(item) {
        setShoppingCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(cartItem => 
                cartItem.id === item.id && cartItem.title === item.title && cartItem.price === item.price
            );

            if (existingItemIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].count += 1;
                return updatedCart;
            }

            return [...prevCart, { ...item, count: 1}];
        })
    }

    function removeFromCart(itemToRemove) {
        setShoppingCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(cartItem =>
            cartItem.id === itemToRemove.id && cartItem.title === itemToRemove.title && cartItem.price === itemToRemove.price
            );

            if (prevCart[existingItemIndex].count > 1) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].count -= 1;
                return updatedCart;
            }

            const newCart = [...prevCart];
            const removedCart = newCart.splice(existingItemIndex, 1);
            return removedCart;
    })
    }

    return (
    <>
        <Header />
        <Sidebar />
        <Outlet context={{shoppingCart, addToCart, removeFromCart}} />
        <Footer />
    </>
    )}