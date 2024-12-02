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

    return <div className='border-solid border-[#4a90a4] border-2 rounded-md bg-white grid grid-cols-cardlayout grid-rows-cardlayout gap-2 text-xs md:text-base items-center'>
        <h3 className="bg-[#4a90a4] p-3 col-span-4 overflow-hidden text-white max-h-[40px] line-clamp-1">{itemObject.title}</h3>
        <div className="flex align-center justify-center p-1 col-start-4 row-start-2 row-end-4">
            <img className='max-h-[140px]  max-w-full object-contain' src={itemObject.image} />
        </div>
        <p className="row-start-2 col-start-1 col-end-4 row-end-3 p-2 overflow-scroll max-h-[140px]">{itemObject.description}</p>
        <p className="row-start-3 row-end-4 col-start-1 col-end-2 p-2 text-center">£{itemObject.price}</p>
        <p className='row-start-3 row-end-4 col-start-2 col-end-3 p-2 text-center'>{itemObject.rating.rate}/5</p>
        <div className='row-start-3 row-end-4 col-start-3 col-end-4 lg:p-2 text-center'>
            {itemInCart(itemObject) ?
                <div className="flex flex-row">
                    <button className="border-solid border-[#4a90a4] border-2 rounded-full pl-1 md:pl-2 pr-1 md:pr-2 mr-1 md:mr-2 hover:border-[#7cb6c6] hover:bg-[#dcefe7] hover:text-[#7cb6c6]" onClick={() => removeFromCart(itemObject)}>-</button>
                    <input className='w-10 md:w-20 bg-[#dcefe7]' type="number" value={noInCart(itemObject)} onChange={(event) => changeCountInCart(event, itemObject)}></input>
                    <button className="border-solid border-[#4a90a4] border-2 rounded-full pl-2 pr-2 ml-2 hover:border-[#7cb6c6] hover:bg-[#dcefe7] hover:text-[#7cb6c6]" onClick={() => {
                        addToCart(itemObject)}}>+</button>
                </div> :
                <button className='border-solid border-[#4a90a4] border-2 rounded-xl pl-1 pr-1 hover:border-[#7cb6c6] hover:bg-[#dcefe7] hover:text-[#7cb6c6]' onClick={() => {addToCart(itemObject); window.scrollTo({top: 0, behavior: 'smooth'})}}>Add to Basket</button>}
        </div>
    </div>
}

Itemcard.propTypes = {
    itemObject: PropTypes.object.isRequired,
}