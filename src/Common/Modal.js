import React from 'react';
import ButtonBack from './ButtonBack';
import './Modal.css';

function Modal(props) {
    const modalClass = props.isOpen ? "Modal" : "Modal--closed";

    return (
        <div className={modalClass}>
            <header className="Modal-header bg-light">
                <ButtonBack onClick={props.onExit} />
                <div>
                    {props.heading}
                </div>
            </header>
            <div className="Modal-body">
                {props.children}
            </div>
        </div>
    );
}

export default Modal;
