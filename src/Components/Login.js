import React, {useRef,useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../Context/Auth'
import {Link,useHistory} from 'react-router-dom';
import firebase from 'firebase'
import 'firebase/auth'
import {useCookies} from 'react-cookie'

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false)
    const history = useHistory();
    const [cookies, setCookies] = useCookies(['user'])


    async function handleSubmit(e){
        e.preventDefault();
        try{
            setError("");
            setLoading(true); 
            await login(emailRef.current.value, passwordRef.current.value)
            .then((userCrendential)=>{
                const user = userCrendential.user
                setCookies('user', user, {path:'/'});
            });
            history.push("/dashboard");
        }catch(err){
            console.log(err.message);
            setLoading(false);
            setError(err.message);
        }
    }

    const handleLoginViaGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                const credential = result.credential;
                // This gives you a Google Access Token. You can use it to access the Google API.
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user
                setCookies('user', user, {path:'/'});
            })
            .then((result) => {
                history.push("/dashboard")
            })
            .catch((error) => {
                console.log(error)
            });
        


    }

    return (
        <div className="login-wrapper">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4" >Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Button disabled={loading} type="submit" className="w-100">Log In</Button>
                </Form>
                <div className="w-100 text-center mt-2">
                    <Link to="/forgot-password" >Forgot Password?</Link>
                </div>
                </Card.Body>
            </Card>
                <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/signup" >Sign Up</Link>
                </div>
                <div className="w-100 text-center mt-2">
                    <span>Login via <a onClick={handleLoginViaGoogle} id="gmail">Gmail?</a></span>

                </div>


        </div>
    )
}

export default Login

