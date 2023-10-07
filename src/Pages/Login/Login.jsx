import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);
  };
  return (
    <div className="max-w-6xl mx-auto p-5 md:p-0 mt-10">
      <div>
        <h2 className="text-5xl font-bold text-center">Please Login</h2>
        <form
          onSubmit={handleLogin}
          className="w-full md:w-3/4 lg:w-1/2 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
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
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="text-sm link link-hover">
                Forgot password?
              </a>
              <p className="text-sm">
                Do not have an account{" "}
                <Link className="text-blue-600 font-bold" to="/register">
                  Register
                </Link>
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
