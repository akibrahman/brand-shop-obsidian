import { useContext, useRef } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { ThreeCircles } from "react-loader-spinner";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";
import loginsvg from "/login.svg";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logInUser, googleLogin, githubLogin, isDark } =
    useContext(AuthContext);
  const loader = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    loader.current.firstChild.classList.add("pr-12");
    loader.current.lastChild.classList.remove("hidden");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logInUser(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("Successfully Logged In", {
          position: "top-center",
          autoClose: 2000,
        });
      })
      .catch((error) => {
        loader.current.firstChild.classList.remove("pr-12");
        loader.current.lastChild.classList.add("hidden");
        if (error.code == "auth/invalid-login-credentials") {
          toast.error("Invalid user or password", {
            position: "top-center",
            autoClose: 2000,
          });
        } else {
          toast.error("Something went wrong", {
            position: "top-center",
            autoClose: 2000,
          });
        }
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
      <div className="w-[70%] mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between py-20">
        <form
          onSubmit={handleLogin}
          className="w-full flex flex-col items-center"
        >
          <p className="text-2xl font-semibold mb-8">Log In</p>
          <input
            placeholder="Enter Your E-mail"
            className="focus:outline-none mb-4 rounded-xl pl-4 py-3 bg-orange-100 lg:w-[400px] text-orange-600 font-semibold w-full"
            type="email"
            name="email"
          />
          <input
            placeholder="Enter Password"
            className="focus:outline-none mb-6 rounded-xl pl-4 py-3 bg-orange-100 lg:w-[400px] text-orange-600 font-semibold w-full"
            type="password"
            name="password"
          />
          <div ref={loader} className="flex items-center relative">
            <input //pr-12
              className="bg-orange-400 px-8 py-2 rounded-full font-semibold"
              type="submit"
              value="Login"
            />

            <div className="hidden absolute right-2">
              {/* hidden */}
              <ThreeCircles
                height="25"
                width="25"
                color="#fff"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
              />
            </div>
          </div>
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
          <p className="mt-5 text-center">
            Do not have an Account{" "}
            <Link to="/registration">
              <span
                className={`font-semibold ${
                  isDark ? "text-orange-700" : "text-orange-400"
                } border rounded-full px-3 py-1 ml-2 cursor-pointer inline-block active:scale-90 duration-300 select-none`}
              >
                Register Here
              </span>
            </Link>
          </p>
        </form>
        <img className="w-[400px]" src={loginsvg} alt="" />
      </div>
    </div>
  );
};

export default Login;
