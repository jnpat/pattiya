import React, { useState } from "react";
import { Link } from 'react-router-dom'
// import "../css/Header.css";

function Header() {

    const [show, setShow] = useState(true);

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#8C9086" }} >
            <div className="container">
                <Link className="navbar-brand text-dark" to={'/'}>Welcome,</Link>
                <button className="navbar-toggler border-dark text-dark" onClick={() => setShow(!show)}>
                    {show ? (<i class="fas fa-bars"></i>)
                        :
                        (<i class="fas fa-times"></i>)}
                </button>
                <div className={show ? "collapse navbar-collapse" : "collapse navbar-collapse active"}>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to={'home'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to={'/info'}>Personal Info.</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to={'/background'}>Background</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;