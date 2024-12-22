import React from "react";

import "./Login.css";

const Login = ({ onLogin }) => {
    return (
        <div className="login-page">
            <header className="login-header">
                <div className="logo-container">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="WhatsApp Logo"
                        className="whatsapp-logo"
                    />
                    <h1>WhatsApp</h1>
                </div>
                <button className="download-button">
                    <a
                        href="https://www.whatsapp.com/download"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-button"
                    >
                        <i className="fas fa-download"></i> Download
                    </a>

                </button>
            </header>
            <main className="login-main">
                <div className="login-card">
                    <div className="login-info">
                        <h2>Log into WhatsApp Web</h2>
                        <p>
                            Message privately with friends and family using WhatsApp on your
                            browser.
                        </p>
                        <ol>
                            <li>Open WhatsApp on your phone</li>
                            <li>
                                Tap Menu <i className="fas fa-ellipsis-v"></i> on Android, or
                                Settings <i className="fas fa-cog"></i> on iPhone
                            </li>
                            <li>Tap Linked devices and then Link a device</li>
                            <li>Point your phone at this screen to scan the QR code</li>
                        </ol>
                        <a href="#help" className="help-link">
                            Need help getting started? <i className="fas fa-arrow-right"></i>
                        </a>
                        <br></br>
                        <a href="#phone-login" className="phone-login-link">
                            Log in with phone number <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                    <div className="qr-section">
                        <img
                            src="/images/QR-Code.jpg"
                            alt="QR Code"
                            className="qr-code"
                            onClick={onLogin}
                        />

                        <div className="stay-logged-in">
                            <input type="checkbox" id="stay-logged-in" />
                            <label htmlFor="stay-logged-in">
                                Stay logged in on this browser <i className="fas fa-info-circle"></i>
                            </label>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="login-footer">
                <p>
                    <i className="fas fa-lock"></i> Your personal messages are
                    end-to-end encrypted
                </p>
            </footer>
        </div>
    );
};

export default Login;
