import Itemcard from "./Itemcard";
import { useLoaderData, useOutletContext } from "react-router-dom";
import Sidebar from './Sidebar.jsx'
import { useState } from "react";
import Sidebutton from "./Sidebutton.jsx";

export default function Shopping() {

    const {shoppingCart, addToCart, removeFromCart, changeCountInCart, noInCart} = useOutletContext();

    const data = useLoaderData();

    const [sideState, updateSideState] = useState(true)

   return <main className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-2 md:m-6 gap-2 h-full w-full pt-16">
    {data.map((item) => (
        <Itemcard key={item.id} itemObject={item} updateSideState={updateSideState}/>
    ))}
    {shoppingCart.length > 0 && sideState && <Sidebar shoppingCart={shoppingCart} addToCart={addToCart} removeFromCart={removeFromCart} changeCountInCart={changeCountInCart} noInCart={noInCart} updateSideState={updateSideState}/>}
    {!sideState && shoppingCart.length > 0 && <Sidebutton updateSideState={updateSideState}/>}
    </main>
}

export async function loader() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
    return data;
}