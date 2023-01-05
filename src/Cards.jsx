import React, { useEffect, useRef } from 'react'
import cards from "cards/App"

const Cards = () => {
    const divRef = useRef(null);

    useEffect(() => {
        cards(divRef.current);
    }, []);
    return (
        <div ref={divRef} />
    )
}

export default Cards