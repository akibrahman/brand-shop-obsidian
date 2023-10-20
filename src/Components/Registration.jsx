import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";
import registrationsvg from "/reg.svg";

const Registration = () => {
  const { AS, setAS, auth, createUser, githubLogin, googleLogin, isDark } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const url = form.url.value;
    const password = form.password.value;
    if (password.length < 6) {
      toast.warning("Password should be more than 6 character", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.warning("Password should have atleast one Uppercase", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    } else if (!/[@#$%&]/.test(password)) {
      toast.warning("Password should have atleast one Special character", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
    createUser(email, password)
      .then((data) => {
        console.log(data);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: url,
        })
          .then(() => {
            setAS(!AS);
            navigate(location?.state ? location.state : "/");
            toast.success("Registration Successful", {
              position: "top-center",
              autoClose: 2000,
            });
          })
          .catch((error) =>
            toast.error(error.code, {
              position: "top-center",
              autoClose: 2000,
            })
          );
      })
      .catch((error) => {
        toast.error(error.code, {
          position: "top-center",
          autoClose: 2000,
        });
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("Successfulle Logged In by Google", {
          position: "top-center",
          autoClose: 2000,
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 2000,
        });
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("Successfulle Logged In by Github", {
          position: "top-center",
          autoClose: 2000,
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 2000,
        });
      });
  };
  return (
    <div
      className={`${isDark ? "bg-[#AAADB2]" : "bg-[#131313] text-[#edf0f1]"}`}
    >
      <div className="w-[70%] mx-auto flex flex-row-reverse items-center justify-between py-20">
        <form
          onSubmit={handleRegistration}
          className="flex flex-col items-center"
        >
          <p className="text-2xl font-semibold mb-8">Registration</p>
          <input
            required
            placeholder="Enter Your Name"
            className="focus:outline-none mb-4 rounded-xl pl-4 py-3 bg-orange-100 w-[400px] text-orange-600 font-semibold"
            type="text"
            name="name"
          />
          <input
            required
            placeholder="Enter Your E-mail"
            className="focus:outline-none mb-4 rounded-xl pl-4 py-3 bg-orange-100 w-[400px] text-orange-600 font-semibold"
            type="email"
            name="email"
          />
          <input
            placeholder="Enter Your Photo URL"
            className="focus:outline-none mb-4 rounded-xl pl-4 py-3 bg-orange-100 w-[400px] text-orange-600 font-semibold"
            type="text"
            name="url"
          />
          <input
            required
            placeholder="Enter Password"
            className="focus:outline-none mb-6 rounded-xl pl-4 py-3 bg-orange-100 w-[400px] text-orange-600 font-semibold"
            type="password"
            name="password"
          />
          <div className="flex items-center gap-3 pb-5">
            <input name="condition" type="checkbox" required />
            <p>Accept our Terms & Conditions</p>
          </div>
          <input
            className="bg-orange-400 px-8 py-2 rounded-full font-semibold"
            type="submit"
            value="Register"
          />
          <p className="my-4">Or</p>
          <div className="flex gap-3">
            <BsGoogle
              onClick={handleGoogleLogin}
              className="border rounded-full w-9 h-9 p-2 border-orange-400 cursor-pointer"
            ></BsGoogle>
            <AiOutlineGithub
              onClick={handleGithubLogin}
              className="border rounded-full w-9 h-9 p-2 border-orange-400 cursor-pointer"
            ></AiOutlineGithub>
          </div>
          <p className="mt-5">
            Already have an Account{" "}
            <Link to="/login">
              {" "}
              <span
                className={`font-semibold ${
                  isDark ? "text-orange-700" : "text-orange-400"
                } border rounded-full px-3 py-1 ml-2 cursor-pointer inline-block active:scale-90 duration-300 select-none`}
              >
                Login Here
              </span>
            </Link>
          </p>
        </form>
        <img className="w-[400px]" src={registrationsvg} alt="" />
      </div>
    </div>
  );
};

export default Registration;
