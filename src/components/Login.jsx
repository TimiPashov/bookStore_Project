import { useState } from "react";
import { useUserContext } from "../contexts/UserContext";
import styles from './Login.module.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { onLoginSubmit } = useUserContext();
    const [error, setError] = useState(false);

    return (
        <div id="templatemo_content_right">

            <h1>Login</h1>
            <form method="post" onSubmit={(e) => { onLoginSubmit(e, { email, password }, setError, setEmail, setPassword) }}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="username"
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
                <div style={{ padding: '15px' }}>
                    <div className="buy_now_button">
                        <button type='submit'>Submit</button>
                    </div>
                    <div className="detail_button">
                        <a to={'/'}>Back</a>
                    </div>
                </div>
            </form>
        </div>

    );
}