import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { initialUserAuth, UserAuth } from '../data/initialData'
import AuthReducer, { AuthAction } from '../reducer/AuthReducer';

type AuthContextProp = {
  authState: UserAuth;
  authDispatch: React.Dispatch<AuthAction>;
}

const AuthContext = createContext<AuthContextProp | undefined>(undefined)

type Props = {
  children: React.ReactNode;
}

const AuthProvider = ({children}: Props) => {
  const [authState, authDispatch] = useReducer(AuthReducer, localStorage.getItem('localStorage_auth') ?
  JSON.parse(localStorage.getItem('localStorage_auth') || '[]') : initialUserAuth)

  useEffect(()=>{
    console.log('First')
    localStorage.setItem('localStorage_auth', JSON.stringify(authState))
  },[authState])

  // useEffect(() => {
  //   console.log('Second')
  //   const savedAuth = localStorage.getItem('localStorage_auth');
  //   if (savedAuth){
  //     authDispatch({type: 'RELOAD', payload: JSON.parse(savedAuth)});
  //   }
  // },[])

  return (
    <AuthContext.Provider value={ {authState, authDispatch }} >
      {children}
    </AuthContext.Provider>
  )
}

export function UseAuth() {
  const authContext = useContext(AuthContext);
  if(!authContext){
    throw new Error('UseAuth must be used inside AuthProvider')
  }
  return authContext;
}

export default AuthProvider