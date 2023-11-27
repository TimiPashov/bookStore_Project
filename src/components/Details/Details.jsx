import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { deleteBook } from '../../services/bookService';
import { UserContext } from '../../contexts/UserContext';

import styles from './Details.module.css';

export default function Details() {
    const [book, setBook] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const userData = useContext(UserContext);
    const isOwner = userData.user && userData.user._id === book._ownerId;


    useEffect(() => {
        fetch('http://localhost:3030/data/books/' + id)
            .then(response => response.json())
            .then(result => setBook(result));
    }, [id]);

    async function onDelete(id) {
        await deleteBook(id, userData.user.accessToken);
        navigate('/');
    }

    return (
        <div id="templatemo_content_right" className={styles.templatemo_content_right}>

            <h1>{book.title}</h1>
            <div className={styles.image_panel}><img src={book.imageUrl} alt="CSS Template" width="100" height="150" /></div>
            <h2>Book Details</h2>
            <ul>
                <li>Author: {book.author}</li>
                <li>Year: {book.year}</li>
                <li>Genre: {book.genre}</li>
                <li>Price: {book.price}</li>
            </ul>

            <p>{book.description}</p>





            <div className={styles.detail_button}>
                <Link to="/">Back</Link>
            </div>
            {isOwner && <>
                <div className={styles.buy_now_button}>
                    <Link to={`/edit/${book._id}`}>Edit</Link>
                </div>
                <div className={styles.delete_button}>
                    <Link onClick={() => onDelete(book._id)}>Delete</Link>
                </div>
            </>
            }

            {/* <div className={styles.cleaner_with_height}>&nbsp;</div> */}

        </div>
    )
}