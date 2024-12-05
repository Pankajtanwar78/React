import { UseAuth } from "../context/AuthProvider";
import { UseCart } from "../context/CartProvider";
import { UseProduct } from "../context/ProductProvider";
import { Product } from "../data/initialData"

type ProductItemProp= {
  product: Product;
}

const ProductItem = ({product}: ProductItemProp) => {
  
  const cartContext = UseCart();
  const authContext = UseAuth();
  const productCntx = UseProduct();

  return (
    <div style={{padding: '10px', color: '#fff', border: '1px solid #fff', borderRadius: '4px', marginBottom: '10px'}}>
      <div style={{marginBottom: '5px', fontWeight: 'bold'}}>
        {product.name}
      </div>
      <div style={{marginBottom: '5px'}}>{product.price}</div>
      <div style={{marginBottom: '5px'}}>{product.description}</div>
      <button 
        disabled={product.stock <= 0 ? true: false}
      onClick={() => {
        if(authContext.authState.isAuthenticate){
          cartContext.dispatch({
            type: 'ADD_TO_CART',
            payload: {productId: product.id, quantity: 1}
          })
          productCntx.HandleAddToCart(product.id , -1);
        }
        }}>Add to Cart</button>
      <div style={{marginLeft: '20px', display: 'inline-block'}}>Items in stock: {product.stock}</div>
    </div>
  )
}

export default ProductItem