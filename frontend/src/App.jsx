import './App.css'
import { useState } from 'react'
import Button from '@mui/material/Button'
import RecipeCard from './components/RecipeCard'
import AppBar from './components/AppBar'
import SearchFilters from './components/SearchFilters'
import ThemeWrapper from './components/ThemeWrapper'
import { Box, Stack } from '@mui/material'

const sampleRecipes = [
  {
    title: "Spaghetti Carbonara",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    description: "Klassinen italialainen pastaruoka, joka on tehty munista, juustosta, pancettasta ja pippurista.",
    ingredients: ["200g spagettia", "100g pancettaa", "2 isoa kananmunaa", "50g pecorino-juustoa", "50g parmesan-juustoa", "Vastajauhettua mustapippuria", "Suolaa", "2 valkosipulinkynttä", "Pieni nippu tuoretta lehtipersiljaa"],
    timeToCook: "20 minuuttia",
    steps: ["Keitä spagetti suolatussa vedessä kunnes se on al dente.", "Paista pancetta ja valkosipuli kunnes ne ovat rapeita.", "Vatkaa munat kulhossa ja lisää raastettu pecorino ja parmesan.", "Lisää muna-seos valutettuun spagettiin sekä pancetta. Sekoita kunnes seos on kermaista.", "Mausta suolalla ja pippurilla. Tarjoile lisää juustoa ja persiljaa päällä."]
  },
  {
    title: "Banh Mi",
    image: "https://images.pexels.com/photos/1483769/pexels-photo-1483769.jpeg",
    description: "Vietnamilainen voileipä, joka koostuu ranskalaisesta patongista, joka on täytetty erilaisilla ainesosilla, kuten lihalla, vihanneksilla ja mausteilla.",
    ingredients: ["1 ranskalainen patonki", "200g grillattua possua (viipaloitu)", "Daikon & porkkana pikkelssiä", "Kurkkusiivuja", "2 ruokalusikallista majoneesia", "1 ruokalusikallinen soijakastiketta", "1 viipaloitu jalapeno", "Tuoretta korianteria"],
    timeToCook: "15 minuuttia",
    steps: ["Leikkaa patonki pituussuunnassa, mutta ei kokonaan kahtia.", "Levitä majoneesi yhdelle puolelle leipää.", "Lisää kerrokset grillatulla possulla, sitten pikkelssit, kurkku, jalapeno ja korianteri.", "Pirskota päälle soijakastike.", "Paina voileipää hieman yhdistääkseen maut ja tarjoile."]
  }
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
      <ThemeWrapper>
        <AppBar />               
        <Stack overflow='hidden' spacing={5} justifyContent='center' alignItems='center' display='flex'>
        <SearchFilters />    
          <Button variant="contained" color="primary" onClick={generateRecipe} > Generate Recipe </Button> 
          <Box>
                {oldRecipe && (<div className={isAnimating ? "slide-out" : ""} ><RecipeCard recipe={oldRecipe} /></div>)}
                {currentRecipe && (<div className={isAnimating ? "slide-in" : ""} ><RecipeCard recipe={currentRecipe} /></div>)}
          </Box>
        </Stack>
      </ThemeWrapper>    
    </>
  )
}
export default App
