import React from 'react';
import '../style/sidebar.css';

export const Sidebar = () => {
    return (
        <div id="sidebar" data-testid='sidebar'>
            <div id="nav">
                <h1>Prenetics™</h1>
                <menu data-testid='sidebar-link-list'>
                    <li className="active">Patient Management</li>
                    <li>Result Upload</li>
                    <li>Kit Activation</li>
                </menu>
            </div>

            <div id="status">
                <label className='light'>Logged in as</label>
                <br/>
                <label>peter+blacksheephk@prenetics.com</label>
                <hr/>
                <a id="logout">Logout</a>
            </div>
        </div>
    );
}
