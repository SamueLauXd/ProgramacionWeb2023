import React, { useState } from "react";
import { Header, Footer, Main } from "./Components";

export function App() {
    return (
        <>
            <div className="contenedor-general">
                <Header/>

                <Main/>

                <Footer/>
            </div>
        </>
    )
}