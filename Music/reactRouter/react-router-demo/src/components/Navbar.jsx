import { NavLink } from "react-router-dom";
import { StyledPrimaryNavbar } from "./styles/Navbar.styles";
import { useAuth } from "./Auth";


const Navbar = () => {
  const auth = useAuth()


  return (
    <StyledPrimaryNavbar>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/products'>Products</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
      {  !auth.user && <NavLink to='/login'>Login</NavLink> }
      
    </StyledPrimaryNavbar>
  );
}

export default Navbar;
