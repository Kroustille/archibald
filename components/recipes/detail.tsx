import { Card } from '@/ui/Card'
import { Ingredient } from '@/models/ingredient'
import { IngredientDetail } from '@/components/ingredients/detail'
import { Recipe } from '@/models/recipe'

interface Props {
  recipe: Recipe
  onChange(recipe: Recipe): void
}

export const RecipeDetail = ({ recipe, onChange }: Props) => {
  const handleIngredientChange = (new_ingredient: Ingredient, index: number) => {
    const new_ingredients = [...recipe.ingredients]
    new_ingredients[index] = new_ingredient
    onChange({
      ...recipe,
      ingredients: new_ingredients
    })
  }
  
  return <Card>
    <article>
      <h1>{recipe.label}</h1>
      <ul>
        {recipe.ingredients.map((ingredient, index) => <IngredientDetail 
          key={ingredient.product.id} 
          ingredient={ingredient} 
          onChange={new_ingredient => handleIngredientChange(new_ingredient, index)}
        />)}
      </ul>
    </article>
  </Card>
}