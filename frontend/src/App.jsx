import './App.css'
import { useState } from 'react'
import Button from '@mui/material/Button'
import RecipeCard from './components/RecipeCard'
import AppBar from './components/AppBar'
import { Box, Stack } from '@mui/material'

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
  const [oldRecipe, setOldRecipe] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const discardRecipe = () => {
    if (currentRecipe) {  // Only discard if there's a current recipe
      setIsAnimating(true);
      setOldRecipe(currentRecipe);
      setCurrentRecipe(null); // Clear current recipe
      setTimeout(() => {
        setIsAnimating(false);
        setOldRecipe(null);
      }, 500);
    }
  };

  const generateNewRecipe = () => {
    const randomIndex = Math.floor(Math.random() * sampleRecipes.length);
    setIsAnimating(true);  // Start slide-in animation
    setCurrentRecipe(sampleRecipes[randomIndex]);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const generateRecipe = () => {
    if (currentRecipe) {
      // First discard the current recipe
      discardRecipe();
      // Then generate a new one after the discard animation is done
      setTimeout(() => {
        generateNewRecipe();
      }, 500);
    } else {
      // If there's no current recipe, just generate a new one
      generateNewRecipe();
    }
  };

  return (
    <>
      <AppBar />
      <Stack overflow='hidden' spacing={5} justifyContent='center' alignItems='center' display='flex'>
        <Button variant="contained" color="primary" onClick={generateRecipe} > Generate Recipe </Button> 
        <Box>
              {oldRecipe && (<div className={isAnimating ? "slide-out" : ""} ><RecipeCard recipe={oldRecipe} /></div>)}
              {currentRecipe && (<div className={isAnimating ? "slide-in" : ""} ><RecipeCard recipe={currentRecipe} /></div>)}
        </Box>
      </Stack>     
    </>
  )
}
export default App
