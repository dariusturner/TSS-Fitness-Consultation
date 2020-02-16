import React from 'react';

export default function Footer() {
    const footerStyle = {
        color: "#fff",
        margin: "50px 0 20px 0",
        textAlign: "center"
    }
    const copyRightColor = {
        color: "#be950d"
    }
    return (
        <div id="footer" style={footerStyle}>
            <div className="credit">
            <p>TSS Consulting <span style={copyRightColor}>©2020</span></p>
            </div>
        </div>
    )
}