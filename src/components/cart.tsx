// import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartDetails, obj } from '../store/reducer';
import './cart.css';
    
function Cart(){
    const [promocode,setPromocode]=useState<string>("");
    const itemsInCart=useSelector<cartDetails,obj[]>( (state) => (state.cartArray) )
    const price=useSelector<cartDetails,number>( (state)=> state.totalPrice )
    const promocodePrice=useSelector<cartDetails,number>( (state)=> state.discountedPrice )
    const promoCode=useSelector<cartDetails,boolean>( (state)=> state.promocode )
    const dispatch=useDispatch();

    const handleDeleteFromCart=(e:obj)=>{
        console.log(e.id)
        dispatch({type : "DELETE_FROM_CART" , itemDeleteID : e.id })
        console.log(itemsInCart)
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setPromocode(newValue);
    }

    const handlePromocodeApply=()=>{
        if(promoCode===false)
            dispatch({type : "APPLY_PROMOCODE", code : promocode })
    }

    const removePromocode=()=>{
        if(promoCode===true)
            dispatch({type : "REMOVE_PROMOCODE"})
    }

    return(
        <div>
            <div className="cartOpened">
            <strong>CART</strong>
            </div>
                <div id='cartItemArea'>
                {itemsInCart.map( e=>
                <div key={e.id}><div id='cartItem'><img src={e.src} id='cartimg' alt="item in cart" width='40px'></img>
                <span id="itemNameInCart">{e.name}</span><div id='itemPriceName'>
                {<span id='price'>{e.discount ? <strong> ₹{ (e.price*(1-e.discount_perc)).toFixed(2) } &nbsp; <del id='discounted'>₹{e.price}</del></strong>: <strong>₹{e.price}</strong> }
                </span>}</div><button id='deleteItemButton' onClick={()=>handleDeleteFromCart(e)}>Delete</button></div></div>)}
            </div>
            <div className='billing'>
                <div id='promoCode'>PROMO CODE : &nbsp;<input placeholder='Enter your Promo Code' value={promocode} 
                onChange={handleChange}></input><button id='promoCodeApply' onClick={()=>handlePromocodeApply()}>Apply</button>{promoCode?<span id='promocodeConfirmation'>&#10004;<button id='removePromocode' onClick={removePromocode}>Remove</button></span>:null}</div>
                <div id='bill'><strong>BILL : { promoCode? Math.abs((promocodePrice)).toFixed(2): Math.abs((price)).toFixed(2)}</strong></div>
            </div>
        </div>
    );
}

export default Cart;