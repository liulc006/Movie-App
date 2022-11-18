import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Nav = () => {
    const {auth} = useSelector(state=>state);
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/movies'>Movie</Link>
            { auth.id ? <Link to='/profile'>Profile</Link> : <Link to='/login'>Login</Link>}
        </nav>
    );
};

export default Nav;