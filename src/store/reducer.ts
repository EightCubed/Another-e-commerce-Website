export interface gameboard {
    board : number[][]
    current : boolean
    turns : number
    winner : number
  }

const initialState = {
    board : [[0,0,0],[0,0,0],[0,0,0]],
    current : (Math.floor(Math.random()*10))%2===0 ? true : false,
    turns : 0,
    winner : 0
}

type Action = { type : string , arr1 : number , arr2 : number , win : number }

export const boardReducer =  ( state:gameboard = initialState , action : Action ) => {
    switch(action.type){
        case "ADD_TURN" : {
            if(state.current)
                state.board[action.arr1][action.arr2]=1
            else
                state.board[action.arr1][action.arr2]=2
            state.current=!state.current
            state.turns++
            return {...state}
        }
        case "SET_WINNER" : {
            state.winner = action.win;
            console.log(action.win + " wins!")
            return {...state}
        }
        default : return {...state}
    }
}