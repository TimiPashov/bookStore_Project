import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import { getAllpurchases } from '../../services/purchaseService';
import styles from './User.module.css';

export function User() {
    const userData = useContext(UserContext);
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        getAllpurchases()
            .then(result => {
                setPurchases(result)
            })
    }, [])
    return (
        <div id="templatemo_content_right" className={styles.templatemo_content_right}>

            <h1>{`${userData.user.email}'s profile page`}</h1>

            <h2>{`You have  ${purchases.filter(p => p._ownerId === userData.user._id).length} books in your collection`}</h2>
          





            <div className={styles.detail_button}>
                <Link to="/">Back</Link>
            </div>

            {/* <div className={styles.cleaner_with_height}>&nbsp;</div> */}

        </div>
    )
}