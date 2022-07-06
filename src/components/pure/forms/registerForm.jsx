import React, { useState } from 'react';

const RegisterForm = () => {

    const initialCredentials = {
        username: '',
        name: '',
        password: '',
        email: ''
    }

    const [credentials, setCredentials] = useState(initialCredentials);


    return (
        <div>
            
        </div>
    );
}

export default RegisterForm;
