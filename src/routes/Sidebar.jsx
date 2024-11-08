export default function Sidebar({ shoppingCart, addToCart, removeFromCart, changeCountInCart, noInCart }) {


    return <div>
        {shoppingCart.map((item) => 
        <div key={item.id}>
            <p>{item.title}</p>
            <img src={item.image}></img>
            <button onClick={() => {removeFromCart(item)}}>-</button>
            <input value={noInCart(item)} onChange={(event) => changeCountInCart(event, item)}></input>
            <button onClick={() => {addToCart(item)}}>+</button>
        </div>)}
    </div>
}