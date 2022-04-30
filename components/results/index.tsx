import { Recipe } from '@/models/recipe'

interface Props {
  recipe: Recipe
}

export const Results = ({ recipe }: Props) => {
  const total_without_taxes = recipe.ingredients.reduce((result, ingredient) => result + ingredient.count * ingredient.product.pricePerBatch / ingredient.product.batchSize, 0)
  const total_with_taxes = total_without_taxes *1.02
  return <section>
    {total_with_taxes}
  </section>
}