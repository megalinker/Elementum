import React, { useState } from 'react';
import PurpleButtonComponent from '../../PurpleButtonComponent/PurpleButtonComponent';
import './FormComponent.css';

const FormComponent: React.FC = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        fetch('https://dotest.konecta.one/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        })
            .then(response => {
                if (response.ok) {
                    setName('');
                    setEmail('');
                    setMessage('');
                    alert('Your message has been sent successfully!');
                } else {
                    // Handle server errors
                    response.json().then(data => {
                        alert(`Error: ${data.message}`);
                    });
                }
            })
            .catch(error => {
                // Handle network errors
                console.error('Error:', error);
                alert('An error occurred while sending your message. Please try again later.');
            });
    };

    const getGradient = (inputValue: string) => {
        return inputValue ? 'url(#borderGradientH)' : 'url(#borderGradient)';
    };

    return (

        <form className="form-component" onSubmit={handleSubmit}>

            <svg style={{ position: 'absolute' }}>
                <defs>
                    <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D4D900" stopOpacity="0.4" />
                        <stop offset="25%" stopColor="#F9FF00" />
                        <stop offset="50%" stopColor="#D4D900" stopOpacity="0.4" />
                        <stop offset="75%" stopColor="#F9FF00" />
                        <stop offset="100%" stopColor="#D4D900" stopOpacity="0.4" />
                    </linearGradient>

                    <linearGradient id="borderGradientH" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00aad9" stopOpacity="0.4" />
                        <stop offset="25%" stopColor="#00eeff" />
                        <stop offset="50%" stopColor="#00aad9" stopOpacity="0.4" />
                        <stop offset="75%" stopColor="#00eeff" />
                        <stop offset="100%" stopColor="#00aad9" stopOpacity="0.4" />
                    </linearGradient>

                </defs>
            </svg>

            {/* Name Input */}
            <div className="input-wrapper">
                <svg className="svg-border-f" viewBox="0 0 500 60">
                    <polygon points="20,0 480,0 500,30 480,60 20,60 0,30" stroke={getGradient(name)} strokeWidth="2" fill="none" />
                </svg>

                <svg className="yellow-blur-line1" viewBox="0 0 500 60">
                    <polygon points="20,5 480,5 500,30 480,57 20,57 0,30" stroke={getGradient(name)} strokeWidth="4" fill="none" />
                </svg>

                <div className="input-content">
                    <label className="visually-hidden" htmlFor="message">Name</label>
                    <div className="input-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 20V17.2C4 16.6333 4.146 16.1127 4.438 15.638C4.73 15.1633 5.11733 14.8007 5.6 14.55C6.63333 14.0333 7.68333 13.646 8.75 13.388C9.81667 13.13 10.9 13.0007 12 13C13.1 12.9993 14.1833 13.1287 15.25 13.388C16.3167 13.6473 17.3667 14.0347 18.4 14.55C18.8833 14.8 19.271 15.1627 19.563 15.638C19.855 16.1133 20.0007 16.634 20 17.2V20H4ZM6 18H18V17.2C18 17.0167 17.9543 16.85 17.863 16.7C17.7717 16.55 17.6507 16.4333 17.5 16.35C16.6 15.9 15.6917 15.5627 14.775 15.338C13.8583 15.1133 12.9333 15.0007 12 15C11.0667 14.9993 10.1417 15.112 9.225 15.338C8.30833 15.564 7.4 15.9013 6.5 16.35C6.35 16.4333 6.229 16.55 6.137 16.7C6.045 16.85 5.99933 17.0167 6 17.2V18ZM12 10C12.55 10 13.021 9.80433 13.413 9.413C13.805 9.02167 14.0007 8.55067 14 8C13.9993 7.44933 13.8037 6.97867 13.413 6.588C13.0223 6.19733 12.5513 6.00133 12 6C11.4487 5.99867 10.978 6.19467 10.588 6.588C10.198 6.98133 10.002 7.452 10 8C9.998 8.548 10.194 9.019 10.588 9.413C10.982 9.807 11.4527 10.0027 12 10Z" fill="white" />
                        </svg>
                    </div>
                    <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        className="form-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
            </div>

            {/* E-mail Input */}
            <div className="input-wrapper">
                <svg className="svg-border-f" viewBox="0 0 500 60">
                    <polygon points="20,0 480,0 500,30 480,60 20,60 0,30" stroke={getGradient(email)} strokeWidth="2" fill="none" />
                </svg>

                <svg className="yellow-blur-line1" viewBox="0 0 500 60">
                    <polygon points="20,5 480,5 500,30 480,57 20,57 0,30" stroke={getGradient(email)} strokeWidth="4" fill="none" />
                </svg>

                <div className="input-content">
                    <label className="visually-hidden" htmlFor="message">E-mail</label>
                    <div className="input-icon">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z" fill="white" />
                        </svg>
                    </div>
                    <input
                        id="email"
                        type="email"
                        placeholder="E-mail"
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
            </div>

            {/* Message Input */}
            <div className="input-wrapper message-input-wrapper">
                <svg className="svg-border-f input-f" viewBox="0 0 500 200">
                    <polygon points="20,-20 480,-20 500,102 480,224 20,224 0,102" stroke={getGradient(message)} strokeWidth="2" fill="none" />
                </svg>

                <svg className="yellow-blur-line1 input-f" viewBox="0 0 500 200">
                    <polygon points="20,-15 480,-15 500,102 480,222 20,222 0,102" stroke={getGradient(message)} strokeWidth="4" fill="none" />
                </svg>

                <div className="input-content">
                    <label className="visually-hidden" htmlFor="message">Message</label>
                    <div className="input-icon message-input-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2H18V14H3.17L2 15.17V2ZM2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0H2ZM4 10H16V12H4V10ZM4 7H16V9H4V7ZM4 4H16V6H4V4Z" fill="white" />
                        </svg>
                    </div>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        className="form-textarea"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
            </div>

            <div className="smallerSpace" />
            <div className="smallerSpace" />
            <div className="smallerSpace" />

            <div className="submitButton" >
                <button type="submit" style={{ all: 'unset' }}>
                    <PurpleButtonComponent>
                        Submit
                    </PurpleButtonComponent>
                </button>
            </div>

        </form>
    );
};

export default FormComponent;
