import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className=" sticky-top">
            <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link to="/home" className="navbar-brand text-bold">EDICON</Link>
                <div className="text-white header-menu">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/doctors">Doctors</Link>
                    <Link to="/price">Price Table</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <form className="d-flex">
                {user.email ? <Link to="/login"><button onClick={logOut} className="btn btn-primary">LogOut</button></Link>
                :
                <Link to="/login"><button className="btn btn-primary">LogIn</button></Link>}
                <p className="text-white p-2">{user.displayName}</p>
                </form>
            </div>
            </nav>
        </div>
    );
};

export default Header;