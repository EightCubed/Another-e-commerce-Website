import {nanoid} from 'nanoid';

export interface cartDetails {
    cartOpen : boolean
    totalPrice : number
    cartArray : obj[]
    promocode : boolean
    itemNum : number
}

export const initialState = {
    cartOpen : false,
    cartArray : [],
    totalPrice : 0.00,
    promocode : false,
    itemNum : 0
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

type Action = { type : string , item : obj , AppliedCode : string , itemDeleteID : string}

export const cartReducer =  ( state:cartDetails = initialState , action : Action ) => {
    switch(action.type){
        case "TOGGLE_STATE" : {
            state.cartOpen=!state.cartOpen
            return {...state}
        }
        case "ADD_TO_CART" : {
            console.log(action.item.quantity)
            if( action.item.quantity === 0 ){
                action.item = { ...action.item , id : nanoid() , quantity : 1 }
                state.cartArray.push(action.item)
                console.log(state.cartArray)
                console.log('1st time')
            }
            else{
                console.log('executing')
                action.item = { ...action.item , quantity : action.item.quantity++ }
            }
            if(action.item.discount)
                state.totalPrice+=action.item.price*(1-action.item.discount_perc);
            else
                state.totalPrice+=action.item.price;
            state.itemNum++;
            console.log(state)
            return {...state}
        }
        case "APPLY_PROMOCODE" : {
            return {...state}
    }
        default : return {...state}
    }
}