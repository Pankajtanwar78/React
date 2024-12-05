import CartProvider from "./context/CartProvider"
import CartList from "./components/CartList"
import ProductList from "./components/ProductList"
import AuthProvider from './context/AuthProvider'
import Login from "./components/Login"
import ProductProvider from "./context/ProductProvider"

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
          <Login />
          <div style={{display: 'flex', padding: '30px', backgroundColor: '#89a097', justifyContent: 'space-around'}}>
            <ProductList />
            <CartList/>
          </div>
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
