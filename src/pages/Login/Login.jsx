import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = ({children}) => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
        .then(result => 
          console.log(result),
          navigate(location?.state ? location.state : '/')
        
        )
        .catch(error => console.error(error))


    }

  return (
    <div>
        <Navbar></Navbar>
      
      <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
          <h2 className="py-8 text-3xl text-center text-dark2 font-bold">Please Login</h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center p-4">Do not have an account? <Link className="text-blue" to={'/register'}>Register here</Link></p>
          </div>
        </div>
    </div>
  );
};

export default Login;
