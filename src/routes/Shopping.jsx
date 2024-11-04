export default function Shopping() {
    <main></main>
}

export async function loader() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}