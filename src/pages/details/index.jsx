import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoritesList,
    handleAddToFavorite,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }

    getRecipeDetails();
  }, []);

  return (
    <div className="container mx-auto py-10 px-24 gap-32 flex flex-row sm:flex-col sm:py-1 sm:px-1 sm:gap-0 md:flex-col md:py-1 md:pt-5  md:px-1 md:gap-0 2xl:gap-32  w-full">
      <div className=" pl-10 mr-32 sm:pl-0 sm:mr-0 sm:p-2">
        <div className="h-96 overflow-hidden rounded-xl group sm:h-48 sm:w-full ">
          <img
            src={recipeDetailsData?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300 sm:h-60"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:gap-0 py-0">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetailsData?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-3xl text-zinc-950">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-orange-400 text-white hover:bg-orange-500"
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-bold text-zinc-900">Ingredients:</span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
              <li>
                <span className="text-xl font-semibold text-zinc-800">
                  {ingredient.quantity}
                  {ingredient.unit} {}
                </span>
                <span className="text-xl font-semibold text-zinc-800">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
