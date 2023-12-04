import { Link, useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { editBook, getBookById } from '../../services/bookService';
import { UserContext } from '../../contexts/UserContext';

import styles from './EditForm.module.css';
import { useBookContext } from '../../contexts/BookContext';


export default function EditForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { books, setBooks } = useBookContext();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
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
            .then(response => {
                setBook(response)
                setLoading(false)
            });
    }, [id]);


    useEffect(() => {
        setTitle(book.title || '');
        setAuthor(book.author || '');
        setGenre(book.genre || '');
        setYear(book.year || '');
        setPrice(book.price || '');
        setImageUrl(book.imageUrl || '');
        setDescription(book.description || '');


    }, [book]);


    async function onSubmit(e, id) {
        e.preventDefault();
        const newBook = { title, author, genre, year, price, imageUrl, description, _id: id, _ownerId: userData.user._id };
        try {
            if (Object.values(newBook).some(x => x === '')) {
                const err = {};
                for (let field of Object.entries(newBook)) {
                    err[field[0]] = field[1];
                }
                throw err;
            }
            const response = await editBook(newBook, id, token)
            const result = books.map(b => {
                if (b._id === id) {
                    return response;
                }
                return b;
            });
            setBooks(result);
            navigate('/details/' + id)
        } catch (err) {
            console.log(err)
            setError(err)
        }

    }

    if (loading) {
        return <h1>Loading...</h1>
    }
    return (

        < div className={styles.templatemo_content_right} >
            <form method='put' onSubmit={(e) => onSubmit(e, id)}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={error?.title == '' ? { border: '1px solid red' } : null}
                    />
                </div>
                {error?.title === '' && <div className={styles.error}>
                    <p>Title is required</p>
                </div>}
                <div>
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        style={error?.author == '' ? { border: '1px solid red' } : null}
                    />
                </div>
                {error?.author === '' && <div className={styles.error}>
                    <p>Author is required</p>
                </div>}
                <div>
                    <label htmlFor="genre">Genre</label>
                    <input
                        type="text"
                        name="genre"
                        id="genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        style={error?.genre == '' ? { border: '1px solid red' } : null}
                    />
                </div>
                {error?.genre === '' && <div className={styles.error}>
                    <p>Genre is required</p>
                </div>}
                <div>
                    <label htmlFor="year">Year</label>
                    <input
                        type="text"
                        name="year"
                        id="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        style={error?.year == '' ? { border: '1px solid red' } : null}
                    />
                </div>
                {error?.year === '' && <div className={styles.error}>
                    <p>Year is required</p>
                </div>}
                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        style={error?.price == '' ? { border: '1px solid red' } : null}
                    />
                </div>
                {error?.price === '' && <div className={styles.error}>
                    <p>Price is required</p>
                </div>}
                <div>
                    <label htmlFor="imageUrl">ImageUrl</label>
                    <input
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        style={error?.imageUrl == '' ? { border: '1px solid red' } : null}
                    />
                </div>
                {error?.imageUrl === '' && <div className={styles.error}>
                    <p>ImageURl is required</p>
                </div>}
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        type="text"
                        name="description"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={error?.description == '' ? { border: '1px solid red' } : null}
                    />
                </div>
                {error?.description === '' && <div className={styles.error}>
                    <p>Description is required</p>
                </div>}
                <div style={{ padding: '15px' }}>
                    <div className={styles.buy_now_button}>
                        <Link onClick={(e) => onSubmit(e, id)}>Submit</Link>
                    </div>
                    <div className={styles.detail_button}>
                        <Link to={'/details/' + id}>Back</Link>
                    </div>
                </div>
            </form>
        </div >

    );
}