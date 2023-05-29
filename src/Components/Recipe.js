import React from 'react';
import { Link } from 'react-router-dom';

export default function Recipe({title, calories, diet, image}) {
    return (
        <div className='rounded-md flex flex-col mb-4 w-full border-2 border-orange-500 shadow-md'>
            {/* Component image */}
            <img src={image} alt={title} className='w-full rounded-md' />
            {/* Component Text Content */}
            <div className='flex flex-col gap-2 justify-center w-full p-2'>
                <h2 className='text-base font-semibold text-black text-center'>{title}</h2>
                <div className='flex gap-2 justify-center'>
                    {/* If object has not diet data, then do not render */}
                    {diet.length !== 0 && (<p className='cursor-pointer text-xs bg-orange-500 text-white p-1 rounded-md'>{diet}</p>)}
                    <p className='cursor-pointer text-xs bg-orange-500 text-white p-1 rounded-md'>Cal {calories}</p>
                </div>
                <Link to={'/recipe/' + title.replaceAll(' ', '-').toLowerCase()} className='text-sm font-medium uppercase text-orange-500 text-center underline py-3'>View full ingredients</Link>
            </div>
        </div>
    );
}