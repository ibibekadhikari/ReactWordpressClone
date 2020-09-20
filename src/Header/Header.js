import React from 'react';
import './Header.css';

class Header extends React.Component {
    render(){
        return (
    <div className="header">
        <div className="wrapper">
        <div className="headh1"></div>
        <input className="globalSearch" name="search" type="text" value="" maxlength="150" placeholder="Search WordPress.org"></input>
        <ul>
            <li>Showcase</li>
            <li>Themes</li>
            <li>Plugins</li>
            <li>Mobile</li>
            <li>Support</li>
            <li>Get Involved</li>
            <li>About</li>
            <li>Blog</li>
            <li>Hosting</li>
           <button  className="headButton">Get WordPress</button>
        </ul>
    </div>
    </div>    
        );
    }
}

export default Header;