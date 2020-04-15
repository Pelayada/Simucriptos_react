import React from 'react';

import Main from '../Componentes/Main';
import { Link } from 'react-router-dom';

export default function Movimientos() {
    return (
        <Main>
            <h1>Movimientos</h1>
            <div id=''>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>From</th>
                            <th>Q</th>
                            <th>To</th>
                            <th>Q</th>
                            <th>QPU</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button className='botones_tabla'>
                        <Link className='boton_tabla' to='/estado'>
                            Estado
                        </Link>
                    </button>
                    <button className='botones_tabla'>
                        <Link className='boton_tabla' to='/compra'>
                            Compra
                        </Link>
                    </button>
                </div>
            </div>
        </Main>
    );
}