import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col h-screen m-auto justify-center items-center'>
            <h1 className='text-2xl sm:text-5xl uppercase text-gray-900 font-bold tracking-tight'>Hola! Mi nombre es Andrés</h1>
            <p className='text-xl text-gray-900 mt-3'>Soy desarrollador web</p>
            <button className='mt-10 text-md sm:text-xl uppercase bg-red-600 hover:bg-red-700 rounded-lg py-3 px-6 sm:py-5 sm:px-12 shadow-md font-black text-white transition-all duration-300'>Proyectos</button>
        </div>
    )
}

export default Hero