import Itemcard from "./Itemcard";
import { useLoaderData } from "react-router-dom";

export default function Shopping() {

    const data = useLoaderData();

   return <main>
    {data.map((item) => (
        <Itemcard key={item.id} title={item.title} price={item.price} description={item.description} image={item.image} rating={item.rating.rate}/>
    ))}
    </main>
}

export async function loader() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
    return data;
}