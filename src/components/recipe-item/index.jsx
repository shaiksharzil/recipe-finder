import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white hover:-translate-y-2 duration-300">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-md">
        <img
          src={item?.image_url}
          alt="recipe item"
          className="block w-full hover:scale-105 duration-300 object-cover"
        />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-zinc-700">
          {item?.title}
        </h3>
        <div className="flex flex-col">
          <Link
            to={`/recipe-item/${item?.id}`}
            className="text-base p-3 mt-5 px-8 rounded-lg font-semibold tracking-wider inline-block shadow-md bg-orange-400 text-white text-center hover:bg-orange-500"
          >
            Recipe Details
          </Link>
        </div>
      </div>
    </div>
  );
}
