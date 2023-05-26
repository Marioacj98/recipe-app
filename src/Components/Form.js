import React, { useEffect, useState, useCallback } from 'react';
import Recipe from './Recipe';

export default function Form () {
    // Set the API Key and ID 
    const APP_ID = '4bd3fa19';
    const APP_KEY = '9490b94fad103ad03bee9babb94b8417';

    // State to render the Recipe.js component with the data recieved from the API
    const [recipes, setRecipes] = useState([]);
    // State to set the value for the search field
    const [search, setSearch] = useState('');
    // State to search the user value on the API
    const [query, setQuery] = useState('chicken');

    // Get the recipes data from the API according to the user value
    const getRecipes = useCallback(async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
    }, [query]);

    // Set to do the getRecipes function only the first time and when the query changes
    useEffect(() => {
        getRecipes();
    }, [getRecipes]);

    // Update the value of the search to whatever the user write in the field
    const updateSearch = e => {
        setSearch(e.target.value);
    }

    // Prevent the reload of the page, set the query that the user wants to search and clear the search field value
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    };

    return (
        <div className='flex flex-col justify-center py-6'>
            {/* Form with the search field */}
            <div className='flex justify-center mb-8'>
                <form onSubmit={getSearch}>
                    <input className='bg-slate-100 p-2 rounded-md text-sm focus:outline-0' value={search} onChange={updateSearch} type="text" placeholder='Search recipe...' />
                    <button className='text-white p-2 rounded-md text-sm bg-orange-500' type='Submit'>Search</button>
                </form>
            </div>
            {/* The recipe component */}
            <div className='flex flex-wrap flex-row justify-center gap-2'>
                {/* Map to render the list of recipes */}
                {recipes.map(recipe => (
                    <Recipe
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={parseInt(recipe.recipe.calories)}
                        diet={recipe.recipe.dietLabels}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />
                ))}
            </div>
        </div>
    );
}