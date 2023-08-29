import React from "react";

export function Counter({value}) {

    const counterStyle = {
        color: 'white',
        backgroundColor: '#3a78ef',
        display: 'flex',
        width: '100px',
        height: '100px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '15px',
        boxShadow: 'rgba(100, 100, 111, 0.4) 0px 7px 29px 0px'
    }

    return (
        <section style={counterStyle}>
            <h2>{value}</h2>
        </section>
    )
}