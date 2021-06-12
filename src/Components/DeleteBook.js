import React, {useState } from 'react'
import axios from 'axios'
import {Form, Button} from 'react-bootstrap'
import {API} from '../Helpers/API'
import Books from './Books'
function DeleteBook() {
    const [ID, setID] = useState();
    
    const updateID = (e) =>{
        setID(e.target.value);
        
    }
    const deleteBook = (e) => {
   
        axios.delete(`${API.api}/delete`,{
            data:{
                id:ID
            }
        }).then(res=>{
            console.log(res)
        },err=>{console.log(err)})
        setID("");
    }
    return (
        <div className="deleteBook-wrapper">
            <Form onSubmit={deleteBook}>
                <Form.Group controlId="formBasicID">
                    <Form.Label style={{fontSize: 24}} >Book ID</Form.Label>
                    <Form.Control size="lg" onChange={updateID} name="ID"
                    type="text" placeholder="Enter Book ID to Delete..." value={ID} required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Delete Book
                </Button>
            </Form>

            <Books />
        </div>
    )
}


export default DeleteBook
