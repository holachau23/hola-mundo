/* 
* Ejemplo de uso de:
* - useState()
* - useRef()
* - useEffect()
*/

import React, { useState, useEffect, useRef } from 'react';

const Ejemplo2 = () => {

    // Vamos a crear dos contadores distinto 
    // cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef para asociar
    // una variable con un elemento del DOM del componente

    const myRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1)
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }

    /**
     * Trabajando con useEffect()
    */

    /* 
     * ? Caso 1: Ejecutar siempre un snippet de código 
     * Cada vez que hay un cambio en el estado del componente
     * se ejecuta aquello dentro del useEffect()
    */

    //useEffect(() => {
    //    console.log('cambio en el estado del componente');
    //    console.log('Mostrando referencia a elemento del DOM:');
    //    console.log(myRef);   
    //})

    /**
     * ? Caso 2: Ejecutar SOLO cuando cambie el contador 1
     * Cada vez que haya un cambio en el contador 1 se ejecuta lo que
     * diga el useEffect().
     * Cuando haya cambios en el contador 2 no pasará nada.
    */

    //useEffect(() => {
    //    console.log('Cambio en el contador 1');
    //    console.log('Mostrando referencia a elemento del DOM:');
    //    console.log(myRef);
    //}, [contador1]);

    /**
     * ? Caso 2: Ejecutar SOLO cuando cambie el contador 1 o el contador 2
     * Cada vez que haya un cambio en el contador 1 se ejecuta lo que
     * diga el useEffect().
     * Cada vez que haya un cambio en el contador 2 se ejecuta lo que
     * diga el useEffect().
    */
    useEffect(() => {
        console.log('Cambio en el contador 1/contador 2');
        console.log('Mostrando referencia a elemento del DOM:');
        console.log(myRef);
    }, [contador1, contador2]);
    return (
        <div>
            <h1>Ejemplo useState, useRef, useEffect</h1>
            <h2>Contador 1: { contador1 }</h2>
            <h2>Contador 2: { contador2 }</h2>
            { /* Elemento referenciado */ }
            <h4 ref={ myRef }>Ejemplo de elemento referenciado</h4>
            <button onClick={ incrementar1 }>Sumar al 1</button>
            <button onClick={ incrementar2 }>Sumar al 2</button>
        </div>
    );
}

export default Ejemplo2;
