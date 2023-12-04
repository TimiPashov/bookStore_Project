import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { deleteBook } from '../../services/bookService';
import { UserContext } from '../../contexts/UserContext';

import { getAllpurchases } from '../../services/purchaseService';
import { useBookContext } from '../../contexts/BookContext';
import styles from './Details.module.css';

export default function Details() {
    const { books, setBooks } = useBookContext();
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);
    const [purchases, setPurchases] = useState([]);
    
    const { id } = useParams();
    const navigate = useNavigate();
    const userData = useContext(UserContext);
    const result = books.filter(b => b._id === id)[0];
    const isOwner = userData.user && userData.user._id === result._ownerId;
    useEffect(() => {
        getAllpurchases()
        .then(result => setPurchases(result));
    }, [])
    
    useEffect(() => {
        setBook(result);
        setLoading(false);
    }, [result]);

    async function onDelete(id) {
        await deleteBook(id, userData.user.accessToken);
        setBooks(books.filter(b => b._id !== id));
        navigate('/');
    }

    if (loading) {
        return <h1>Loading...</h1>
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
                <li>Purchased: {purchases.filter(p => p.bookId === id).length} times</li>
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