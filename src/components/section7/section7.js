import React, { useState } from 'react'
import ContentSection7 from './contentSection7'

const Section7 = () => {
    const [contentSection7, setContentSec7] = useState([
        {
            img: "https://1503641826.rsc.cdn77.org/Media/ekcpwfoeygsvehpfempkcbvyz_usermedia.png",
            name: "Joey Higgins",
            department: " CEO Higgins&Geox ",
            content: "Praesent et purus ac libero euismod egestas. Aliquam feugiat luctus eros eget maecenas semper pulvinar. tiam in auctor tortor. Aliquam vulputate risus placerat congue ornare. Donec semper odio non efficitur congue."
        },
        {
            img: "https://1503641826.rsc.cdn77.org/Media/tqqkfyxwtevculhlwopeiswos_usermedia.png",
            name: "Joey Higgins",
            department: "CEO Higgins&Geox ",
            content: "Praesent et purus ac libero euismod egestas. Aliquam feugiat luctus eros eget maecenas semper pulvinar. tiam in auctor tortor. Aliquam vulputate risus placerat congue ornare. Donec semper odio non efficitur congue."
        },
        {
            img: "https://1503641826.rsc.cdn77.org/Media/clrsditnfmpakuydorbaptatt_usermedia.png",
            name: "Joey Higgins",
            department: "CEO Higgins&Geox ",
            content: "Praesent et purus ac libero euismod egestas. Aliquam feugiat luctus eros eget maecenas semper pulvinar. tiam in auctor tortor. Aliquam vulputate risus placerat congue ornare. Donec semper odio non efficitur congue."
        },

    ])
    return (
        <ContentSection7 value={contentSection7} />
    )
}
export default Section7