/* Ejemplo de uso de método componentWillUnmount en componente
   clase y uso de hook en componente funcional */

import React, { Component, useEffect } from 'react';
   
export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca')
    }

    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    }
    
}

export const WillUnmountHook = () => {

    useEffect(() => {

        // Acá no va nada

        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        };
    }, []);

    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
}
   

   