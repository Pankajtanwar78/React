import { useState } from 'react'
import { UseAuth } from '../context/AuthProvider'
import { UseCart } from '../context/CartProvider'

const Login = () => {

  const [userName, setUserName] = useState('')
  const [registerName, setRegisterName] = useState('')
  
  const [isRegistrationValid, setRegistration] = useState(false);
  const authContext = UseAuth();
  const cartContext = UseCart();
  return (
    <>
      <div style={{textAlign: 'center', marginBottom: '20px', fontSize: '20px'}}>
        <label htmlFor='login'>name: {'  '}</label>
        <input 
          id='login'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => {
          const userCartt = localStorage.getItem(userName + '_cart') ?
          JSON.parse(localStorage.getItem(userName + '_cart') || '[]') : [];
          authContext.authDispatch({type: 'LOGIN', payload: {username: userName, userCart: userCartt}})
          cartContext.dispatch({type: 'SET_CART', payload: userCartt})
        }
        }>Login</button>
        { 
          authContext.authState.error === null ? 
            authContext.authState.isAuthenticate && 
              <>
                <div>{authContext.authState.name} Logged In successfully {'  '}</div>
                <button onClick={()=>
                  {
                    
                    authContext.authDispatch({type: 'LOGOUT' })
                    cartContext.dispatch({type: 'CLEAR_CART'})
                  }
                  }>
                  Logout
                </button>
              </> :
            <div>
              <div style={{color: 'red'}}>{authContext.authState.error} {'   '}</div>
              <button onClick={()=>setRegistration(true)}>Register</button>
            </div>
        }
      </div>
      {isRegistrationValid && 
        <div>
          <label htmlFor='register'>name: {'  '}</label>
          <input 
            id='register'
            value={registerName}
            onChange={(e) => setRegisterName(e.target.value)}
          />
          <button onClick={()=>authContext.authDispatch({type: 'REGISTER', payload: registerName})}>Done</button>
        </div>}
    </>
  )
}

export default Login