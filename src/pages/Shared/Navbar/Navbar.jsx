import { Link, NavLink } from "react-router-dom";
import userImage from '../../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = ({children}) => {
  const {user, logOut} = useContext(AuthContext);

  const handleSignOut = () =>{
        
    //logout
    logOut()
    .then(result => console.log(result))
    .catch(error => console.error(error))
}
  const navLinks = (
    <>
      <li className="mr-4">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mr-4">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="mr-4">
        <NavLink to="/career">Career</NavLink>
      </li>

      <li className="mr-4">
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
  <div>
    <div className="navbar mb-2 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div>
            <img className="w-10 rounded-full" src={userImage} alt="" />
        </div>
      </label>
      {
        user ?
        <Link to={'/login'} onClick={handleSignOut} className="btn bg-dark1">Sign Out</Link>
        :
        <Link to={'/login'} className="btn bg-dark1">Login</Link>
      }
    
  </div>
</div>
  </div>
  );
};

export default Navbar;
