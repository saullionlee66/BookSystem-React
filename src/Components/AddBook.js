import React, {useState} from 'react';
import Axios from 'axios'
import {Form, Button} from 'react-bootstrap'
import {API} from '../Helpers/API'
import Books from './Books'
const AddBook = () =>{
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

     const addBook = (e) => {
        Axios.post(`${API.api}/addbook`,{
            name,
            id:ID,
            price
        }).then(res=>{
            console.log(res)
        },err=>{console.log(err)})
        setPrice("");
        setID("");
        setName("");
    }
    return(
        <div className="addBook-wrapper">
            <Form onSubmit={addBook}>
                <Form.Group controlId="formBasicName">
                    <Form.Label style={{fontSize: 24}} >Book ID</Form.Label>
                    <Form.Control size="lg" onChange={updateID} name="ID"
                    type="text" placeholder="Enter Book ID" value={ID} required />
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <Form.Label style={{fontSize: 24}}>Book Name</Form.Label>
                    <Form.Control size="lg" onChange={updateName} name="name"
                    type="text" placeholder="Enter Book name" value={name} required />
                </Form.Group>

                <Form.Group controlId="formBasicPrice">
                    <Form.Label style={{fontSize: 24}}>Price</Form.Label>
                    <Form.Control size="lg" onChange={updatePrice} name="price"
                    type="number" min="0" step="0.01"
                     placeholder="Enter Book price" value={price} required />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Add Book
                </Button>
            </Form>

            <Books />
        </div>
    )
}

export default AddBook;