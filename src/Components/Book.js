import React from 'react'
// import '../App.css'
import {Table} from 'react-bootstrap'
function Book({name,id,price}) {
    return (
        <div className="book">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Book Name</th>
                    <th>Price(CAD)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{price}</td>
                    </tr>
                </tbody>
            </Table>

        </div>
    )
}

export default Book
 