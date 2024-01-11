import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";
import image from "../../ke7q_lmaq_230518.jpg";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <div className="w-full">
      <nav className=" w-full flex justify-between items-center pt-1 pb-3 container mx-auto sm:gap-32">
        <h2 className="text-3xl font-bold text-orange-400 flex sm:text-base sm:flex items-center justify-center">
          <img
            src={image}
            className="object-cover h-10 w-10 sm:h-8 sm:w-8"
            alt="logo"
          />
          <NavLink to={"/"}>Recipe Finder</NavLink>
        </h2>
        <ul className="flex gap-5">
          <NavLink to={"/"}>
            <li className=" bg-transparent text-orange-400 p-2 border-2 border-orange-400 rounded-md duration-300 hover:bg-orange-400 hover:text-white sm:text-l sm:p-0.5">
              Home
            </li>
          </NavLink>
          <NavLink to={"/favorites"}>
            <li className=" bg-transparent text-orange-400 p-2 border-2 border-orange-400 rounded-md duration-300  hover:bg-orange-400 hover:text-white sm:text-lg mr-1 sm:p-0.5">
              Favorites
            </li>
          </NavLink>
        </ul>
      </nav>
      <div className=" flex justify-center items-center w-full ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-3/5 sm:w-full"
        >
          <h2 className=" text-5xl font-bold py-1  text-center bg-gradient-to-r from-yellow-400 to-orange-500 inline-block text-transparent bg-clip-text sm:text-4xl">
            Discover and Experiment with New <br />
            <span>
              Food Recipes!
            </span>
          </h2>
          <div className=" w-full flex items-center justify-center">
            <input
              type="text"
              name="search"
              value={searchParam}
              onChange={(event) => setSearchParam(event.target.value)}
              placeholder="Enter Recipe Name..."
              className="bg-white-500 p-2 px-5 rounded-l-md w-2/5 sm:w-80 outline-none border-2 border-orange-400 md:w-80"
            />
            <input
              type="submit"
              value={"Find Recipe"}
              className="bg-orange-400 p-2 text-xl font-semibold text-white rounded-r-md border-2 border-orange-400 hover:bg-orange-500 hover:border-orange-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
