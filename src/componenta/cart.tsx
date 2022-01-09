import { useSelector } from 'react-redux';
import { cartDetails} from '../store/reducer';
import './cart.css';
    
function Cart(){

    const itemsInCart:any=useSelector<cartDetails>( (state:any) => (state.cartArray) )
    const price=useSelector<cartDetails>( (state)=> state.totalPrice )

    return(
        <div>
            <div className="cartOpened">
            <strong>CART</strong>
            </div>
                {itemsInCart.map( (e: { name: string , id : string , src : string} )=> <div key={e.id}><img src={e.src} width='40px'></img>{e.name}</div>)}
            <div className='billing'></div>
            <div id='promoCode'>PROMO CODE : <input placeholder='Enter your Promo Code'></input></div>
            <div id='bill'>BILL : {price}</div>
        </div>
    );
}

export default Cart;