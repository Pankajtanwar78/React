import { Provider } from 'react-redux'
import store from './app/store'
import './App.css'
import Cake from './features/cake/Cake'
import IceCream from './features/iceCream/IceCream'
import User from './features/user/User'

function App() {

  return (
    <Provider store={store}>
      <Cake />
      <IceCream />
      <User />
    </Provider>
  )
}

export default App
