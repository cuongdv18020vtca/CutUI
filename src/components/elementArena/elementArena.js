import React, { useCallback } from 'react';
import ElementContent from './elementContent';
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