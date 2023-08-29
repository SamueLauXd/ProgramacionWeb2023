import React from "react";

export function Button({type, value, onAddState}) {

    let text
    let size


    if(type === 'add'){
        text = '+'
        size = '25pt'

    }

    if(type === 'substract'){
        text = '-'
        size = '25pt'
    }

    if(type === 'reset'){
        text = 'Reset'
        size = '15pt'
    }

    const buttonDecoration = {
        border: 'none',
        color: '#3a78ef',
        fontSize: size,
        display: 'flex',
        width: '50px',
        height: '50px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '15px',
    }

    const calculate = () => {
        if (type === 'add') {
            onAddState(value + 1)
        }
    
        if (type === 'substract') {
            onAddState(value > 0 ? value - 1 : value)
        }

        if (type === 'reset') {
            onAddState(0)
        }
    }

    return (
        <>
            <button className="button-container" style={buttonDecoration} onClick={calculate}>
                {text}
            </button>
        </>
    )
}