import React from 'react';
import './Landing.css';

function Landing(props) {
    return (
        <div className="Landing">
            <span className="Landing-title txt-theme">
                macrotrac
                <div className="Landing-iconContainer">
                    <span className="Landing-icon ion-fork"></span>
                </div>
            </span>
        </div>
    );
}

export default Landing;
