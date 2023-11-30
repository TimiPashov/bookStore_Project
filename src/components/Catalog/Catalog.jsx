
import { getAllBooks } from "../../services/bookService";
import BookCard from "../BookCard/BookCard";
import styles from './Catalog.module.css';
import { useEffect, useState } from "react";

export default function Catalog() {
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllBooks()
      .then(result => {
        setBooks(result)
        setLoading(false)
      })
  }, [])
  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className={styles.templatemo_content_right}>
      {Object.values(books).map(b => <BookCard key={b._id} book={b} />)}
    </div>
  );
}
