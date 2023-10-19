import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";
import registrationsvg from "/reg.svg";

const Registration = () => {
  const { AS, setAS, auth, createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const url = form.url.value;
    const password = form.password.value;
    if (password.length < 6) {
      toast.warning("Less than 6", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.warning("No Cap", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    } else if (!/[@#$%&]/.test(password)) {
      toast.warning("No Special", {
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
            navigate("/");
            toast.success("Logged In", {
              position: "top-center",
              autoClose: 2000,
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-[#131313] text-white">
      <div className="w-[70%] mx-auto flex flex-row-reverse items-center justify-between py-20">
        <form
          onSubmit={handleRegistration}
          className="flex flex-col items-center"
        >
          <p className="text-2xl font-semibold mb-8">Registration</p>
          <input
            placeholder="Enter Your Name"
            className="focus:outline-none mb-4 rounded-xl pl-4 py-3 bg-orange-100 w-[400px] text-orange-600 font-semibold"
            type="text"
            name="name"
          />
          <input
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
            placeholder="Enter Password"
            className="focus:outline-none mb-6 rounded-xl pl-4 py-3 bg-orange-100 w-[400px] text-orange-600 font-semibold"
            type="password"
            name="password"
          />
          <input
            className="bg-orange-400 px-8 py-2 rounded-full font-semibold"
            type="submit"
            value="Register"
          />
          <p className="my-4">Or</p>
          <div className="flex gap-3">
            <BsGoogle className="border rounded-full w-9 h-9 p-2 border-orange-400 cursor-pointer"></BsGoogle>
            <AiOutlineGithub className="border rounded-full w-9 h-9 p-2 border-orange-400 cursor-pointer"></AiOutlineGithub>
          </div>
          <p className="mt-5">
            Already have an Account{" "}
            <Link to="/login">
              {" "}
              <span className="font-semibold text-orange-400 border rounded-full px-3 py-1 ml-2 cursor-pointer inline-block active:scale-90 duration-300 select-none">
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
