import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="my-5">
            <h3 className="text-center">Registation Form</h3>
            <form className="w-50 mx-auto">
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
                </div>
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
                <button type="submit" className="btn btn-primary">Register</button>
                <p>Already have a acount <Link to="/login">LogIn</Link></p>
            </form>
            <div className="text-center">
            <button className="btn btn-primary">Google Sign In</button>
            </div>
        </div>
    );
};

export default Contact;