import { Link } from "react-router-dom";
import styles from './Footer.module.css';
export default function Footer() {
    return (
        <div id="templatemo_footer" className={styles.templatemo_footer}>
            <Link to="/">Home</Link> | <Link to="/search">Search</Link> |{" "}
            <Link to="/">Books</Link> | <Link to="#">New Releases</Link> |{" "}
            <Link to="/FAQs">FAQs</Link> | <Link to="/contacts">Contact Us</Link>
            <br />
            Copyright © 2024{" "}
            <Link to="#">
                <strong>Your Company Name</strong>
            </Link>
            {/* Credit: www.templatemo.com */}{" "}
        </div>
    );
}