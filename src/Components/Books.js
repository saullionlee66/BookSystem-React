import React, {useContext} from 'react'
import {BookContext} from './BookContext'
import Book from './Book'

function Books() {
    const [books, setBooks] = useContext(BookContext);
    return (
        <div className="books">
            {books.map( (book) => (
                 <Book key={book.id} name={book.name} id={book.id} price={book.price} />
            ))}
        </div>
    )
}

export default Books
