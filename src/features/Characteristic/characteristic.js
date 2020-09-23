import React, { useEffect } from "react";
// import "./characteristic.css";
import { useSelector, useDispatch } from "react-redux";
import { getCharacteristic } from "./characteristicSlice";
import * as styled from "./styledCharacteristic";
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
      <styled.Background>
        <styled.Icon>
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
        </styled.Icon>
        <styled.Wrap_List>
          <styled.ListCharacteristic>
            {characteristic.map((val, index) => {
              return (
                <styled.Column key={index}>
                  <img id="elm_14_image" src={val.icon} alt="1" />
                  <styled.Title>
                    <h4 className="p1">{val.title}</h4>
                  </styled.Title>
                  <styled.Text>
                    <p>{val.content}</p>
                  </styled.Text>
                </styled.Column>
              );
            })}
          </styled.ListCharacteristic>
        </styled.Wrap_List>
      </styled.Background>
    </>
  );
};
export default Characteristic;
