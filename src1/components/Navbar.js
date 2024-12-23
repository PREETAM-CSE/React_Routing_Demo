import { Link, Outlet, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav">
          <NavLink style={({isActive})=>isActive?{color: "blue"}: {color : "black"}} to="/"><h4>HOME</h4></NavLink>
          <NavLink style={({isActive})=>isActive?{color: "blue"}: {color : "black"}} to="/about"><h4>ABOUT</h4></NavLink>
          <Link to="/items"><h4>ITEMS</h4></Link>
         
      </div>
      <Outlet/>
    </>
  );
}

export default Navbar;
