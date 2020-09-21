import React, { useEffect } from 'react';
import './characteristic.css'
import { useSelector, useDispatch } from 'react-redux'
import { getCharacteristic } from './characteristicSlice'
const Characteristic = () => {
    const dispatch = useDispatch()
    const characteristic = useSelector(state => state.characteristic.listCharacteristic)
    useEffect(() => {
        dispatch(getCharacteristic())
    }, [])

    return (
        <>
            <div class="section" id="SECTION2">
                <div class="draggable Image" id="elm_122">
                    <a target="_self" id="ff4e8fb6-e3a6-4928-834b-cb3bfc084d40" className data-rel="_self">
                        <img id="elm_122_image" src="https://1503641826.rsc.cdn77.org/Media/ccqnxikprrbwpdcpdtejfkqsw_usermedia.png" alt="1" />
                    </a>
                </div>
                <div class=" draggable Image" id="elm_11">
                    <div class="p1">
                        {(characteristic.map((val, index) => {
                            return (
                                <div class="col-4">
                                    <img id="elm_14_image" src={val.icon} alt="1" />
                                    <div class="title">
                                        <h4>
                                            <span style={{ lineHeight: "25px" }}>
                                                <span style={{ color: "#393d3e" }}>
                                                    <span style={{ fontSsize: "24px" }}>{val.title}</span>
                                                </span>
                                            </span>
                                        </h4>
                                    </div>
                                    <div class="text">
                                        <p style={{ textAlign: "center" }}>
                                            <span style={{ fontSize: "14px" }}>
                                                <span style={{ lineHeight: "25px" }}>
                                                    <span style={{ color: "#8e8386" }}>{val.content}</span>
                                                </span>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            )
                        }))}
                    </div>
                </div>

            </div>
        </>
    )
}
export default Characteristic;