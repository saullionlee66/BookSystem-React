import React,{useState,useEffect,createContext}from 'react'
import axois from 'axios'

export const BookContext = createContext();

export function BookProvider(props) {

    const [books, setBooks] = useState([]);
        useEffect(()=>{
            axois.get("http://localhost:5000/").
            then(res =>{
                const data = res.data;
                setBooks(data);
                books.map(book=>{console.log(book)})
            }).catch(err =>{
                console.log(err);
            })
        },[setBooks])
    return (
        

        <BookContext.Provider value={[books, setBooks]}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContext
