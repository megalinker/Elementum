import React from 'react';
import './ElementumLogo.css';

const ElementumLogo: React.FC = () => {
    return (
        <div className="games-text-container">
            <svg
                className="elementum-svg"
                width="100%"
                height="auto"
                viewBox="0 0 42 52"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Elementum Logo"
            >
                <path
                    d="M29.095 15.3752H16.1613V20.5335H31.1615L41.9711 10.2222V5.17926L36.7157 0H12.3745C11.5616 0 10.7958 0.382872 10.3107 1.03323L1.37874 12.9705C1.04569 13.4163 0.864746 13.9591 0.864746 14.5151V36.7688C0.864746 37.3248 1.04569 37.8676 1.37874 38.3134L10.3107 50.2507C10.7984 50.901 11.5616 51.2839 12.3745 51.2839H36.7157L41.9711 46.1073V41.067L31.1641 30.7216H16.1613V35.8798H29.0924L36.8128 43.2698V43.949L34.6021 46.1282H14.5275C13.9847 46.1282 13.4759 45.8739 13.1507 45.4385L6.36657 36.3702C6.14366 36.0739 6.02303 35.712 6.02303 35.3396V15.9469C6.02303 15.5745 6.14366 15.2152 6.36657 14.9163L13.1507 5.84798C13.4759 5.41528 13.9847 5.15828 14.5275 5.15828H34.6021L36.8128 7.33751V8.01409L29.095 15.3752Z"
                    fill="#AF50CE"
                />
            </svg>

            <span className="games-text-small">elementum</span>
        </div>
    );
};

export default ElementumLogo;
