import React, { useContext,useEffect,useState } from 'react'
import {BookContext} from './BookContext'
import axios from 'axios'
import {Form, Button} from 'react-bootstrap'

function DeleteBook() {
    const [ID, setID] = useState();

    

    const updateID = (e) =>{
        setID(e.target.value);
        
    }
    const deleteBook = (e) => {
   
        axios.delete("http://localhost:5000/delete",{
            data:{
                id:ID
            }
        }).then(res=>{
            console.log(res)
        },err=>{console.log(err)})
        setID("");
    }
    return (
        <Form onSubmit={deleteBook}>
            <Form.Group controlId="formBasicID">
                <Form.Label style={{fontSize: 24}} >Book ID</Form.Label>
                <Form.Control size="lg" onChange={updateID} name="ID"
                type="text" placeholder="Enter book ID" value={ID} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Delete Book
            </Button>
        </Form>
    )
}


export default DeleteBook
