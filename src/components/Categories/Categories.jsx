import { Link } from 'react-router-dom';
import styles from './Categories.module.css'


export default function Categories() {
  return (
    <div className={styles.templatemo_content_left}>
      <div className={styles.templatemo_content_left_section}>
        <h1>Categories</h1>
        <ul>
          <li>
            <Link to="/search/adventure">Adventure stories</Link>
          </li>
          <li>
            <Link to="/search/classic">Classics</Link>
          </li>
          <li>
            <Link to="/search/crime">Crime</Link>
          </li>
          <li>
            <Link to="search/fables">Fairy tales, fables, and folk tales</Link>
          </li>
          <li>
            <Link to="/search/fantasy">Fantasy</Link>
          </li>
          <li>
            <Link to="/search/history">Historical</Link>
          </li>
          <li>
            <Link to="/search/horror">Horror</Link>
          </li>
          <li>
            <Link to="/search/humour">Humour and satire</Link>
          </li>
          <li>
            <Link to="/search/mystery">Mystery</Link>
          </li>
        </ul>
      </div>
      <div className={styles.templatemo_content_left_section}>
        <h1>Bestsellers</h1>
        <ul>
          <li>
            <a href="#">Vestibulum ullamcorper</a>
          </li>
          <li>
            <a href="#">Maece nas metus</a>
          </li>
          <li>
            <a href="#">In sed risus ac feli</a>
          </li>
          <li>
            <a href="#">Praesent mattis varius</a>
          </li>
          <li>
            <a href="#">Maece nas metus</a>
          </li>
          <li>
            <a href="#">In sed risus ac feli</a>
          </li>
          <li>
            <a href="#">Flash Templates</a>
          </li>
          <li>
            <a href="#">CSS Templates</a>
          </li>
          <li>
            <a href="#">Web Design</a>
          </li>
          <li>
            <a href="http://www.photovaco.com" target="_parent">
              Free Photos
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.templatemo_content_left_section}>
        <a href="http://validator.w3.org/check?uri=referer">
          <img
            style={{ border: 0, width: 88, height: 31 }}
            src="http://www.w3.org/Icons/valid-xhtml10"
            alt="Valid XHTML 1.0 Transitional"
            width={88}
            height={31}
            // vspace={8}
            border={0}
          />
        </a>
        <a href="http://jigsaw.w3.org/css-validator/check/referer">
          <img
            style={{ border: 0, width: 88, height: 31 }}
            src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
            alt="Valid CSS!"
            // vspace={8}
            border={0}
          />
        </a>
      </div>
    </div>
  );
}