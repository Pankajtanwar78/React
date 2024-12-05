import React, { useEffect } from 'react';
import { createContext, useContext, useReducer} from 'react'
import CartReducer , { Action } from '../reducer/CartReducer'
import { Cart } from '../data/initialData';
import { UseAuth } from './AuthProvider';

type CartContextProp = {
  cartList: Cart[];
  dispatch: React.Dispatch<Action>;
}

const CartContext = createContext<CartContextProp | undefined>(undefined);

type CartProviderProp = {
  children: React.ReactNode;
}

const CartProvider = ({children}: CartProviderProp) => {
  const {authState} = UseAuth();
  const [cartList, dispatch] = useReducer(CartReducer, authState.userCart);
  console.log(authState.userCart)
  useEffect(() => {
    if (authState.name){
      localStorage.setItem(authState.name + '_cart', JSON.stringify(cartList));
    }
  },[cartList, authState.name])


  return (
    <CartContext.Provider value={{cartList, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}

export const UseCart = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext){
    throw new Error('useCart must be used within a CartProvider');
  }
  return cartContext;
}

export default CartProvider;

