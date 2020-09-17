import React, { useState } from "react";
import ContentSection5 from "./contentSection5";
import './section5.css'
const Section5 = () => {
    const [contentSection5, setcontentSec5] = useState({
        title: "Watch the video and explore our features",
        content: "Praesent rutrum tristique nisl ut pretium. Nunc convallis nec mauris eu fermentum. Fusce faucibus leo sit amet nisi venenatis, nec scelerisque ante euismod. Ut justo pharetra sollicitudin dignissim, iaculis vitae nunc. Vestibulum egestas finibus sit lobortis. Donec porttitor nisl eu nisi lobortis."
    })
    return (
        <ContentSection5 value={contentSection5} />
    )
}
export default Section5;