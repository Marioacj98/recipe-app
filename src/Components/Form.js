import React, { useEffect, useState, useCallback } from 'react';
import Recipe from './Recipe';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Form () {
    // State to render the Recipe.js component with the data recieved from the API
    const [recipes, setRecipes] = useState([]);
    // State to set the value for the search field
    const [search, setSearch] = useState('');
    // State to search the user value on the API
    const [query, setQuery] = useState('pasta');

    // Get the recipes data from the API according to the user value
    const getRecipes = useCallback(async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }, [query]);

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

    // Set to do the getRecipes function only the first time and when the query changes
    useEffect(() => {
        getRecipes();
    }, [getRecipes]);

    return (
        <div className='flex flex-col justify-center py-6'>
            {/* Form with the search field */}
            <div className='flex justify-center mb-8'>
                <form onSubmit={getSearch}>
                    <input className='bg-slate-100 p-2 rounded-md text-sm focus:outline-0' value={search} onChange={updateSearch} type="text" placeholder='Search recipe...' />
                    <button className='text-white p-2 rounded-md text-sm bg-orange-500' type='Submit'>Search</button>
                </form>
            </div>
            <h3 className='text-black text-center text-2xl font-medium'>Results for: {query}</h3>
            {/* The recipe component */}
            <div className='flex flex-wrap flex-row justify-center relative max-w-full'>
                <Splide className='py-8 px-9' options={{perPage: 4, breakpoints: { 1024: { perPage: 2 }, 768: { perPage: 1 } }, gap: '20px', rewind: true}}>
                    {/* Map to render the list of recipes */}
                    {recipes.map(recipe => (
                        <SplideSlide key={recipe.recipe.label}>
                            <Recipe
                                key={recipe.recipe.label}
                                title={recipe.recipe.label}
                                calories={parseInt(recipe.recipe.calories)}
                                diet={recipe.recipe.dietLabels}
                                image={recipe.recipe.image}
                                ingredients={recipe.recipe.ingredients}
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
}