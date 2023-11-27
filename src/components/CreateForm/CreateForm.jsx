import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
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
            setError(err)
        }

    });
    if (!token) {
        return <Navigate to="/login" />
    }
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
                        value={formValues.author}
                        onChange={onChangeHandler}
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
                        value={formValues.genre}
                        onChange={onChangeHandler}
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
                        value={formValues.year}
                        onChange={onChangeHandler}
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
                        value={formValues.price}
                        onChange={onChangeHandler}
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
                        value={formValues.imageUrl}
                        onChange={onChangeHandler}
                        style={error?.imageUrl == '' ? { border: '1px solid red' } : null}
                    />
                </div>
                {error?.imageUrl === '' && <div className={styles.error}>
                    <p>ImageURL is required</p>
                </div>}
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        type="text"
                        name="description"
                        id="description"
                        value={formValues.description}
                        onChange={onChangeHandler}
                        style={error?.description == '' ? { border: '1px solid red' } : null}
                    />
                </div>
                {error?.description === '' && <div className={styles.error}>
                    <p>Description is required</p>
                </div>}

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