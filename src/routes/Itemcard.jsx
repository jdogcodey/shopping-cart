export default function Itemcard({ title, price, description, image, rating, noInBasket}) {
    return <div>
        <h3>{title}</h3>
        <img src={image} />
        <p>{description}</p>
        <p>£{price}</p>
        <p>{rating}/5</p>
        {noInBasket > 0 ?
        <div>
            <button>-</button>
            <input type="number" onChange={}>{noInBasket}</input>
        </div> :
        <button>Add to Basket</button>}
    </div>
}