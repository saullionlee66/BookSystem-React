import React, { useContext,useEffect,useState } from 'react'
import {BookContext} from './BookContext'
import axios from 'axios'
import {Form, Button} from 'react-bootstrap'
function UpdateBook() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [books, setBooks] = useContext(BookContext);
    const [ID, setID] = useState();
    const updateName = (e) =>{
        setName(e.target.value);
    }

    const updatePrice = (e) =>{
        setPrice(e.target.value);
        
    }

    const updateID = (e) =>{
        setID(e.target.value);
        
    }
    const updateBook = (e) => {
        // e.preventDefault();
        setBooks((prevBooks)=> [...prevBooks,
        {
            name,
            price,
            id:ID
        }])
        axios.put("http://localhost:5000/update",{
            name,
            id:ID,
            price
        }).then(res=>{
            console.log(res)
        },err=>{console.log(err)})

    }
    return (
        <Form onSubmit={updateBook}>
            <Form.Group controlId="formBasicID">
                <Form.Label style={{fontSize: 24}} >Book ID</Form.Label>
                <Form.Control size="lg" onChange={updateID} name="ID"
                type="text" placeholder="Enter book ID" value={ID} />
            </Form.Group>
            <Form.Group controlId="formBasicName">
                <Form.Label style={{fontSize: 24}}>Book Name</Form.Label>
                <Form.Control size="lg" onChange={updateName} name="name"
                type="text" placeholder="Enter new book name" value={name} />
            </Form.Group>

            <Form.Group controlId="formBasicPrice">
                <Form.Label style={{fontSize: 24}}>Price</Form.Label>
                <Form.Control size="lg" onChange={updatePrice} name="price"
                type="text" placeholder="Enter new book price" value={price} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Update Book
            </Button>
        </Form>
    )
}

export default UpdateBook
