import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";


export default function Itemcard({itemObject}) {

    const {shoppingCart, addToCart, removeFromCart, changeCountInCart} = useOutletContext();

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

    return <div className='border-solid border-[#4a90a4] border-2 rounded-md bg-white'>
        <h3 className="bg-[#4a90a4] p-3">{itemObject.title}</h3>
        <div className="h-24 w-24 flex align-center justify-center p-1">
            <img className='max-h-full  max-w-full object-contain' src={itemObject.image} />
        </div>
        <p>{itemObject.description}</p>
        <p>£{itemObject.price}</p>
        <p>{itemObject.rating.rate}/5</p>
        {itemInCart(itemObject) ?
        <div>
            <button onClick={() => removeFromCart(itemObject)}>-</button>
            <input type="number" value={noInCart(itemObject)} onChange={(event) => changeCountInCart(event, itemObject)}></input>
            <button onClick={() => {
                addToCart(itemObject)}}>+</button>
        </div> :
        <button onClick={() => {addToCart(itemObject)}}>Add to Basket</button>}
    </div>
}

Itemcard.propTypes = {
    itemObject: PropTypes.object.isRequired,
}