import React, {useState } from 'react'
import axios from 'axios'
import {Form, Button} from 'react-bootstrap'
import {API} from '../Helpers/API'
import Books from './Books'
function UpdateBook() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState();
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
        axios.put(`${API.api}/update`,{
            name:name,
            id:ID,
            price:price
        }).then(res=>{
            console.log(res)
        },err=>{console.log(err)})

    }
    return (
        <div className="updateBook-wrapper">
            <Form onSubmit={updateBook}>
                <Form.Group controlId="formBasicName">
                    <Form.Label style={{fontSize: 24}}>ID</Form.Label>
                    <Form.Control size="lg" onChange={updateID} name="name"
                    type="text" placeholder="Enter the ID of the book you want to update" value={ID} required />
                </Form.Group>

                <Form.Group controlId="formBasicName">
                    <Form.Label style={{fontSize: 24}}>Book Name</Form.Label>
                    <Form.Control size="lg" onChange={updateName} name="name"
                    type="text" placeholder="Enter new book name..." value={name} required />
                </Form.Group>

                <Form.Group controlId="formBasicPrice">
                    <Form.Label style={{fontSize: 24}}>Price</Form.Label>
                    <Form.Control size="lg" onChange={updatePrice} name="price"
                    type="number" min="0" step="0.01"
                     placeholder="Enter new book price..." value={price} required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update Book
                </Button>
            </Form>

            <Books />
        </div>
    )
}

export default UpdateBook
