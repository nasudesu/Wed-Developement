import { recipes } from './data.js';

export default function RecipeList() {
  const { id, name, ingredients } = recipes;
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recepie => {
        return (<div key={id}>
          <h2>{recepie.name}</h2>
          <ul>
            {recepie.ingredients.map(ingredient =>
              <li key={ingredient}>{ingredient}</li>
            )}
          </ul>
        </div>)
      })}
    </div>
  );
}