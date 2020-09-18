import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { buyTemplate } from '../../actions/videoAction';

import './video.css'
const Video = () => {
    const video = useSelector(state => state.video)
    const dispatch = useDispatch();
    const handleBuy = () => {
        dispatch(buyTemplate())
    }
    return (
        <>
            <div class="section" id="SECTION5">
                <div className="wrap-content-section5">
                    <div className="wrap-detail-section5">
                        <div className="video" data-thumb="https://i.vimeocdn.com/video/127119331.webp?mw=600&mh=338" data-thumb-width="600px" ></div>
                        <div className="text-section5">
                            <div className="title-section5">
                                <div> <p>{video.title}</p></div>
                                <div className="content-section5">{video.content}</div>
                            </div>
                            <div className="content-section5"></div>
                            <button onClick={() => handleBuy()} className="button-section5">BUY TEMPLATE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Video;