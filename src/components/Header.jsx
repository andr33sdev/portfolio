import React, { useState } from 'react'
import Inicio from '../pages/Inicio';
import SobreMi from '../pages/SobreMi';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

const Header = () => {
    const [isActiveDropdown, setIsActiveDropdown] = useState(false);

    return (
        <Router>
            {/* Contenedor Header padre */}
            <div className={isActiveDropdown ? 'block uppercase text-gray-900 font-semibold shadow-md h-fit' : 'block uppercase text-gray-900 font-semibold shadow-md h-24'}>
                {/* Boton menú/x ocultos en medidas medianas-grandes */}
                <div className='sm:hidden px-5 py-5'>
                    {
                        !isActiveDropdown ? <MenuIcon className='cursor-pointer hover:text-red-600 transition-all duration-300' onClick={() => setIsActiveDropdown(!isActiveDropdown)} />
                            :
                            <CloseIcon className='cursor-pointer hover:text-red-600 transition-all duration-300' onClick={() => setIsActiveDropdown(!isActiveDropdown)} />
                    }
                </div>
                {/* Menú tanto para mobile como para desktop */}
                <div className={`${isActiveDropdown ? 'space-y-3 pb-5' : 'opacity-0 sm:opacity-100 justify-start sm:py-10'} flex flex-col sm:flex-row sm:items-center sm:justify-center transition-all ease-in-out duration-300`}>
                    <Link to="/" className='mx-5 hover:text-red-600 transition-all duration-300'>Inicio</Link>
                    <Link to="/about" className='mx-5 hover:text-red-600 transition-all duration-300'>Sobre mi</Link>
                    <Link className='mx-5 hover:text-red-600 transition-all duration-300'>Portfolio</Link>
                    <Link className='mx-5 hover:text-red-600 transition-all duration-300'>Contacto</Link>
                </div>

            </div>

            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/about' element={<SobreMi />} />
            </Routes>
        </Router>
    )
}

export default Header
