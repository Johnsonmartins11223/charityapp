const Emailpage = () => {
    return (
        <div>
            <div className="container-item1">
                <div className="container-item">
                    <img src="" alt="" />
                    <br />
                    <br />
                    <div className="slide-one">
                        <h2>Sign in</h2>
                        <span class="msg" style="color: red; font-size: 13px;"></span>
                        <br />
                        <input type="email" id="email" name="username" placeholder="Email, phone, or Skype" />
                        <br />
                        <br />
                        <p>No Account <a href><span>Create one!</span></a></p>
                        <p style="color: dodgerblue;">"Sign in with a security key "
                            <img src="" alt="" /></p>
                            <div className="button-item">
                                <p className="next">Next</p>
                            </div>
                    </div>
                    <div className="slide-two">
                        <h2>Sign in</h2>
                        <span class="msg2" style="color: red; font-size: 13px;"></span>
                        <br />
                        <input type="password" id="password" name="password" placeholder="password" />
                        <br />
                        <br />
                        <p>No Account <a href><span>Create one!</span></a></p>
                        <p style="color: dodgerblue;">Other ways to sign in
                            <img src="" alt="" /></p>
                            <div className="button-item">
                                <p className="next">Sign in</p>
                            </div>
                    </div>
                </div>
            </div>
            <div className="container-item1">
                <img src="./images/key.JPG" width="25px"/>
                    <span style="color: #383838;">Sign- in options</span></div>
            <footer>
                <ul>
                    <a href=""><li>Terms of use</li></a>
                    <a href=""><li>Privacy & cookies</li></a>
                    <a href=""><li>...</li></a>

                </ul>
            </footer>
        </div>
    )
}

export default Emailpage