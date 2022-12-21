import './login.css'
import { useContext, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../context/Context';
import api from '../../config/api';


export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const [error, setError] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await api.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    className="loginInput"
                    placeholder="Enter your username..."
                    ref={userRef}
                />
                <label>Password</label>
                <input
                    type="password"
                    className="loginInput"
                    placeholder="Enter your password..."
                    ref={passwordRef}
                />
                <button className="p-2 m-6 mt-5 text-white bg-blue-500 border-none cursor-pointer hover:bg-blue-300" type="submit" disabled={isFetching}>
                    Login
                </button>
            </form>
            <button className="absolute p-2 m-6 mt-5 text-white bg-blue-500 border-none cursor-pointer hover:bg-blue-300 top-14 right-5">
                <Link className="text-white" to="/register">
                    Register
                </Link>
            </button>
            {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
        </div>
    );
}