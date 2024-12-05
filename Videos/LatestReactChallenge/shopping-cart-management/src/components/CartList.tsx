import {UseCart} from '../context/CartProvider'
import { UseProduct } from '../context/ProductProvider';
import CartItem from './CartItem';

const CartList = () => {

  const cartContext = UseCart();
  const productCntx = UseProduct();
  const totalItems = cartContext.cartList.reduce((total, item) => total + item.quantity, 0)
  const totalAmount = cartContext.cartList.reduce((total, item) => {
    const product = productCntx.products.find(product => product.id === item.productId);
    if (product) {
      return total + product.price * item.quantity;
    }
    return total;
  }, 0)

  return (
    <div style={{marginLeft: '20px',width: 'auto', display: 'flex', padding: '10px', flexDirection: 'column', backgroundColor: 'black', 
      border: '1px solid orange', borderRadius: '10px' }}>
      <div style={{backgroundColor: '#ddd', color: 'black', 
      textAlign: 'center', fontSize: '20px',
      padding: '10px', marginBottom: '10px', border: '1px solid black', borderRadius: '10px'}}>Products in Cart: {totalItems} {' '}</div>
      <div style={{backgroundColor: '#ddd', color: 'black', 
      textAlign: 'center', fontSize: '20px',
      padding: '10px', marginBottom: '10px', border: '1px solid black', borderRadius: '10px'}}>Total amount: {totalAmount}</div>
      {
        
        cartContext.cartList.map(cart => {
          const product = productCntx.products.find(item => item.id === cart.productId);
          console.log(productCntx.products)
          console.log(cartContext.cartList)
          return <div key={cart.productId}>
            <CartItem product={product} itemInCart={cart} />
          </div>
        })
      }
      <button style={{textAlign: 'center', display: 'block'}} onClick={() => {
          cartContext.dispatch({
            type: 'CLEAR_CART'
          })
        }}>Clear Cart</button>
    </div>
  )
}

export default CartList