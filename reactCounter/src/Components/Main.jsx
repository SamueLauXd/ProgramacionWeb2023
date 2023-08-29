import React from "react";
import { useState } from "react";
import { Button, Counter} from './index'

export function Main() {

    const buttonStyle = {
        display: "flex", 
        gap: '10px', 
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: '100px',
    }

    const [countState, setCountState] = useState(0);

    const addState = (newValue) => {
        setCountState(newValue)
    }
    return (
        <main style={{marginTop: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '20px'}}>

            <section style={buttonStyle}>
                <Button type="substract" value={countState} onAddState={addState}/>
                <Counter value={countState}/>
                <Button type="add" value={countState} onAddState={addState}/>
            </section>

            <Button type="reset" value={countState} onAddState={addState}/>

        </main>
    )
}