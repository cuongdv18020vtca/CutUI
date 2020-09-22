import React, { useEffect } from "react";
import "./characteristic.css";
import { useSelector, useDispatch } from "react-redux";
import { getCharacteristic } from "./characteristicSlice";
const Characteristic = () => {
  const dispatch = useDispatch();
  const characteristic = useSelector(
    (state) => state.characteristic.listCharacteristic
  );
  useEffect(() => {
    dispatch(getCharacteristic());
  }, [dispatch]);

  return (
    <>
      <div className="section" id="SECTION2">
        <div className="draggable Image" id="elm_122">
          <a
            href="/#"
            target="_self"
            id="ff4e8fb6-e3a6-4928-834b-cb3bfc084d40"
            className
            data-rel="_self"
          >
            <img
              id="elm_122_image"
              src="https://1503641826.rsc.cdn77.org/Media/ccqnxikprrbwpdcpdtejfkqsw_usermedia.png"
              alt="1"
            />
          </a>
        </div>
        <div className=" draggable Image" id="elm_11">
          <div className="p1">
            {characteristic.map((val, index) => {
              return (
                <div className="col-4" key={index}>
                  <img id="elm_14_image" src={val.icon} alt="1" />
                  <div className="title">
                    <h4>
                      <span style={{ lineHeight: "25px" }}>
                        <span style={{ color: "#393d3e" }}>
                          <span style={{ fontSsize: "24px" }}>{val.title}</span>
                        </span>
                      </span>
                    </h4>
                  </div>
                  <div className="text">
                    <p style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "14px" }}>
                        <span style={{ lineHeight: "25px" }}>
                          <span style={{ color: "#8e8386" }}>
                            {val.content}
                          </span>
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Characteristic;
