/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import { useEffect, useState } from 'react';

import styles from './BookCard.module.css';
export default function BookCard({
    book,
    purchases,
    addPurchase
}) {
    const [hasPurhcased, setHasPurchased] = useState(false)
    const userData = useUserContext();
    const isOwner = userData.user && userData.user._id === book._ownerId;
    const isUser = userData.user;
    const currBookPurchases = purchases && purchases.filter(p => p.bookId === book._id);
    const purchased = userData.user ? currBookPurchases?.some(p => p._ownerId === userData.user._id) : false

    useEffect(() => {
        setHasPurchased(purchased)
    }, [purchased])

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
                {isUser && !isOwner && !hasPurhcased ? <div className={styles.buy_now_button}>
                    <Link onClick={() => {
                        addPurchase(purchases, setHasPurchased, { bookId: book._id }, userData.user.accessToken)
                    }}>Buy Now</Link>
                </div> : null}
                {hasPurhcased && <div className={styles.buy_now_button}>
                    <Link>Owned</Link>
                </div>}
            </div>
            <div className={styles.cleaner}>&nbsp;</div>
        </div>
    )
}