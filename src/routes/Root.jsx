import { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom'

export default function Root() {
    const [shoppingCart, setShoppingCart] = useState([]);

    function addToCart(item) {
        const existingItemIndex = findItemInCart(item);

        if (existingItemIndex !== -1) {
            const updatedCart = [...shoppingCart];
            updatedCart[existingItemIndex].count += 1;
            setShoppingCart(updatedCart);
            return;
        }

        setShoppingCart([...shoppingCart, {...item, count: 1}]);
    }

    function removeFromCart(itemToRemove) {
            const existingItemIndex = findItemInCart(itemToRemove);

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

    function findItemInCart(item) {
        const index = shoppingCart.findIndex(cartItem => cartItem.id === item.id && cartItem.title === item.title && cartItem.price === item.price);
        return index;
    }

    function changeCountInCart(event, item) {
        const newCount = parseInt(event.target.value, 10);
        if (isNaN(newCount) || newCount < 1) return;

        const existingItemIndex = findItemInCart(item);
        const newCart = [...shoppingCart];
        newCart[existingItemIndex].count = newCount;
        setShoppingCart(newCart);
    }

        function itemInCart(product) {
        for (let i = 0; i < shoppingCart.length; i++) {
            if (shoppingCart[i].title === product.title && shoppingCart[i].id === product.id && shoppingCart[i].price === product.price) {
                return true;
            }
        }
        return false;
    }

    function noInCart(product) {
        for (let i = 0; i < shoppingCart.length; i++) {
            if (shoppingCart[i].title === product.title && shoppingCart[i].id === product.id && shoppingCart[i].price === product.price) {
                return shoppingCart[i].count;
        }
    }
}

    return (
    <>
        <Header />
        <Outlet context={{shoppingCart, addToCart, removeFromCart, changeCountInCart, itemInCart, noInCart}} />
        <Footer />
    </>
    )}