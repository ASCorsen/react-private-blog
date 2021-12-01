import React from 'react';
import {  useHistory } from 'react-router-dom';

const LoginPage = () => {


    const history = useHistory()

    function handleClick() {
        history.push("/blogposts");
    }

    return (
        <div>
           <h1>Login Pagina</h1>
            <p>Druk op de knop om in te loggen</p>
            <button
            type="button"
            onClick={handleClick}
            >Login</button>
        </div>
    );
};

export default LoginPage;