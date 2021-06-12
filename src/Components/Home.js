import React from 'react'
import CRUD from '../Photos/Crud.png'
import AUTH from '../Photos/auth.png'
function Home() {
    return (
        <div className="home-wrapper">
            <h1>Saul's Book System</h1>
            
            <p>This project contains two parts:
                <ol>
                    <li>Classic CRUD Demonstration</li>
                    <li>Industrial Standard Registration/Authentication Practice</li>
                </ol>
            </p>
            <img src={CRUD} alt="CRUD" />
            <span> + </span>
            <img src={AUTH} alt="AUTH" />
            <br />
            <br />
            <p>For the CRUD part, user can Create, Read, Update and Delete book info. 
            </p>
            <p>It is built on full MERN tech
                stack, namely, MongoDB, Express, React and Node.JS. </p>
            <br />
            <p>The SignUp/Login part uses Firebase Authentication, including SignUp, Login with email/password,
                and Google Auth0 API. 
            </p>
            <p>It also allow the user to update their password in the dashboard and 
                reset the password if password has been forgotten. Also private routes have been setup for dashboard
                and update profile components. Login is needed for accessing these private routes.</p>
            <p>Used tech includes, but not limited to, MERN, axios, react-router-dom, material-ui, react-bootstrap,
                firebase, google auth0, react-cookies, etc.
            </p>
        </div>
    )
}

export default Home
