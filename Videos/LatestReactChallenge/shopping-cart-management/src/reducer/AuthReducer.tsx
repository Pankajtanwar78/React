import { Cart, UserAuth } from "../data/initialData"

export type AuthAction = 
  {type: 'LOGIN', payload: {username: string, userCart: Cart[]}} |
  {type: 'LOGOUT'} |
  {type: 'REGISTER', payload: string} |
  {type: 'RELOAD', payload: UserAuth}

const AuthReducer = (state: UserAuth, action: AuthAction) => {

  switch (action.type) {
    case 'LOGIN': {
      if (state.userList.find(user => user.name === action.payload.username)){
        return {...state, isAuthenticate: true, name: action.payload.username, error: null, userCart: action.payload.userCart || []};
      }
      else {
        return {...state, error: 'Please register first'};
      }
    }
    case 'LOGOUT': {
      return {...state, name: '', isAuthenticate: false, userCart: []};
    }
    case 'REGISTER': {
      return {...state, userList: [...state.userList, {id: Date.now(), name: action.payload}], userCart: []};
    }
    case 'RELOAD':{
      console.log(action.payload)
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default AuthReducer