export default function Itemcard({item}) {

    const {shoppingCart, addToCart, removeFromCart} = useOutletContext();

    function itemInCart(item) {
        for (let i = 0; i < shoppingCart.length; i++) {
            if (shoppingCart[i].title === item.title && shoppingCart[i].id === item.id && shoppingCart[i].price === item.price) {
                return true;
            }
            i++;
        }
        return false;
    }

    return <div>
        <h3>{item.title}</h3>
        <img src={item.image} />
        <p>{item.description}</p>
        <p>£{item.price}</p>
        <p>{item.rating.rate}/5</p>
        {noInBasket > 0 ?
        <div>
            <button onClick={removeFromCart()}>-</button>
            <input type="number" onChange={}>{noInBasket}</input>
        </div> :
        <button>Add to Basket</button>}
    </div>
}