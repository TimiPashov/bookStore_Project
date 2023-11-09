export default function CreateForm() {

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newBook = Object.fromEntries(formData);

        const response = await fetch('http://localhost:3030/jsonstore/books' ,{
            headers:{
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(newBook)
        });
        return response
    }

    return (
        <>
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
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" />
                </div>
                <div>
                    <input type="submit" value="Register" />
                </div>
            </form>
        </>
    );
}