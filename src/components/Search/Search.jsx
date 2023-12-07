
import { useNavigate, useParams } from "react-router-dom";
import { useBookContext } from "../../contexts/BookContext";
// import { getAllBooks } from "../../services/bookService";
import BookCard from "../BookCard/BookCard";
import styles from './Search.module.css';
import { useEffect, useState } from "react";


export default function Search() {
    const { books } = useBookContext();
    const { query } = useParams();
    const [search, setSearch] = useState(query || '');
    const [result, setResult] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setResult(books.filter((b) => Object.values(b).some(v => (v.toString().toLowerCase()).includes(search.toString().toLowerCase())) && b));
    }, [books, query])

    function onSearch(e, search) {
        e.preventDefault()
        navigate(`/search/${search}`)
        const filteredBooks = books.filter((b) => Object.values(b).some(v => (v.toString().toLowerCase()).includes(search.toString().toLowerCase())) && b);
        setResult(filteredBooks);
    }

    return (
        <>
            <form onSubmit={(e) => onSearch(e, search)}>
                <input type="text"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..." />
                <button>Search</button>
            </form>
            <div className={styles.templatemo_content_right}>
                {Object.values(result).map(b => <BookCard key={b._id} book={b} />)}
            </div>
        </>
    );
}
