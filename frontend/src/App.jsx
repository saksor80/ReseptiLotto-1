import { useState } from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import RecipeCard from './components/RecipeCard'
import './App.css'

const sampleRecipes = [
  { title: "Spaghetti Carbonara", description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper." },
  { title: "Sushi", description: "Japanese dish featuring vinegared rice combined with various ingredients like seafood, vegetables, and sometimes tropical fruits." },
  { title: "Tacos", description: "A traditional Mexican dish consisting of a folded or rolled tortilla filled with various ingredients like meat, cheese, and lettuce." },
  { title: "Chicken Tikka Masala", description: "Popular Indian dish made with marinated, grilled chicken submerged in a rich tomato-based sauce." },
  { title: "Beef Stroganoff", description: "Russian origin dish that has sautéed beef pieces served in a sour cream-based sauce." },
  { title: "Caesar Salad", description: "Green salad of romaine lettuce and croutons dressed with lemon juice, olive oil, egg, Worcestershire sauce, anchovies, garlic, and parmesan cheese." },
  { title: "Pad Thai", description: "Stir-fried rice noodle dish commonly served as street food in Thailand, usually made with shrimp or chicken." },
  { title: "Ramen", description: "Japanese noodle soup dish that consists of Chinese-style wheat noodles served in a meat or fish-based broth, often flavored with soy sauce or miso." },
  { title: "Chili con Carne", description: "Spicy stew containing chili peppers, meat, and often tomatoes and beans." },
  { title: "Croissants", description: "A buttery, flaky, and delicious pastry that is a breakfast staple in France." },
  { title: "Pizza Margherita", description: "An Italian classic with fresh tomatoes, mozzarella cheese, fresh basil, and olive oil on a flatbread base." },
  { title: "Banh Mi", description: "Vietnamese sandwich consisting of a French baguette filled with a variety of ingredients like meats, vegetables, and condiments." },
];

function App() {
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const generateRecipe = () => {
    const randomIndex = Math.floor(Math.random() * sampleRecipes.length);
    setCurrentRecipe(sampleRecipes[randomIndex]);
  };

  return (
    <>
      <Container>
        <Button variant="contained" color="primary" onClick={generateRecipe}>
          Generate Recipe
        </Button>
        {currentRecipe && <RecipeCard recipe={currentRecipe} />}
      </Container>
    </>
  )
}

export default App
