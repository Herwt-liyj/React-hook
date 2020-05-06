import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div className='content-wrap'>
                <h2>User 内容</h2>
                <div className='i18n-wrap'>
                    <h3>User</h3>
                    <ul>
                        <li>中文</li>
                        <li>英文</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default User;