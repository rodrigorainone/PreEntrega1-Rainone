import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const CartWidget = ({cantCarrito}) => {
    return (
        <>
            <a href="http://" id="tuky"><FontAwesomeIcon  icon={faCartShopping} /></a>
            
            
            
            <p className='text-white'>{cantCarrito}</p>
            
        </>
    );
}

export default CartWidget;
