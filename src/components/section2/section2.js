import React, { Fragment, useState } from 'react';
import ContentSection2 from './contentSection2';

const Section2 = () => {
    const [contentSec2, setContentSec2] = useState([
        {
            icon: "https://1503641826.rsc.cdn77.org/Media/noiodkfycayfurjcxphglccbt_usermedia.png",
            title: "Maecenas currabitur",
            content: "Aliquam justo neque, fermentum vel posuere vulputate vitae mi. Vestibulum magna tempor nisl vehicula luctus urna. Aenean augue ligula, molestie id est in, bibendum dignissim. Cras tellus nisl, laoreet at nisi venenatis."
        },
        {
            icon: "https://1503641826.rsc.cdn77.org/Media/nsadlozrozqsyxszidxkkdojp_usermedia.png",
            title: "Semper finibus",
            content: "Praesent et purus ac libero euismod egestas. Aliquam feugiat luctus eros eget maecenas semper pulvinar. tiam in auctor tortor. Aliquam vulputate risus placerat congue ornare. Donec semper odio non efficitur congue."
        },
        {
            icon: "https://1503641826.rsc.cdn77.org/Media/djxbykmgupsfvqmzogsskzsoh_usermedia.png",
            title: "Aliquam metus luctus",
            content: " Suspendisse lobortis vestibulum leo, ac volutpat rutrum tristique. Maecenas posuere ultrices ante et dolores nescum finibus. Nulla eros auctor sollicitudin, a rutrum quam mollis. Nulla at lectus lorem ipsum."
        }
    ])
    return (
        <React.Fragment>
            <ContentSection2 value={contentSec2} />
        </React.Fragment>
    )
}
export default Section2;