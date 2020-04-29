import React, { Component } from 'react';
import TabOne from './tabOne';

class Content extends Component {
    render() {
        return (
            <div className='content-wrap'>
                <h2>Content 内容</h2>
                <div className='i18n-wrap'>
                    <h3>国际化状态</h3>
                    <ul>
                        <li>中文</li>
                        <li>英文</li>
                    </ul>
                </div>
                <div className="tab-wrap">
                    <ul>
                        <li>内容一</li>
                        <li>内容二</li>
                        <li>内容三</li>
                    </ul>
                </div>
                <div className='tab-content'>
                        <TabOne />
                </div>
            </div>
        )
    }
}

export default Content;