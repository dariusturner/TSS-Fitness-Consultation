import React from 'react';

let styles = {
    color: "#fff",
    marginTop: "50px",
    textAlign: "center"
}

let titleStyle = {
    fontSize: "40px"
}

function Plans() {
    return (
        <div id="plans" style={styles}>
            <h2 className="title" style={titleStyle}>Plans</h2>
        </div>
    )
}

export default Plans;