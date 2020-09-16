import React from 'react';

const ContentSection5 = ({ value }) => {
    return (
        <React.Fragment>
            <div class="section" id="SECTION5">
                <div className="wrap-content-section5">
                    <div className="wrap-detail-section5">
                        <div className="video" data-thumb="https://i.vimeocdn.com/video/127119331.webp?mw=600&mh=338" data-thumb-width="600px" ></div>
                        <div className="text-section5">
                            <div className="title-section5">
                                <div> <p>{value.title}</p></div>
                                <div className="content-section5">{value.content}</div>
                            </div>
                            <div className="content-section5"></div>
                            <button className="button-section5">BUY TEMPLATE</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ContentSection5;