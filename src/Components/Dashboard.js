import React,{useState} from 'react'
import {Card, Button,Alert} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import {useAuth} from '../Context/Auth'
import {useCookies} from 'react-cookie'

function Dashboard() {
    const [error, setError] = useState("");
    const {logout} = useAuth();
    const history = useHistory();
    const [cookies, setCookies,removeCookies] = useCookies();


    const handleLogout = async () =>{
        setError("");
        try{
            removeCookies("user", {path:"/"});
            logout();
            history.push("/login");
        }catch(err){ 
            setError(err.message);
        }
    }
    return (
        <div className="dashboard-wrapper">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4" >Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email: </strong>{cookies.user.email}
                    <Link to="/update-profile"
                    className="btn btn-primary w-100 mt-3">Update Profle</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>


        </div>
    )
}

export default Dashboard
