import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";


export default function Login() {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { onLoginSubmit } = useContext(UserContext);
    
    return (
        <div id="templatemo_content_right">

            <h1>Login</h1>
            <form method="post" onSubmit={(e) => {onLoginSubmit(e, {email, password})}}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="username"
                        value={email}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
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