import { AiOutlineGithub } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import registrationsvg from "/reg.svg";

const Registration = () => {
  return (
    <div className="bg-[#131313] text-white">
      <div className="w-[70%] mx-auto flex flex-row-reverse items-center justify-between py-20">
        <form className="flex flex-col items-center">
          <p className="text-2xl font-semibold mb-8">Registration</p>
          <input
            placeholder="Enter Your Name"
            className="focus:outline-none mb-4 rounded-xl pl-4 py-3 bg-orange-100 w-[400px] text-orange-600 font-semibold"
            type="email"
          />
          <input
            placeholder="Enter Your E-mail"
            className="focus:outline-none mb-4 rounded-xl pl-4 py-3 bg-orange-100 w-[400px] text-orange-600 font-semibold"
            type="email"
          />
          <input
            placeholder="Enter Your Photo URL"
            className="focus:outline-none mb-4 rounded-xl pl-4 py-3 bg-orange-100 w-[400px] text-orange-600 font-semibold"
            type="email"
          />
          <input
            placeholder="Enter Password"
            className="focus:outline-none mb-6 rounded-xl pl-4 py-3 bg-orange-100 w-[400px] text-orange-600 font-semibold"
            type="password"
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
