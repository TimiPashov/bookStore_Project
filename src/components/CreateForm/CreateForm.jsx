import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { createBook } from '../../services/bookService';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

import styles from './CreateForm.module.css';
import { createHandler } from '../../handlers/handlers';

export default function CreateForm() {
    const navigate = useNavigate();
    const userData = useContext(UserContext);
    const [error, setError] = useState(false)
    const token = userData.user && userData.user.accessToken;
    const { formValues, onChangeHandler, onSubmit } = useForm({
        title: '',
        author: '',
        genre: '',
        year: '',
        price: '',
        imageUrl: '',
        description: ''
    }, async (values) => {
        try {
            await createHandler(values, token);
            navigate('/');
        } catch (err) {
            setError(err.message)
        }

    });
    return (
        <div id="templatemo_content_right" className={styles.templatemo_content_right}>

            <h1>Create new book</h1>
            <form onSubmit={(e) => onSubmit(e)}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={formValues.title}
                        onChange={onChangeHandler}
                    />
                </div>
                {error && <div className={styles.error}>
                    <p>{error}</p>
                </div>}
                <div>
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        value={formValues.author}
                        onChange={onChangeHandler}
                    />
                </div>
                {error && <div className={styles.error}>
                    <p>{error}</p>
                </div>}
                <div>
                    <label htmlFor="genre">Genre</label>
                    <input
                        type="text"
                        name="genre"
                        id="genre"
                        value={formValues.genre}
                        onChange={onChangeHandler}
                    />
                </div>
                {error && <div className={styles.error}>
                    <p>{error}</p>
                </div>}
                <div>
                    <label htmlFor="year">Year</label>
                    <input
                        type="text"
                        name="year"
                        id="year"
                        value={formValues.year}
                        onChange={onChangeHandler}
                    />
                </div>
                {error && <div className={styles.error}>
                    <p>{error}</p>
                </div>}
                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        value={formValues.price}
                        onChange={onChangeHandler}
                    />
                </div>
                {error && <div className={styles.error}>
                    <p>{error}</p>
                </div>}
                <div>
                    <label htmlFor="imageUrl">ImageUrl</label>
                    <input
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        value={formValues.imageUrl}
                        onChange={onChangeHandler}
                    />
                </div>
                {error && <div className={styles.error}>
                    <p>{error}</p>
                </div>}
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        type="text"
                        name="description"
                        id="description"
                        value={formValues.description}
                        onChange={onChangeHandler}
                    />
                </div>

                <div style={{ padding: '15px' }}>
                    <div className={styles.buy_now_button}>
                        <Link onClick={(e) => onSubmit(e)}>Submit</Link>
                    </div>
                    <div className={styles.detail_button}>
                        <Link to={'/'}>Back</Link>
                    </div>
                </div>
            </form>
        </div>

    );
}