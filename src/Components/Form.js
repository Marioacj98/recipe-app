import React from 'react';

export default function Form () {
    return (
        <div className='flex justify-center py-6'>
            <form>
                <input className='bg-slate-100 p-2 rounded-md text-sm focus:outline-0' type="text" placeholder='Search recipe...' />
                <button className='text-white p-2 rounded-md text-sm bg-orange-500' type='Submit'>Search</button>
            </form>
        </div>
    );
}