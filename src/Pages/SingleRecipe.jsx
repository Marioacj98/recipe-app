import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import Details from '../Components/Details';

export default function SingleRecipe () {
    let params = useParams();
    const [info, setInfo] = useState([]);

    const getInfo = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${params.name}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`);
        const data = await response.json();
        setInfo(data.hits);
    };

    useEffect(() => {
        getInfo();
        // eslint-disable-next-line
    }, [setInfo]);

    return (
        <>
            <Header />
            {info.slice(0, 1).map((detail, index) => (
                <Details 
                    key={index} 
                    title={detail.recipe.label} 
                    calories={parseInt(detail.recipe.calories)} 
                    diet={detail.recipe.dietLabels}
                    image={detail.recipe.image}
                    ingredients={detail.recipe.ingredients}
                    cuisine={detail.recipe.cuisineType}
                    meal={detail.recipe.mealType}
                />
            ))}
        </>
    );
}