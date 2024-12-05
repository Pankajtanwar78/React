import { UseCart } from "../context/CartProvider";
import { UseProduct } from "../context/ProductProvider";
import { Cart, Product } from "../data/initialData"

type CartItemProp = {
  itemInCart: Cart;
  product: Product | undefined;
}

const CartItem = ({itemInCart, product}: CartItemProp) => {

  const cartContext = UseCart();
  const productCntx = UseProduct();
  
  return (
    <div style={{marginBottom: '10px', padding: '10px', border: '1px solid #fff', borderRadius: '4px', color: '#fff'}}>
      <div style={{marginBottom: '5px', fontWeight: 'bold'}}>
        {product ? product.name: ''}
      </div>
      <div style={{marginBottom: '5px'}}>{product?.price}</div>
      <div style={{marginBottom: '5px'}}>{product?.description}</div>
      <div>

        <label >Quantity: {itemInCart.quantity} {' '}</label>

        <button 
          disabled={
            productCntx.products.find(item => item.id === itemInCart.productId)?.stock === 0 ? true: false
          }
          onClick={() => {
            cartContext.dispatch({
              type: 'INCREASE_QUANTITY',
              payload: {id: itemInCart.productId}
            })

            productCntx.HandleAddToCart(product?.id, -1);  


        }}>Increase</button>

        <button onClick={() => {
          cartContext.dispatch({
            type: 'DECREASE_QUANTITY',
            payload: {id: itemInCart.productId}
          })
          productCntx.HandleAddToCart(product?.id, 1);
        }}>Decrease</button>

      </div>
      <button onClick={() => {
          cartContext.dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {id: itemInCart.productId}
          })
          productCntx.HandleAddToCart(product?.id, itemInCart.quantity);  
        }}>Remove</button>
    </div>
    
  )
}

export default CartItem