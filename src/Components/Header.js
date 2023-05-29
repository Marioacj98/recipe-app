import React from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <>
            <Link to={'/recipe-app/'} className='block text-orange-500 text-center text-3xl font-bold'>Recipe App with React</Link>
        </>
    );
}