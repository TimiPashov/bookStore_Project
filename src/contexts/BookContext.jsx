/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from "react";
import { getAllBooks } from "../services/bookService";

const BookContext = createContext();

export function BookProvider({ children }) {
    const [books, setBooks] = useState([]);


    useEffect(() => {
        getAllBooks().then(books => setBooks(books));
    }, []);

    return (
        <BookContext.Provider value={{ books, setBooks }}>
            {children}
        </BookContext.Provider>
    )
}

export function useBookContext() {
    const context = useContext(BookContext);
    return context;
}