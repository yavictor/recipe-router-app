import { getMealById } from '../api';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Preloader } from './Preloader';


function Recipe(props) {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState({});
  const { goBack } = useHistory();

  useEffect(() => {
    getMealById(idMeal)
    .then((data) => setRecipe(data.meals[0]));
  }, [idMeal]);

  return (
    <>
      <button className="btn-small orange back-btn-top" onClick={goBack}>Back</button>
      {!recipe.hasOwnProperty('idMeal') ? (
        <Preloader /> 
      ) : (
        <div className="recipe-page">
          <h1 className="center">{recipe.strMeal}</h1>
          <div className="center">
            <img className="meal-photo" src={recipe.strMealThumb} alt={recipe.strMeal} />
          </div>
          {recipe.strArea ? <h5>Category: {recipe.strCategory}</h5> : null} 
          {recipe.strArea ? <h5>Area: {recipe.strArea}</h5> : null}
          <table className="centered highlight">
            <thead>
              <tr>
                <th>Ingredients</th>
                <th>Quantity</th>
              </tr>
            </thead>

            <tbody>
              {
                Object.keys(recipe).map((el) => {
                  if (recipe[el] && el.includes('Ingredient')) {
                    return (
                      <tr key={el}>
                        <td>{recipe[el]}</td>
                        <td>{recipe.[`strMeasure${el.substring(13)}`]}</td>
                      </tr>
                    )
                  }
                  return null;
                })
              }
            </tbody>
          </table>
          <h5 className="center">Сooking instructions.</h5>
          {recipe.strYoutube ? (
            <div className="row center">
              <iframe width="560" height="315" 
              src={'https://www.youtube.com/embed/' + recipe.strYoutube.split('=')[1]}
              title={recipe.strMeal} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          ) : null}
          <p>{recipe.strInstructions}</p>
        </div>
      )}
      <button className="btn-small orange back-btn-bottom" onClick={goBack}>Back</button>
    </>
  );
}

export { Recipe };
<iframe width="560" height="315" src="https://www.youtube.com/embed/4aZr5hZXP_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// "idMeal": "52772",
// "strMeal": "Teriyaki Chicken Casserole",
// "strDrinkAlternate": null,
// "strCategory": "Chicken",
// "strArea": "Japanese",
// "strInstructions": "Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!",
// "strMealThumb": "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
// "strTags": "Meat,Casserole",
// "strYoutube": "https://www.youtube.com/watch?v=4aZr5hZXP_s",
// "strIngredient1": "soy sauce",
// "strIngredient2": "water",
// "strIngredient3": "brown sugar",