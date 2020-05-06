import React, { Component } from 'react';
import NavList from '../navList';

class Home extends Component {
    render() {
        return (
            <div className='content-wrap'>
                <h2>Home 内容</h2>
                <div className='i18n-wrap'>
                    <h3>Home</h3>
                    <ul>
                        <li>中文</li>
                        <li>英文</li>
                    </ul>
                </div>
                <NavList />
            </div>
        )
    }
}

export default Home;