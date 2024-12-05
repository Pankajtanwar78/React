import { useState } from "react";
import { useAuth } from "./Auth";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()


  const redirectedPath = location.state?.path || '/'
  const handleLogin = () => {
    auth.login(user)
    navigate(redirectedPath, {replace: true})
  }

  return (
    <div>
      <label>
        Username:{' '}
        <input type='text' onChange={(e) => setUser(e.target.value)} />
      </label>
      <button
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
