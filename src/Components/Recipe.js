import React from 'react';

export default function Recipe({title, calories, diet, image, ingredients}) {
    return (
        <div className='rounded-md flex flex-col mb-4 w-3/4 lg:w-1/4 border border-orange-500 shadow-md'>
            <img src={image} alt={title} className='w-full rounded-md' />
            <div className='flex flex-col gap-2 justify-center w-full p-2'>
                <h2 className='text-base font-bold text-orange-500'>{title}</h2>
                <div className='flex gap-2'>
                    <p className='cursor-pointer text-xs bg-orange-500 text-white p-1 rounded-md'>{diet}</p>
                    <p className='cursor-pointer text-xs bg-orange-500 text-white p-1 rounded-md'>Cal {calories}</p>
                </div>
                <p className='text-sm'>Ingredients:</p>
                <ul className='list-disc pl-7'>
                    {ingredients.map(ingredient => (
                        <li className='text-xs'>{ingredient.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}