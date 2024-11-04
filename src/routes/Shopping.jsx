import Itemcard from "./Itemcard";
import { useLoaderData, useOutletContext } from "react-router-dom";

export default function Shopping() {

    const data = useLoaderData();

   return <main>
    {data.map((item) => (
        <Itemcard key={item.id} itemObject={item}/>
    ))}
    </main>
}

export async function loader() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
    return data;
}