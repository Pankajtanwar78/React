
import {Cart} from '../data/initialData'

export type Action = 
    {type: 'ADD_TO_CART'; payload: Cart}
  | {type: 'REMOVE_FROM_CART'; payload: {id: number}}
  | {type: 'INCREASE_QUANTITY'; payload: {id: number}}
  | {type: 'DECREASE_QUANTITY'; payload: {id: number}}
  | {type: 'CLEAR_CART'} 
  | {type: 'SET_CART'; payload: Cart[]}

const CartReducer = (state: Cart[], action: Action): Cart[] => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      if(state.find(item => item.productId === action.payload.productId)){
        return state.map(item => {
          if (item.productId === action.payload.productId){
            return {...item, quantity: item.quantity + 1}
          }
          else{
            return item;
          }
        });
      }
      else{
        console.log(action.payload)
        return [...state, {productId: action.payload.productId, quantity: action.payload.quantity}]
      }
    }
    case 'REMOVE_FROM_CART': {
      return state.filter(item => item.productId !== action.payload.id);
    }
    case 'INCREASE_QUANTITY':{
      return state.map(item => {
        if (item.productId === action.payload.id){
          return {...item, quantity: item.quantity + 1}
        }
        else{
          return item;
        }
      });
    }
    case 'DECREASE_QUANTITY': {

      if (state.find(item => item.productId === action.payload.id)?.quantity === 1){
        return state.filter(item => item.productId !== action.payload.id);
      }

      return state.map(item => {
        if (item.productId === action.payload.id){
          return {...item, quantity: item.quantity - 1}
        }
        else{
          return item;
        }
      });
    }

    case 'CLEAR_CART':{
      return [];
    }

    case 'SET_CART':{
      return action.payload;
    }
    default:
      return state;

  }
}

export default CartReducer;