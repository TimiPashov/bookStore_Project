import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Details() {
    const [book, setBook] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();


    async function onDelete(id) {
        fetch('http://localhost:3030/jsonstore/books/' + id, {
            method: 'DELETE'
        })
        
        navigate('/');
    }

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/books/' + id)
            .then(response => response.json())
            .then(result => setBook(result));
    }, [id]);


    return (
        <div id="templatemo_content_right">

            <h1>{book.title}</h1>
            <div className="image_panel"><img src={book.imageUrl} alt="CSS Template" width="100" height="150" /></div>
            <h2>Book Details</h2>
            <ul>
                <li>Author: {book.author}</li>
                <li>Year: 2024</li>
                <li>Pages: 498</li>
                <li>Price:</li>
            </ul>

            <p>{book.description}</p>



            <div className="cleaner_with_height">&nbsp;</div>

            <div className="buy_now_button">
                <Link to="/">Back</Link>
            </div>
            <div className="detail_button">
                <a href='javascript:void(0)' onClick={()=>onDelete(book._id)}>Delete</a>
            </div>

        </div>
    )
}