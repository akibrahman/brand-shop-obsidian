import { Link } from "react-router-dom";
import Scarecrow from "/Scarecrow.png";

const ErrorPage = () => {
  return (
    <div className="h-screen">
      <div className="p-7 w-full h-full bg-[#131313] text-white">
        <p className="text-2xl font-bold">404 not Found</p>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex justify-center">
            <img src={Scarecrow} className="w-[65%]" alt="" />
          </div>
          <div className="flex flex-col gap-10 items-start justify-center">
            <h1 className="text-6xl font-bold">
              I have a Bad News <br />
              for you
            </h1>
            <p className="text-[#4f4f4f] text-2xl font-bold leading-7 w-[40%]">
              The page you are looking for might be removed or is temporary
              unavailable.
            </p>
            <Link to="/">
              {" "}
              <button className="active:scale-75 duration-500 text-white text-lg font-bold bg-[#18263A] rounded-lg border-none outline-none px-8 py-3 capitalize">
                back to homepage
              </button>
            </Link>
          </div>
        </div>
        <span className="block text-center mt-28">
          Created By &copy;Obsidian
        </span>
      </div>
    </div>
  );
};

export default ErrorPage;
