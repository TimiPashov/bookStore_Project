import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');
    const { onRegisterSubmit } = useContext(UserContext);


    return (
        <div id="templatemo_content_right">

            <h1>Register</h1>
            <form method="post" onSubmit={(e) => { onRegisterSubmit(e, { email, password }) }}>
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