/* Ejemplo de uso de método componentDidUpdate en componente
   clase y uso de hook en componente funcional */

import React, { Component, useEffect } from 'react'

export class didUpdate extends Component {

    componentDidUpdate() {
        console.log('Comportamiento cuando el componente recibe nuevos props/cambio en su estado privado')
    }

  render() {
    return (
      <div>
        <h1>didUpdate</h1>
      </div>
    )
  }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props/cambio en su estado privado');
    });

    return (
        <div>
            <h1>didUpdate</h1>
        </div>
    );
}
