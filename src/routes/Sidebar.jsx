import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export default function Sidebar({ shoppingCart, addToCart, removeFromCart, changeCountInCart, noInCart, updateSideState }) {


    return <div className='z-10 flex flex-col absolute right-0 top-16 w-96 bg-[#4a90a4] min-h-screen pb-2'>
        <div className="flex flex-row place-content-between pl-2 pr-2 text-white text-xl items-center">
            <h2 className=''>Basket:</h2>
            <button className="border-solid border-[#f5f9f7] border-2 rounded-3xl pl-2 pr-2 hover:border-[#7cb6c6] hover:bg-[#dcefe7] hover:text-[#7cb6c6]" onClick={() => {updateSideState(false)}}>Hide</button>
        </div>
        {shoppingCart.map((item) => 
        <div className='grid grid-rows-2 grid-cols-basketlayout bg-white h-14 m-1 rounded-md p-1' key={item.id}>
            <p className="col-start-1 col-end-2 row-start-1 row-end-2 overflow-hidden">{item.title}</p>
            <img className='h-12 col-start-2 col-end-3 row-start-1 row-end-3 ' src={item.image}></img>
            <div className="col-start-1 col-end-2 row-start-2 row-end-3 flex justify-self-center self-center">
                <button className="border-solid border-[#4a90a4] border-2 rounded-full pl-2 pr-2 mr-2" onClick={() => {removeFromCart(item)}}>-</button>
                <input className='w-20 bg-[#dcefe7]' value={noInCart(item)} onChange={(event) => changeCountInCart(event, item)}></input>
                <button className="border-solid border-[#4a90a4] border-2 rounded-full pl-2 pr-2 ml-2" onClick={() => {addToCart(item)}}>+</button>
            </div>
        </div>)}
        <Link className='ml-2 text-xl text-white border-solid border-[#f5f9f7] border-2 rounded-3xl pl-2 hover:border-[#7cb6c6] hover:bg-[#dcefe7] hover:text-[#7cb6c6]' to='/Checkout'>Go To Checkout</Link>
    </div>
}

Sidebar.propTypes = {
    shoppingCart: PropTypes.array,
    addToCart: PropTypes.func,
    removeFromCart: PropTypes.func,
    changeCountInCart: PropTypes.func,
    noInCart: PropTypes.func,
    updateSideState: PropTypes.func,
}