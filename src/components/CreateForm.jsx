import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

export default function CreateForm() {
    const navigate = useNavigate();
    const { formValues, onChangeHandler } = useForm({
        title: '',
        author: '',
        genre: '',
        year: '',
        price: '',
        imageUrl: '',
        description: ''
    })



    async function onSubmit(e) {
        e.preventDefault();

        await fetch('http://localhost:3030/jsonstore/books', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(formValues)
        });
        navigate('/')
    }

    return (

        <div id="templatemo_content_right">

            <h1>Create new book</h1>
            <form onSubmit={onSubmit}>
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
                    <div className="buy_now_button">
                        <button type='submit'>Submit</button>
                    </div>
                    <div className="detail_button">
                        <Link to={'/'}>Back</Link>
                    </div>
                </div>
            </form>
        </div>

    );
}