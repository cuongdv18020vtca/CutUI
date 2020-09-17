import React from 'react';

import './section4.css'
import { useSelector } from 'react-redux'
const ContentSection4 = () => {
    const value = useSelector(state => state.section4)
    console.log(value);
    const element = (value.map((val, index) => {
        return (
            <div className="wrap-detail-section4">
                <img id="elm_30_imgage" src={val.icon} alt="" />
                <div className="text-section4">
                    <h4 className="text-style">{val.title}</h4>
                    <p>{val.content}</p>
                </div>
            </div>
        )
    }))
    return (
        <>
            <div className="section" id="SECTION4">
                <div id="elm_33">
                    <h2 id="elm_33_headline">AWESOME FEATURES</h2>
                </div>
                <div id="elm_34">
                    <h2 id="elm_34_headline">
                        What will you get with our template and Pagewiz
                    </h2>
                </div>
                <div className="content_section4">
                    <div className="wrap__content_section4">
                        {element}
                    </div>

                </div>
            </div>
        </>
    )
}
export default ContentSection4;