import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { FcGoogle } from "react-icons/fc";
import swal from "sweetalert";

const Login = () => {
  const { signIn, user, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(user);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        swal("Success!", "You Are Successfully Login", "success");
      })
      .catch(() => {
        swal(
          "Error!",
          "Email or password mismatch. Please Try Again!",
          "error"
        );
      });
  };
  const handleLoginWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
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
          <div className="flex justify-center mt-5">
            <button className="btn btn-ghost" onClick={handleLoginWithGoogle}>
              <FcGoogle></FcGoogle> Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
