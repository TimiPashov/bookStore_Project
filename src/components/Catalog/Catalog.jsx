
import BookCard from "../BookCard/BookCard";
import styles from './Catalog.module.css';
import { useBookContext } from "../../contexts/BookContext";
export default function Catalog() {
 
  const { books } = useBookContext();

 
  return (
    <div className={styles.templatemo_content_right}>
      {Object.values(books).map(b => <BookCard key={b._id} book={b} />)}
    </div>
  );
}
