import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export default function Sidebar({ shoppingCart, addToCart, removeFromCart, changeCountInCart, noInCart }) {


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
        <Link to='/Checkout'>Go To Checkout</Link>
    </div>
}

Sidebar.propTypes = {
    shoppingCart: PropTypes.array,
    addToCart: PropTypes.func,
    removeFromCart: PropTypes.func,
    changeCountInCart: PropTypes.func,
    noInCart: PropTypes.func,
}