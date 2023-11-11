import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CreateForm() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        title: '',
        author: '',
        genre: '',
        year: '',
        price: '',
        imageUrl: '',
        description: ''
    })

    const onChange = (e)=>{
        e.preventDefault();
        setValues(state=> ({...state, [e.target.name]: e.target.value}))
    }

    async function onSubmit(e) {
        e.preventDefault();       
        await fetch('http://localhost:3030/jsonstore/books', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(values)
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
                        value={values.title}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        value={values.author}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="genre">Genre</label>
                    <input
                        type="text"
                        name="genre"
                        id="genre"
                        value={values.genre}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <input
                        type="text"
                        name="year"
                        id="year"
                        value={values.year}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        value={values.price}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="imageUrl">ImageUrl</label>
                    <input
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        value={values.imageUrl}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        type="text"
                        name="description"
                        id="description"
                        value={values.description}
                        onChange={onChange}
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