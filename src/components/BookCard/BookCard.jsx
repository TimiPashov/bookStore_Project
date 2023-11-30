/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

import styles from './BookCard.module.css';
export default function BookCard({
    book,
}) {
    const userData = useContext(UserContext);
    const isOwner = userData.user && userData.user._id === book._ownerId;
    const isUser = userData.user;


    return (
        <div className={styles.templatemo_product_box}>
            <h1>
                {book.title}
            </h1>
            <img src={book.imageUrl} alt="image" />
            <div className={styles.product_info}>
                <p>{book.description.slice(0, 50) + (book.description.slice(0, 50).length < 50 ? '' : '...')}</p>
                <h3>${book.price}</h3>
                <div className={styles.detail_button}>
                    <Link to={`/details/${book._id}`}>Details</Link>
                </div>
                {isUser && !isOwner ? <div className={styles.buy_now_button}>
                    <a href="subpage.html">Buy Now</a>
                </div> : null}
            </div>
            <div className={styles.cleaner}>&nbsp;</div>
        </div>
    )
}