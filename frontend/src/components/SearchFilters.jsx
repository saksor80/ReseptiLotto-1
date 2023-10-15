import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';

const ingredients = [
    { name: 'Suola' },
    { name: 'Pippuri' },
    { name: 'Oliiviöljy' },
    { name: 'Vesi' },
    { name: 'Kananmuna' },
    { name: 'Sokeri' },
    { name: 'Maito' },
    { name: 'Jauho' },
    { name: 'Voita' },
    { name: 'Tomaatti' },
    { name: 'Sipuli' },
    { name: 'Valkosipuli' },
    { name: 'Hunaja' },
    { name: 'Sitruuna' },
    { name: 'Juusto' },
    { name: 'Kermaviili' },
    { name: 'Kerma' },
    { name: 'Riisi' },
    { name: 'Pastaa' },
    { name: 'Liha' },
    { name: 'Kala' },
    { name: 'Kana' },
    { name: 'Porkkana' },
    { name: 'Hapankerma' },
    { name: 'Parsakaali' },
    { name: 'Paprika' },
    { name: 'Chili' },
    { name: 'Kurkku' },
    { name: 'Mansikka' },
    { name: 'Banaani' },
    { name: 'Omena' },
    { name: 'Päärynä' },
    { name: 'Rusina' },
    { name: 'Manteli' },
    { name: 'Pähkinä' },
    { name: 'Vanilja' },
    { name: 'Kaakaojauhe' },
    { name: 'Suklaa' },
    { name: 'Leivinjauhe' },
    { name: 'Hiiva' },
    { name: 'Etikka' },
    { name: 'Soijakastike' },
    { name: 'Inkivääri' },
    { name: 'Kurkuma' },
    { name: 'Rosmariini' },
    { name: 'Basilika' },
    { name: 'Timjami' },
    { name: 'Oregano' },
    { name: 'Muskottipähkinä' },
    { name: 'Kaneli' },
    { name: 'Kardemumma' },
    { name: 'Neilikka' },
    { name: 'Lakritsi' },
    { name: 'Korppujauho' },
    { name: 'Leipä' },
    { name: 'Papu' },
    { name: 'Linssejä' },
    { name: 'Hernesose' },
    { name: 'Tofu' },
    { name: 'Maissi' },
    { name: 'Kaura' },
    { name: 'Naudanliha' },
    { name: 'Lammas' },
    { name: 'Porsaanliha' },
    { name: 'Kalkkuna' },
    { name: 'Peruna' },
    { name: 'Bataatti' },
    { name: 'Makaroni' },
    { name: 'Spagetti' },
    { name: 'Kinkku' },
    { name: 'Makkara' },
    { name: 'Silli' },
    { name: 'Tonnikala' },
    { name: 'Katkarapu' },
    { name: 'Lohi' },
    { name: 'Ahven' },
    { name: 'Sieni' },
    { name: 'Pinaatti' },
    { name: 'Kesäkurpitsa' },
    { name: 'Munakoiso' },
    { name: 'Zucchini' },
    { name: 'Avokado' },
    { name: 'Ananas' },
    { name: 'Viinirypäle' },
    { name: 'Meloni' },
    { name: 'Vadelma' },
    { name: 'Mustikka' },
    { name: 'Karhunvatukka' },
    { name: 'Kiivi' },
    { name: 'Mango' },
    { name: 'Papaija' },
    { name: 'Lime' },
    { name: 'Appelsiini' },
    { name: 'Minttu' },
    { name: 'Persilja' },
    { name: 'Korianteri' },
    { name: 'Sitruunaruoho' }
    // ... more ingredients ...
];

function SearchFilters({ selectedIngredients, onIngredientsChange }) {
	return (
		<Autocomplete
			sx={{ width: '90vw', justifyContent:'center', }}
			multiple
			id="ingredients-standard"
			options={ingredients.map((option) => option.name)}
			freeSolo
			renderTags={(value, getTagProps) =>
				value.map((option, index) => (
					<Chip variant="outlined" label={option} {...getTagProps({ index })} sx={{bgcolor: 'white'}}/>
				))
			}
			renderInput={(params) => (
				<TextField 					
					{...params}
					variant="standard"
					label="Ainesosat"
					placeholder="Lisää ainesosia..."
				/>	
			)}
            value={selectedIngredients}
            onChange={(event, newValue) => {
                // console.log(newValue);
                onIngredientsChange(newValue);
            }}		
		/>
	);
}

export default SearchFilters;