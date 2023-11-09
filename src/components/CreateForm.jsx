import { Link, useNavigate } from 'react-router-dom';
import '../components/CreateForm.module.css';

export default function CreateForm() {
    const navigate = useNavigate();

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newBook = Object.fromEntries(formData);

        const response = await fetch('http://localhost:3030/jsonstore/books', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(newBook)
        });
        navigate('/')
        return response
    }

    return (

        <div id="templatemo_content_right">

            <h1>Form</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" />
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" id="author" />
                </div>
                <div>
                    <label htmlFor="imageUrl">ImageUrl</label>
                    <input type="text" name="imageUrl" id="imageUrl" />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" id="description" />
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