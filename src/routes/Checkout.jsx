import { useOutletContext } from "react-router-dom";

export default function Checkout() {
    const {shoppingCart, addToCart, removeFromCart, changeCountInCart, noInCart} = useOutletContext();

    return <div>
        <h2>Basket:</h2>
        {shoppingCart.map((item) => 
        <div key={item.id}>
            <p>{item.title}</p>
            <img src={item.image}></img>
            <button onClick={() => {removeFromCart(item)}}>-</button>
            <input value={noInCart(item)} onChange={(event) => changeCountInCart(event, item)}></input>
            <button onClick={() => {addToCart(item)}}>+</button>
        </div>)}
        <button>Checkout</button>
        </div>
}