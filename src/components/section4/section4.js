import React, { useState } from 'react';
import ContentSection4 from './contentSection4';

const Section4 = () => {
    const [contentSection4, setContentSec4] = useState([
        {
            icon: "https://1503641826.rsc.cdn77.org/Media/ojnosyxkhwnghpxtnynnoazvm_usermedia.png",
            title: "Desktop & Mobile",
            content: "Suspendisse vel lacinia orci, ut commodo enim. Vestibulum at ultrices sapien."
        },
        {
            icon: "https://1503641826.rsc.cdn77.org/Media/gsvnznksckjwumbbulpqcgzer_usermedia.png",
            title: "ProGlyphs Icon Set",
            content: "Nulla ultrices eros auctor enim sollicitudin, a rutrum quam mollis. Nulla at odio lectus.",
        },
        {
            icon: "https://1503641826.rsc.cdn77.org/Media/dbeeuznkrocqxwlwyfpzypmsp_usermedia.png",
            title: "Easy to Use",
            content: "Donec semper odio non efficitur congue. Aenean augue ligula, molestie id est in."
        },
        {
            icon: "https://1503641826.rsc.cdn77.org/Media/xxmzvasqwvlfnhkwmdxzkwodu_usermedia.png",
            title: "Drag & Drop",
            content: "Proin cursus arcu mauris, et pulvinar lectus fermentum sed. Donec imperdiet est."
        },
        {
            icon: "https://1503641826.rsc.cdn77.org/Media/dajesoolpwbalvojzbbaqlxec_usermedia.png",
            title: "Statistics",
            content: "Phasellus varius blandit felis nec porttitor. Donec sit amet ante sit amet sapien."
        },
        {
            icon: "https://1503641826.rsc.cdn77.org/Media/mmpteajifsaimdgxuxljwaijp_usermedia.png",
            title: "Save Money",
            content: "Curabitur at sagittis. Vestibulum ante ipsum primis in faucibus luctus ultrices posuere cubilia."
        }
    ])
    return (
        <ContentSection4 value={contentSection4} />
    )
}
export default Section4;