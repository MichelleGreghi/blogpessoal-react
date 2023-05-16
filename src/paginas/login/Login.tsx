import React from 'react';
import { Link } from 'react-router-dom';

function Login(){

    return(
        <>
            <Link to='/login' className='text-decorator-none'>
                <h1>Página de Login</h1>
            </Link>
        </>
    )
}

export default Login;