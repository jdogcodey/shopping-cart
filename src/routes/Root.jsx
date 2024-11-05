import { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { Outlet } from 'react-router-dom'

export default function Root() {
    const [shoppingCart, setShoppingCart] = useState([]);

    function addToCart(item) {
        const existingItemIndex = shoppingCart.findIndex(cartItem => cartItem.id === item.id && cartItem.title === item.title && cartItem.price === item.price);

        console.log(existingItemIndex)
        if (existingItemIndex !== -1) {
            console.log('if statement')
            const updatedCart = [...shoppingCart];
            updatedCart[existingItemIndex].count += 1;
            setShoppingCart(updatedCart);
            return;
        }

        setShoppingCart([...shoppingCart, {...item, count: 1}]);
    }

    function removeFromCart(itemToRemove) {
            const existingItemIndex = shoppingCart.findIndex(cartItem =>
            cartItem.id === itemToRemove.id && cartItem.title === itemToRemove.title && cartItem.price === itemToRemove.price
            );

            if (shoppingCart[existingItemIndex].count > 1) {
                const updatedCart = [...shoppingCart];
                updatedCart[existingItemIndex].count -= 1;
                setShoppingCart(updatedCart);
                return;
            }

            const newCart = [...shoppingCart];
            const removedCart = newCart.filter((item, index) => index !== existingItemIndex)
            setShoppingCart(removedCart);
    }

    return (
    <>
        <Header />
        <Sidebar />
        <Outlet context={{shoppingCart, addToCart, removeFromCart}} />
        <Footer />
    </>
    )}