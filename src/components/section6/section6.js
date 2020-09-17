import React, { useState } from 'react';
import ContentSection6 from './contentSection6';
import './section6.css'
const Section6 = () => {
    const [contentSection6, setContentSec6] = useState([
        {
            price: "0",
            type: "BASIC",
            content: "Lorem ipsum dolor sit",
            check: true
        },
        {
            price: "49",
            type: "STANDARD",
            content: "Lorem ipsum dolor sit",
            check: false
        },
        {
            price: "149",
            type: "ENTERPRISE",
            content: "Lorem ipsum dolor sit",
            check: true
        }
    ])
    return (
        <ContentSection6 value={contentSection6} />
    )
}
export default Section6