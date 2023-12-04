
import { useBookContext } from "../../contexts/BookContext";
import { purchaseHandler } from "../../handlers/handlers";
// import { getAllBooks } from "../../services/bookService";
import { getAllpurchases } from "../../services/purchaseService";
import BookCard from "../BookCard/BookCard";
import styles from './Catalog.module.css';
import { useEffect, useState } from "react";

export default function Catalog() {
  const [result, setResult] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const { books } = useBookContext();

  useEffect(() => {
    setResult(books)
    setLoading(false);
  }, [books]);
  
  useEffect(() => {
    getAllpurchases()
      .then(result => {
        setPurchases(result)
      })
  }, []);
  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className={styles.templatemo_content_right}>
      {Object.values(result).map(b => <BookCard key={b._id} book={b} purchases={purchases} addPurchase={purchaseHandler} setPurchases={setPurchases} />)}
    </div>
  );
}
