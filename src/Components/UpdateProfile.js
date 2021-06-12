import React, {useRef,useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../Context/Auth'
import {Link,useHistory} from 'react-router-dom';

function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {currentUser,updateEmail,updatePassword} = useAuth();
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false)
    const history = useHistory();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do not match");
        }
        const promises = [];
        setLoading(true);
        setError("");
        if(emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value));
        }
        if(passwordRef.current.value !== currentUser.password){
            promises.push(updatePassword(passwordRef.current.value));
        }

        Promise.all(promises).then(()=>{
            history.push("/");
        }).catch(err => setError(err.message)).finally(()=> setLoading(false))
    
        
    }

    return (
        <div className="updateprofile-wrapper">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4" >Update Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
  
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required 
                        defaultValue={currentUser.email} />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef}  
                        placeholder="Leave blank to keep the same" 
                        />
                    </Form.Group>
                    <Form.Group id="password-confirmation">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef}  
                        placeholder="Leave blank to keep the same"
                        />
                    </Form.Group>
                    <Button disabled={loading} type="submit" className="w-100">Update</Button>
                </Form>
                </Card.Body>
            </Card>
                <div className="w-100 text-center mt-2">
                   <Link to="/dashboard">Cancel</Link>
                </div>

        </div>
    )
}

export default UpdateProfile
