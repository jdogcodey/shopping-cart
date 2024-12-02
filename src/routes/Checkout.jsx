import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Checkout() {
    const {shoppingCart, addToCart, removeFromCart, changeCountInCart, noInCart} = useOutletContext();

    return <>
    <Link to='/shopping' className="left-5 top-20 fixed text-white bg-[#4a90a4] p-2 text-2xl rounded-3xl border-solid border-white border-2 hover:border-[#7cb6c6] hover:bg-[#dcefe7] hover:text-[#7cb6c6] pt-16">Back</Link>
    <main className="flex justify-center items-center w-full">
        <div className='flex flex-col bg-[#4a90a4] p-4 rounded-lg'>
            <h2 className="text-white text-3xl">Basket:</h2>
            {shoppingCart.map((item) => 
            <div className='flex flex-row bg-white m-2 rounded-md p-2 justify-between' key={item.id}>
                <div className="flex flex-row items-center mr-4">
                    <img className="max-h-24 mr-2" src={item.image}></img>
                    <p>{item.title}</p>
                </div>
                <div className="flex flex-row items-center">
                    <button className="border-solid border-[#4a90a4] border-2 rounded-full pl-2 pr-2 mr-2" onClick={() => {removeFromCart(item)}}>-</button>
                    <input className='w-20 bg-[#dcefe7]' value={noInCart(item)} onChange={(event) => changeCountInCart(event, item)}></input>
                    <button className="border-solid border-[#4a90a4] border-2 rounded-full pl-2 pr-2 ml-2" onClick={() => {addToCart(item)}}>+</button>
                </div>
            </div>)}
            <button className="text-white border-solid border-2 border-white rounded-md text-3xl hover:border-[#7cb6c6] hover:bg-[#dcefe7] hover:text-[#7cb6c6]">Checkout</button>
        </div>
        </main>
    </>
    
}