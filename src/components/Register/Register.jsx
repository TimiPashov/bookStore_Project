import { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import styles from './Register.module.css'
import { Link } from "react-router-dom";



export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');
    const { onRegisterSubmit } = useUserContext();
    const [error, setError] = useState(false)

    return (
        <div id="templatemo_content_right" className={styles.templatemo_content_right}>

            <h1>Register</h1>
            <form method="post" onSubmit={(e) => { onRegisterSubmit(e, { email, password, repass }, { setError, setEmail, setPassword, setRepass }) }}>
                <div>
                    <label htmlFor="email">email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {error && <div className={styles.error}>
                    <p>{error}</p>
                </div>}
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <div className={styles.error}>
                    <p>{error}</p>
                </div>}
                <div>
                    <label htmlFor="repass">Repeat password</label>
                    <input
                        type="password"
                        name="repass"
                        id="repass"
                        value={repass}
                        onChange={(e) => setRepass(e.target.value)}
                    />
                </div>
                {error && <div className={styles.error}>
                    <p>{error}</p>
                </div>}

                <div style={{ padding: '15px' }}>
                    <div className={styles.buy_now_button}>
                        <Link onClick={(e) => { onRegisterSubmit(e, { email, password, repass }, { setError, setEmail, setPassword, setRepass }) }}>Submit</Link>
                    </div>
                    <div className={styles.detail_button}>
                        <Link to={'/'}>Back</Link>
                    </div>
                </div>
            </form>
        </div>

    );
}