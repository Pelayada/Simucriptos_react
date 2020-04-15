import React from 'react';

import Main from '../Componentes/Main';

export default function Compras () {
    return (
        <Main>
            <h1>Compra de criptomonedas</h1>
            <form className=''>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <label>From: </label>
                            <input name='from' type='text' id='from' />
                        </div>  
                        <div className='col-sm-6'>
                            <label>From: </label>
                            <input name='from' type='text' id='from' />
                        </div>    
                    </div>
                </div>
                
            </form>
        </Main>
        
    );
}