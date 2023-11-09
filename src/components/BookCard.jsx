export default function BookCard({
    title,
    author,
    description,
    imageUrl
}) {
    return (
        <div className="templatemo_product_box">
            <h1>
                {title} <span>(by {author})</span>
            </h1>
            <img src={imageUrl} alt="image" />
            <div className="product_info">
                <p>{description}</p>
                <h3>$35</h3>
                <div className="buy_now_button">
                    <a href="subpage.html">Buy Now</a>
                </div>
                <div className="detail_button">
                    <a href="subpage.html">Detail</a>
                </div>
            </div>
            <div className="cleaner">&nbsp;</div>
        </div>
    )
}