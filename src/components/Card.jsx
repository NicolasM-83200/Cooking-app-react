import React from "react";

const Card = ({ meal }) => {
  let ingredients = [];
  for (let i = 1; i < 21; i++) {
    if (meal[`strIngredient${i}`]) {
      let ingredient = meal[`strIngredient${i}`];
      let measure = meal[`strMeasure${i}`];

      ingredients.push(`${ingredient} - ${measure}`);
    }
  }
  return (
    <li className="card">
      <h2>{meal.strMeal}</h2>
      <p>{meal.strArea}</p>
      <div className="img">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
      <div className="text">
        <div className="ingredients-container">
          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Card;
