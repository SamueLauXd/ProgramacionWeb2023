import React from "react";

export function Header() {

    const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        top: '0px',
        width: '100%',
        justifyContent: 'space-between',
        padding: '20px'
    }

    return (
        <header style={headerStyle}>
            <h1>Counter App</h1>
            <section style={{display: 'flex', gap: '30px'}}>
                <a>Acerca de nosotros</a>
                <a>Descargar</a>
            </section>
        </header>
    )
}