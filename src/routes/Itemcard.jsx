export default function Itemcard({ title, price, description, image, rating }) {
    return <div>
        <h3>{title}</h3>
        <img src={image} />
        <p>{description}</p>
        <p>£{price}</p>
        <p>{rating}/5</p>
    </div>
}