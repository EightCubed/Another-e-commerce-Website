import {nanoid} from 'nanoid';

export interface cartDetails {
    cartOpen : boolean
    totalPrice : number
    cartArray : obj[]
    promocode : boolean
    itemNum : number
    discount : number
    discountedPrice : number
}

export const initialState = {
    cartOpen : false,
    cartArray : [],
    totalPrice : 0.00,
    promocode : false,
    itemNum : 0,
    discount : 0,
    discountedPrice : 0
}

export interface obj{
    id : string
    name : string 
    price : number
    discount : number
    discount_perc : number
    rating : number
    src : string
    quantity : number
}

type Action = { type : string , item : obj , AppliedCode : string , itemDeleteID : string , code : string}

// const AcceptedPromocode:string[]=["SUPPLYSAIL30"];

const calculateTotalPrice=( state : cartDetails)=>{
    if(state.promocode){
        state.discountedPrice=state.totalPrice*(1-state.discount)
    }
}

export const cartReducer =  ( state:cartDetails = initialState , action : Action ) => {
    switch(action.type){
        case "TOGGLE_STATE" : {
            state.cartOpen=!state.cartOpen
            return {...state}
        }
        case "ADD_TO_CART" : {
            action.item = { ...action.item , id : nanoid() , quantity : 1 }
            state.cartArray.push(action.item)
            console.log(state.cartArray)

            if(action.item.discount)
                state.totalPrice+=action.item.price*(1-action.item.discount_perc);
            else
                state.totalPrice+=action.item.price;
            state.itemNum++;
            console.log(state)
            calculateTotalPrice(state);
            return {...state,totalPrice : state.totalPrice}
        }
        case "DELETE_FROM_CART" : {
            console.log(state.cartArray)
            for (let i = 0; i < state.cartArray.length; i++) {
                if (state.cartArray[i].id === action.itemDeleteID) {
                    state.totalPrice-=state.cartArray[i].discount?state.cartArray[i].price*(1-state.cartArray[i].discount_perc):state.cartArray[i].price
                    state.itemNum--;
                    state.cartArray.splice(i--, 1);
                }
            }
            calculateTotalPrice(state);
            return {...state,totalPrice : state.totalPrice,cartArray : state.cartArray}
        }
        case "APPLY_PROMOCODE" : {
            switch(action.code){
                case "SUPPLYSAIL30" :
                    state.discount=0.3;
                    state.promocode=true;
                    break;
                case "TOPSECRETPROMOCODE" :
                    state.discount=1.0;
                    state.promocode=true;
                    break;
                default: state.discount=0.0;
            }
            calculateTotalPrice(state);
            console.log(state.discount,state.promocode,state.totalPrice);
            return {...state,discount : state.discount,promocode : state.promocode}
    }
        case "REMOVE_PROMOCODE" : {
            state.promocode=false;
            state.discount=0.0;
            calculateTotalPrice(state);
            return {...state,discount : state.discount,promocode : state.promocode}
        }
        default : return {...state}
    }
}