import React,{useState,useEffect,createContext}from 'react'
import axois from 'axios'
import {API} from '../Helpers/API'
export const BookContext = createContext();

export function BookProvider(props) {

    const [books, setBooks] = useState([]);

        useEffect(() => {
            axois.get(API.api)
            .then(res =>{
                const data = res.data;
                return setBooks(data);
            }).catch(err =>{
                console.log(err);
            })
        },[])
        
    const value = {books, setBooks}
    return (
        

        <BookContext.Provider value={value}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContext
