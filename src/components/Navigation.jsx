import React from 'react';
import classes from './Navigation.module.css';
const Navigation = function () {
    return (
        <nav className="nav">
            <div className='item'>
                <a href="#">Profile</a>
            </div>
            <div className='item'>
                <a href="#">Messages</a>
            </div>
            <div className='item'>
                <a href="#">News</a>
            </div>
            <div className='item'>
                <a href="#">Music</a>
            </div>
            <div className='item'>
                <a href="#"> Settings</a>
            </div>
        </nav>);
}

export default Navigation;