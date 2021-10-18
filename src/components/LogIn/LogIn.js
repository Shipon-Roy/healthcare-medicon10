import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const LogIn = () => {
    const {error, signInUsingGoogle, signInUsingGithub} = useAuth()
    return (
        <div className="my-5">
            <h3 className="text-center">Log In</h3>
            <form className="w-50 mx-auto">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">LogIn</button>
                <p>Are you new <Link to="/register">create a acount</Link></p>
            </form>
            <p>{error}</p>
            <div className="text-center">
            <button onClick={signInUsingGoogle} className="btn btn-primary mx-3">Google Sign In</button>
            <button onClick={signInUsingGithub} className="btn btn-primary">Github Sign In</button>
            </div>
        </div>
    );
};

export default LogIn;