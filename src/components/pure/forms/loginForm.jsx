/* 
 * Componente que va a contener el formulario para autenticación de usuarios 
*/

import React, { useState } from 'react';

const LoginForm = () => {

    const initialCredentials = {
        username: '',
        password: ''
    }

    const [credentials, setCredentials] = useState(initialCredentials);

    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
