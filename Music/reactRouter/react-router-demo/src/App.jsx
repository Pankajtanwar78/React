import React from "react"

const LazyAbout = React.lazy(() => import('./components/About'))

import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
// import About from "./components/About"
import Navbar from "./components/Navbar"
import { GlobalStyles } from "./components/styles/global"
import { ThemeProvider } from "styled-components"
import OrderSummary from "./components/OrderSummary"
import NoMatch from "./components/NoMatch"
import Products from "./components/Products"
import FeaturedProducts from "./components/FeaturedProducts"
import NewProducts from "./components/NewProducts"
import Users from "./components/Users"
import UserDetails from "./components/UserDetails"
import AdminUser from "./components/AdminUser"
import Profile from "./components/Profile"
import { AuthProvider } from "./components/Auth"
import Login from "./components/Login"
import RequireAuth from "./components/RequireAuth"

const theme = {
  primary: {
    bg: '#ffefd5'
  },
  secondary: {
    bg: '#42B3AE'
  }
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles / >
        <Navbar />
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={
            <React.Suspense fallback='Loading...'>
              <LazyAbout />
            </React.Suspense>} />
          <Route path='order-summary' element={<OrderSummary />} />
          <Route path='products' element={<Products />} >
            <Route index element={<FeaturedProducts/>}/>
            <Route path='featured' element={<FeaturedProducts />} />
            <Route path='new' element={<NewProducts />} />
          </Route>
          <Route path='users' element={<Users/>}>
            <Route path=':userId' element={<UserDetails/>}/>
            <Route path='admin' element={<AdminUser/>}/>
          </Route>
          <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
