import Itemcard from "./Itemcard";
import { useLoaderData, useOutletContext } from "react-router-dom";
import Sidebar from './Sidebar.jsx'

export default function Shopping() {

    const {shoppingCart, addToCart, removeFromCart, changeCountInCart, noInCart} = useOutletContext();

    const data = useLoaderData();

   return <main className="grid grid-cols-3 m-6 gap-2 h-full">
    {data.map((item) => (
        <Itemcard key={item.id} itemObject={item}/>
    ))}
    {shoppingCart.length > 0 && <Sidebar shoppingCart={shoppingCart} addToCart={addToCart} removeFromCart={removeFromCart} changeCountInCart={changeCountInCart} noInCart={noInCart}/>}
    </main>
}

export async function loader() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
    return data;
}