import { Link } from 'react-router-dom';
export default function BookCard({
    book,
}) {
    

    return (
        <div className="templatemo_product_box">
            <h1>
                {book.title}
            </h1>
            <img src={book.imageUrl} alt="image" />
            <div className="product_info">
                <p>{book.description}</p>
                <h3>${book.price}</h3>
                <div className="buy_now_button">
                    <a href="subpage.html">Buy Now</a>
                </div>
                <div className="detail_button">
                    <Link to={`/details/${book._id}`}>Details</Link>
                </div>
            </div>
            <div className="cleaner">&nbsp;</div>
        </div>
    )
}