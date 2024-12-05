import { UseProduct } from "../context/ProductProvider";
import ProductItem from "./ProductItem"

const ProductList = () => {

  const productCntx = UseProduct();

  return (
    <>
      
      <div style={{display: 'flex', padding: '10px', flexDirection: 'column', backgroundColor: 'black', 
        border: '1px solid orange', borderRadius: '10px' }}>
        <div style={{backgroundColor: '#ddd', color: 'black', 
        textAlign: 'center', fontSize: '20px',
        padding: '10px', marginBottom: '10px', border: '1px solid black', borderRadius: '10px'}}>Available Products</div>
        {
          productCntx.products.map((product) => {
            return <div key={product.id} >
              <ProductItem product={product} />
            </div>
        })}
      </div>
    </>
  )
}

export default ProductList