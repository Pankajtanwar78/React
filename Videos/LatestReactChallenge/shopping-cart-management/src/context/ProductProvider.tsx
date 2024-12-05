import { createContext, useContext, useState } from "react"
import { initialProducts, Product } from "../data/initialData"

type productContProps = {
  products: Product[];
  HandleAddToCart: (id: number | undefined, val: number) => void
}


const productCont = createContext<productContProps | undefined>(undefined)

type Props = {
  children: React.ReactNode;
  
}

const ProductProvider = ({children}: Props) => {
  const [products, setProducts] = useState(initialProducts)

  const HandleAddToCart = (id: number | undefined, val: number) => {
    console.log(val);
    setProducts(
      products.map( (product) => {
        if (product.id === id){
          return {...product, stock: product.stock + val};
        }
        else{
          return product;
        }
      })
    )
  }

  return (
    <productCont.Provider value={{products, HandleAddToCart}}>
      {children}
    </productCont.Provider>
  )
}

export function UseProduct() {
  const productContext = useContext(productCont);
  if (!productContext){
    throw new Error('UseProduct must be used in a ProductProvider')
  }
  return productContext
}

export default ProductProvider