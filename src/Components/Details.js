import React from 'react';

export default function Recipe({title, calories, diet, image, ingredients, cuisine, meal}) {
    return (
        <div className='py-8 flex flex-col lg:flex-row mb-4 w-full justify-center'>
            {/* Component image */}
            <img src={image} alt={title} className='w-full lg:w-1/2 rounded-md max-w-md' />
            {/* Component Text Content */}
            <div className='flex flex-col gap-2 justify-center w-full lg:w-1/2 py-2 lg:px-8'>
                <h2 className='text-xl font-semibold text-black'>{title}</h2>
                <div className='flex flex-col gap-3'>
                    {/* If object has not diet data, then do not render */}
                    <div>
                        {diet.length !== 0 && (<><p className='text-sm text-black'>Diet: </p><span className='w-fit cursor-pointer text-xs bg-orange-500 text-white p-1 rounded-md'>{diet}</span></>)}
                    </div>
                    <div>
                        <p className='text-sm text-black'>Calories:</p><span className='w-fit cursor-pointer text-xs bg-orange-500 text-white p-1 rounded-md'>Cal {calories}</span>
                    </div>
                    <div>
                        {/* Map to render the list of cuisines */}
                        <p className='text-sm text-black'>Cuisines:</p>
                        {cuisine.map((cuisines, index) => (
                            <span key={index} className='w-fit cursor-pointer text-xs bg-orange-500 text-white p-1 rounded-md capitalize mr-1'>{cuisines}</span>
                        ))}
                    </div>
                    <div>
                        {/* Map to render the list of Meals */}
                        <p className='text-sm text-black'>Meal Type:</p>
                        {meal.map((meals, index) => (
                            <span key={index} className='w-fit cursor-pointer text-xs bg-orange-500 text-white p-1 rounded-md capitalize mr-1'>{meals}</span>
                        ))}
                    </div>
                </div>
                <p className='text-sm font-regular text-black'>Ingredients:</p>
                <ul className='list-disc pl-7'>
                    {/* Map to render the list of ingredients */}
                    {ingredients.map((ingredient, index) => (
                        <li className='text-xs' key={index}>{ingredient.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}