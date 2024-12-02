import PropTypes from "prop-types"

export default function Sidebutton({ updateSideState }) {
    return <button className='z-10 right-1 md:right-5 top-16 md:top-20 fixed text-white bg-[#4a90a4] p-2 text-md md:text-2xl rounded-md border-solid border-white border-2 hover:border-[#7cb6c6] hover:bg-[#dcefe7] hover:text-[#7cb6c6]' onClick={() => {updateSideState(true); window.scrollTo({top: 0, behavior: 'smooth'})}}>Basket &lt;</button>
}

Sidebutton.propTypes = {
    updateSideState: PropTypes.func,
}