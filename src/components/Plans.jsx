import React from 'react';

const mainStyles = {
    color: "#fff",
    marginTop: "50px",
    overflow: "hidden",
    textAlign: "center"
}

const titleStyle = {
    background: "rgba(30, 30, 30, 0.4)",
    marginBottom: "0",
    padding: "30px 0",
    fontSize: "40px"
}

const planStyle = {
    minHeight: "60vh"
}

function Plans() {
    return (
        <div id="plans" style={mainStyles}>
            <h2 className="title" style={titleStyle}>Our Plans</h2>
            <div className="plan-section" style={planStyle}>

            </div>
        </div>
    )
}

export default Plans;