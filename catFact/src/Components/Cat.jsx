import { useState, useEffect } from "react";
import React from "react";

export function Cat({image, text, error, isLoading}) {

    if(isLoading) {
        return (
            <h1 className="font-bold text-4xl">Wait... Your cat is on the way</h1>
        )
    }

    if (error){
        return <p>{error}</p>
    }

    return (
        <section className="flex flex-col items-center justify-center gap-9">
            {
                image && text
                ? <>
                    <img className="rounded-3xl max-w-lg" src={image}></img>
                    <p>{text}</p>
                </>
                : <h3 className="font-medium">For Start, generate a first Cat</h3>
            }
        </section>
    )
}