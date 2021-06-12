import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {useAuth} from '../Context/Auth'
import {useCookies} from 'react-cookie'
export default function PrivateRoute({component:Component, ...rest}) {
    const {currentUser} = useAuth();
    const [cookies, setCookies] = useCookies();
    console.log(cookies.user.email)

    return (
        <Route
        {...rest}
        render={props =>{
            return cookies.user ? <Component {...props} /> : <Redirect to="/signup" />
        }}
        >       
        </Route>
    )
}
