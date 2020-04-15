import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='menu'>
            <h1 className='boton_menu'>Simucriptos</h1>
            <div className='contenido_menu'>
                <Link to='/'>Movimientos</Link>
                <Link to='/compras'>Compras</Link>
                <Link to='/estado'>Estado</Link>
            </div>          
        </div>
    );
}