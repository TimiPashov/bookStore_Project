import { Link } from 'react-router-dom';
export default function BookCard({
    title,
    description,
    imageUrl,
    _id,

}) {
    
    return (
        <div className="templatemo_product_box">
            <h1>
                {title}
            </h1>
            <img src={imageUrl} alt="image" />
            <div className="product_info">
                <p>{description}</p>
                <h3>$35</h3>
                <div className="buy_now_button">
                    <a href="subpage.html">Buy Now</a>
                </div>
                <div className="detail_button">
                    <Link to={`/details/${_id}`}>Details</Link>
                </div>
            </div>
            <div className="cleaner">&nbsp;</div>
        </div>
    )
}