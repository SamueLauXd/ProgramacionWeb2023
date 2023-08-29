import React from "react";

export function Footer() {
    const footerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: '0px',
        width: '100%',
        padding: '20px'
    }
    return (
        <footer style={footerStyle}>
            <h3 style={{color: 'gray'}}>Samuel Ortiz</h3>
            <section style={{display: 'flex', gap: '30px'}}>
                <a>@selfmadeSamuel</a>
                <a>Soporte</a>
            </section>
        </footer>
    )
}