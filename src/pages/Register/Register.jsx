
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const Register = ({children}) => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photourl = form.get('photourl')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photourl, email, password);

        //create user 
        createUser(email,password)
        .then(result => console.log(result))
        .catch(error => console.error(error));     

    }
    return (
        <div>
             <Navbar></Navbar>
      
      <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
          <h2 className="py-8 text-3xl text-center text-dark2 font-bold">Please Register</h2>
            <form onSubmit={handleRegister} className="card-body">
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  name="photourl"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
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
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="text-center p-4">Already have an account? <Link className="text-blue" to={'/register'}>Login</Link></p>
          </div>
        </div>
        </div>
    );
};

export default Register;