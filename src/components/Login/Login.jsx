import { useContext, useEffect } from "react";
import { authContext } from "../authProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser, googleLogin, githubLogin, facebookLogin, setUser, user } =
    useContext(authContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleFacebookLogin = () => {
    facebookLogin()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate(location.state);
    }
  }, [user]);

  return (
    <div className="max-w-[450px] mx-auto mt-36">
      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <p>Email</p>
          <input
            type="text"
            name="email"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="text"
            name="password"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Register
        </button>
      </form>

      <div className="mt-10 flex justify-around">
        <button onClick={handleGoogleLogin} className="btn btn-success">
          Login With Google
        </button>
        <button onClick={handleGithubLogin} className="btn btn-info">
          Login With GitHub
        </button>
        <button onClick={handleFacebookLogin} className="btn btn-warning">
          Login With Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
