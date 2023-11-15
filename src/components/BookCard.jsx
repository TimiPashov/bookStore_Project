/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
export default function BookCard({
    book,
}) {
    const userData = useContext(UserContext);
    const isOwner = userData.user && userData.user._id === book._ownerId;
    const isUser = userData.user;


    return (
        <div className="templatemo_product_box">
            <h1>
                {book.title}
            </h1>
            <img src={book.imageUrl} alt="image" />
            <div className="product_info">
                <p>{book.description}</p>
                <h3>${book.price}</h3>
                {isUser && !isOwner ? <div className="buy_now_button">
                    <a href="subpage.html">Buy Now</a>
                </div> : null}
                <div className="detail_button">
                    <Link to={`/details/${book._id}`}>Details</Link>
                </div>
            </div>
            <div className="cleaner">&nbsp;</div>
        </div>
    )
}