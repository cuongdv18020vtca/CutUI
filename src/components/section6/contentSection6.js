import React from 'react'


const ContentSection6 = ({ value }) => {
    const element = value.length ? (value.map((val, index) => {
        return (
            <React.Fragment>
                <div className="wrap-detail-section6">
                    <div className="icon-section6" id={val.check ? "" : "standard"}>
                        <div className="icon-price " id={val.check ? "" : "icon-2"}>$</div>
                        <p className="content-icon" id={val.check ? "" : "content-2"}>{val.price}</p>
                    </div>

                    <div className="title-section6">{val.type}</div>
                    <div className="border6"></div>
                    <div className="text-content6">
                        <p>{val.content}</p>
                        <p>{val.content}</p>
                        <p>{val.content}</p>
                    </div>
                    <button className={val.check ? "button-section6" : "button-section7"}>GET FOR FREE</button>
                </div>
            </React.Fragment>
        )
    })) : null
    return (
        <React.Fragment>
            <div class="section" id="SECTION6">
                <div id="elm_50">
                    <h2 id="elm_50_headline">CHECK OUT OUR PLANS</h2>
                </div>
                <div id="elm_50">
                    <h2 id="elm_51_headline">
                        Choose your own pricing plan to meet your requirements
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
export default ContentSection6