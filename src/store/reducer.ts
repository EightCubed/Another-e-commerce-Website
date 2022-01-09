export interface cartDetails {
    cartOpen : boolean
    totalPrice : number
    cartArray : obj[]
}

export const initialState = {
    cartOpen : false,
    cartArray : [],
    totalPrice : 0.00
}

export interface obj{
    [x: string]: any
    id : string
    name : string 
    price : number
    rating : number
    src : string
    quantity : number
}

type Action = { type : string , item : obj}

export const cartReducer =  ( state:cartDetails = initialState , action : Action ) => {
    switch(action.type){
        case "TOGGLE_STATE" : {
            state.cartOpen=!state.cartOpen
            return {...state}
        }
        case "ADD_TO_CART" : {
            action.item = { ...action.item , quantity : 1 }
            state.cartArray.push(action.item)
            state.totalPrice+=action.item.price;
            console.log(state)
            return {...state}
        }
        default : return {...state}
    }
}