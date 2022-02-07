import React from 'react';
import '../style/topnav.css'

export const TopNav = () => {
    return (
        <div id="topnav" data-testid='top-nav'>
            <h2>Patient Management</h2>

            <div id='right-side'>
                <label className='light'>Your Organisation:</label>
                <label>BlackSheep</label>
            </div>
        </div>
    );
}