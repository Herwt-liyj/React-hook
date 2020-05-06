import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavList extends Component {
    render() {
        return (
            <div className="nav-list">
                <h3>Demo React Hook Nav list for name </h3>
                <ul>
                    <li><NavLink to='/'>home</NavLink></li>
                    <li><NavLink to='/content'>content</NavLink></li>
                    <li><NavLink to='/home'>home</NavLink></li>
                    <li><NavLink to='/user'>user</NavLink></li>
                    <li><NavLink to='/detail'>detail</NavLink></li>
                    <li><NavLink to='/form'>form</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default NavList