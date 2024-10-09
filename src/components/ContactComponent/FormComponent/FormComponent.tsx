import React from 'react';
import PurpleButtonComponent from '../../PurpleButtonComponent/PurpleButtonComponent';
import './FormComponent.css';

const FormComponent: React.FC = () => {
    return (
        <form className="form-component">
            <div className="input-container">
                <div className="input-icon">
                    <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </div>
                <input type="text" placeholder="Name" className="form-input" />
            </div>

            <div className="input-container">
                <div className="input-icon">
                    <svg viewBox="0 0 24 24">
                        <rect x="4" y="4" width="16" height="16" />
                    </svg>
                </div>
                <input type="email" placeholder="E-mail" className="form-input" />
            </div>

            <div className="input-container">
                <div className="input-icon">
                    <svg viewBox="0 0 24 24">
                        <polygon points="12,2 22,22 2,22" />
                    </svg>
                </div>
                <input type="text" placeholder="Message" className="form-input" />
            </div>

            <PurpleButtonComponent onClick={() => { /* Handle click event */ }}>
                Submit
            </PurpleButtonComponent>
        </form>
    );
};

export default FormComponent;
