/*
* Ejemplo de uso del Hook useState
*
* Crear un componente funcional y acceder a su estado privado a través
* de un Hook y además poder modificarlo.
*/

import React, { useState } from 'react';

const Ejemplo1 = () => {
    
    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre: 'Augusto',
        email: 'mail@mail.com'
    }

    /* 
    * Queremos que valorInicial y personaInicial sean parte del estado del componente
    * para así poder gestionar su cambio y que éste se vea reflejado en la vista
    * del componente.
    * 
    * const [var, func] = useState(val_0)
    */

    const [contador, setContador] = useState(valorInicial)

    const [persona, setPersona] = useState(personaInicial)

    /*
     * Función para actualizar el estado privado que contiene el contador 
     */

    function incrementarContador() {
        //? funcionParaCambiar(nuevoValor)

        setContador(contador + 1);
    }

    /*
     * Función para actualizar el estado privado que contiene la persona
     */

    function actualizarPersona() {
        setPersona(
            {
                nombre: 'Pepe',
                email: 'mail@correo.com.ar'
            }
        )
    }

    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <p>{ contador }</p>
            { /* En este caso los métodos van sin paréntesis porque sino se ejecutarían. Si llevaran parámetros se escriben distinto */ }
            <button onClick={ incrementarContador }>+</button>
            <p>{ persona.nombre }</p>
            <p>{ persona.email }</p>
            <button onClick={ actualizarPersona }>Cambiar persona</button>
        </div>
    );
}

export default Ejemplo1;
