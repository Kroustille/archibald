import { IngredientDetail } from '@/components/ingredients/detail'
import { Recipe } from '@/models/Recipe'

interface Props {
  recipe: Recipe
  onChange(recipe: Recipe): void
}

export const RecipeDetail = ({ recipe, onChange }: Props) => {
  return <article>
    <h1>{recipe.label}</h1>
    <ul>
      {recipe.ingredients.map((ingredient, index) => <IngredientDetail 
        key={ingredient.product.id} 
        ingredient={ingredient} 
        onChange={new_ingredient => {
          const new_ingredients = [...recipe.ingredients]
          new_ingredients[index] = new_ingredient
          onChange({
            ...recipe,
            ingredients: new_ingredients
          })
        }}
      />)}
    </ul>
  </article>
}