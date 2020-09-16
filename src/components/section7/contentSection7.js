import React from 'react'


const ContentSection7 = ({ value }) => {
    const element = value.length ? (value.map((val, index) => {
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    })) : null
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}
export default ContentSection7