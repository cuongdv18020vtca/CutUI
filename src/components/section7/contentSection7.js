import React from 'react'

import './section7.css'
import { useSelector } from 'react-redux'
const ContentSection7 = () => {
    const value = useSelector(state => state.section7)
    const element = (value.map((val, index) => {
        return (
            <>
                <div className="wrap-detail-section7">
                    <div className="user-image">
                        <img src={val.img} alt="" />
                    </div>

                    <div className="content7">
                        <div className="title-section7" >{val.name}</div>
                        <div className="department"> {val.department}</div>
                        <div className="border7 "></div>
                        <div className="text-content7">
                            <div>{val.content}</div>
                        </div>
                    </div>

                </div>
            </>
        )
    }))
    return (
        <>
            <div class="section" id="SECTION7">
                <div id="elm_50">
                    <h2 id="elm_50_headline">READ OUR TESTIMONIALS</h2>
                </div>
                <div id="elm_50">
                    <h2 id="elm_51_headline">
                        We appreciate every kind word from our awesome clients
                    </h2>
                </div>

                <div className="content_section6">

                    <div className="wrap__content_section6">

                        {element}
                    </div>


                </div>
            </div>
        </>
    )
}
export default ContentSection7