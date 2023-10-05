import React, { useState } from "react";
import { Cat } from "./Components/Cat";
import { Button } from "./Components/Button";
import { useCat } from "./Hooks/useCat";

const RANDOM_FACT = 'https://catfact.ninja/fact'

export function App() {
    const {
        image,
        fact,
        error,
        isLoading,
        getFact
    } = useCat()

    return (
        <main className="flex flex-col items-center text-white gap-9">
            <h1 className="text-5xl font-bold">Cat Fact Generator</h1>
            <Cat isLoading={isLoading} error={error} image={image} text={fact}/>
            <Button onClick={getFact} value="Generate Cat"/>
        </main>
    )
}