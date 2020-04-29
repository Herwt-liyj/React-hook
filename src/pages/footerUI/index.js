import React, { Component } from 'react';
import './index.css';

class FooterUI extends Component {
    render() {
        return (
            <div className='footer'>
                <ul>
                    <li>首页</li>
                    <li>购卡</li>
                    <li>我的</li>
                </ul>
            </div>
        )
    }
}

export default FooterUI;