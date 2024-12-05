import { StyledSecondaryNavbar } from "./styles/Navbar.styles";
import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div><br></br></div>
      <div>
        <input type='search' placeholder="search products..."/>
      </div>
      <div><br></br></div>
      <StyledSecondaryNavbar>
        <NavLink to='featured'>Feature</NavLink>
        <NavLink to='new'>New</NavLink>
      </StyledSecondaryNavbar>
      <Outlet/>
    </>
  );
}

export default Products;
