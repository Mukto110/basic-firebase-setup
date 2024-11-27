import { useContext, useState } from "react";
import { authContext } from "../authProvider/AuthProvider";

const Register = () => {
  const { registerUser, setUser } = useContext(authContext);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password.length < 6) {
      setError("password must be 6 char");
      return;
    }
    if (password !== confirmPassword) {
      setError("passwords didn't match");
      return;
    }
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
      setEmailError("Invalid email");
      return;
    }
    // if () {
    // more regex validation can be done here
    // }
    setError("");
    setEmailError("");

    registerUser(email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => setEmailError(error.message));
  };

  return (
    <div className="max-w-[450px] mx-auto mt-36">
      <form onSubmit={handleRegister} className="space-y-6">
        <div>
          <p>Name</p>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Photo</p>
          <input
            type="text"
            name="photo"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Email</p>
          <input
            type="text"
            name="email"
            required
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        {emailError && <small className="text-red-600">{emailError}</small>}
        <div>
          <p>Password</p>
          <input
            type="text"
            name="password"
            required
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Confirm Password</p>
          <input
            type="text"
            name="confirmPassword"
            required
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        {error && <small className="text-red-600">{error}</small>}
        <button type="submit" className="btn btn-primary w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
