import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="">
      <div className="bg-[#FFFFFF]">
        <div className="hero  min-h-screen bg-[#DEDDDE]">
          <div className="hero-content  w-full h-full">

            <div className="card flex-col lg:flex-row rounded-l-none shadow-2xl bg-[#F5F4F6] border-[3px] border-[#FFFDFF]">
              <div className="text-center lg:text-left">
                <img src="https://i.ibb.co/z7xZyZb/timenew.png" className=" h-full " alt="" />
              </div>
              <form className="card-body flex-shrink-0">

                <h1 className="text-5xl font-bold">Login now!</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" className="input input-bordered" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div>
                  <p>Dont have Account? <Link className="text-green-600 font-bold" to={'/signup'}>Create an Account</Link></p>
                  <p>Or, continue with <Link className="text-green-600 font-bold" to={'/'}>Google</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;