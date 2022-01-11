import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartDetails } from '../store/reducer';
import './cart.css';
    
function Cart(){

    const [promocode,setPromoCode]=useState<string>("")
    const itemsInCart=useSelector<cartDetails,any>( (state) => (state.cartArray) )
    const price=useSelector<cartDetails,number>( (state)=> state.totalPrice )
    const dispatch=useDispatch();

    function handleDeleteFromCart(e:any){
        dispatch({type : "DELETE_FROM_CART" , itemDeleteID : e.id })
    }

    const handleChange = (event: InputEvent,) => {
        const value = event.target;
        console.log(value)
      }

    return(
        <div>
            <div className="cartOpened">
            <strong>CART</strong>
            </div>
                <div id='cartItemArea'>
                {itemsInCart.map( (e: { name: string , id : string , src : string , price : number , discount_perc : number , discount : boolean } )=> 
                <div key={e.id}><div id='cartItem'><img src={e.src} id='cartimg' alt="item in cart" width='40px'></img>
                <span id="itemNameInCart">{e.name}</span><div id='itemPriceName'>
                {<span id='price'>{e.discount ? <strong> ₹{ (e.price*(1-e.discount_perc)).toFixed(2) } &nbsp; <del id='discounted'>₹{e.price}</del></strong>: <strong>₹{e.price}</strong> }
                </span>}</div><button id='deleteItemButton' onClick={()=>handleDeleteFromCart(e)}>Delete</button></div></div>)}
            </div>
            <div className='billing'>
                <div id='promoCode'>PROMO CODE : &nbsp;<input placeholder='Enter your Promo Code' value={promocode} 
                onChange={handleChange}></input><button id='promoCodeApply'>Apply</button></div>
                <div id='bill'><strong>BILL : {(price).toFixed(2)}</strong></div>
            </div>
        </div>
    );
}

export default Cart;