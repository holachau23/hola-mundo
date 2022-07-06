/*
* Ejemplo de componente de tipo clase que dispone de los métodos de ciclo de vida
*/

import React from 'react'
import PropTypes from 'prop-types'

class LifeCycleExample extends React.Component {

    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }

    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje del componente')
    }

    componentDidMount() {
        console.log('DIDMOUNT: Cuando se monta el componente')
    }

    componentWillReceiveProps(nextProps) {
        console.log('WILLRECEIVEPROPS: Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        /* Sirve para controlar si el componente debe o no actualizarse */
        // return true o false
        console.log('')
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WILLUPDATE: Antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DIDUPDATE: Después de actualizarse')
    }

    componentWillUnmount() {
        console.log('WILLUNMOUNT: Antes de desaparecer')
    }

}

LifeCycleExample.propTypes = {

}