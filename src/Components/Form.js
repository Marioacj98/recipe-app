import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

export default function Form () {
    const APP_ID = '4bd3fa19';
    const APP_KEY = '9490b94fad103ad03bee9babb94b8417';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        console.log(data.hits);
        setRecipes(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    };

    return (
        <div className='flex flex-col justify-center py-6'>
            <div className='flex justify-center mb-8'>
                <form onSubmit={getSearch}>
                    <input className='bg-slate-100 p-2 rounded-md text-sm focus:outline-0' value={search} onChange={updateSearch} type="text" placeholder='Search recipe...' />
                    <button className='text-white p-2 rounded-md text-sm bg-orange-500' type='Submit'>Search</button>
                </form>
            </div>
            <div className='flex flex-wrap flex-row justify-center gap-2'>
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