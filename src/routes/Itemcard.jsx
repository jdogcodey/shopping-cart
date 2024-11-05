import { useOutletContext } from "react-router-dom";


export default function Itemcard({itemObject}) {

    const {shoppingCart, addToCart, removeFromCart} = useOutletContext();

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

    return <div>
        <h3>{itemObject.title}</h3>
        <img src={itemObject.image} />
        <p>{itemObject.description}</p>
        <p>£{itemObject.price}</p>
        <p>{itemObject.rating.rate}/5</p>
        {itemInCart(itemObject) ?
        <div>
            <button onClick={() => removeFromCart(itemObject)}>-</button>
            <input type="number" value={noInCart(itemObject)}></input>
            <button onClick={() => {
                addToCart(itemObject)}}>+</button>
        </div> :
        <button onClick={() => {addToCart(itemObject)}}>Add to Basket</button>}
    </div>
}