import { Link, useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { editBook, getBookById } from '../../services/bookService';
import { UserContext } from '../../contexts/UserContext';

import styles from './EditForm.module.css';


export default function EditForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState({});
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const userData = useContext(UserContext);
    const token = userData.user && userData.user.accessToken;

    useEffect(() => {
        getBookById(id)
            .then(response => setBook(response));
    }, [id]);


    useEffect(() => {
        setTitle(book.title || 'Loading...');
        setAuthor(book.author || 'Loading...');
        setGenre(book.genre || 'Loading...');
        setYear(book.year || 'Loading...');
        setPrice(book.price || 'Loading...');
        setImageUrl(book.imageUrl || 'Loading...');
        setDescription(book.description || 'Loading...');


    }, [book]);


    async function onSubmit(e, id) {
        e.preventDefault();
        const newBook = { title, author, genre, year, price, imageUrl, description, _id: id, _ownerId: userData.user._id };
        try {
            await editBook(newBook, id, token)

            navigate('/details/' + id)
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <div className={styles.templatemo_content_right}>
            <form method='put' onSubmit={(e) => onSubmit(e, id)}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="genre">Genre</label>
                    <input
                        type="text"
                        name="genre"
                        id="genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <input
                        type="text"
                        name="year"
                        id="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="imageUrl">ImageUrl</label>
                    <input
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        type="text"
                        name="description"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div style={{ padding: '15px' }}>
                    <div className={styles.buy_now_button}>
                        <Link onClick={(e) => onSubmit(e, id)}>Submit</Link>
                    </div>
                    <div className={styles.detail_button}>
                        <Link to={'/details/' + id}>Back</Link>
                    </div>
                </div>
            </form>
        </div>

    );
}