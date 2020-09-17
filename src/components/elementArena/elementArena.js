import React, { useCallback } from 'react';
import ElementContent from './elementContent';
import './elementArena.css'
const ElementArena = () => {
    const handleClick = () => {
        console.log(1);
        /////
    }
    return (
        <ElementContent handleClick={handleClick()} />
    )
}
export default ElementArena;