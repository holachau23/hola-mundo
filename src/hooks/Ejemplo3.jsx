/* 
 * Ejemplo de:
 * -useState()
 * -useContext() 
*/

import React, { useState, useContext } from 'react';
/*
 * 
 * @returns Componente1 dispone de un contexto que va a tener un valor que recibe desde el padre
 */

const myContext = React.createContext(null);

const Componente1 = () => {
    
    // Inicializamos un estado vacio que se va a rellenar con los datos del padre
    const state = useContext(myContext);

    return (
        <div>
            <h1>El token es: { state.token }</h1>
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(myContext);

    return (
        <div>
            <h2>La sesión es: { state.session }</h2>
        </div>
    );
}

const ContextComponent = () => {

    const initialState = {
        token: 1234567,
        session: 1,
    }

    // creamos el estado de este componente
    const [sessionData, setsessionData] = useState(initialState);

    function updateSession() {
        setsessionData({
            token: 1234568,
            session: sessionData.session + 1
        });
    }

    return (
        <div>
            <h1>Ejemplo de useState y useContext</h1>
            <myContext.Provider value={ sessionData }>
            { /* Todo lo que está aquí dentro puede leer los datos de sessionData */ }
            { /* Además, si se actualiza, los componentes también lo actualizan */ }
            <Componente1></Componente1>
            <button onClick={ updateSession }>Actualizar sesión</button>
            </myContext.Provider>
        </div>
    );
}

export default ContextComponent;

