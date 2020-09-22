import React from "react";
import "./header.css";
const Header = () => {
  return (
    <>
      <div id="ElementArea">
        <div className="draggable Image" id="elm_4">
          <img
            id="elm_4_image"
            src="https://1503641826.rsc.cdn77.org/Media/xsdnwcngpiyjfuxgtbyiyuysu_usermedia.png"
            alt="1"
          />
        </div>
        <div
          style={{ width: 200 }}
          className="draggable section1 Headline"
          id=" elm_2"
        >
          <h1 id="elm_2_headline">MODULANDS</h1>
        </div>
        <div className=" draggable section1 Headline" id="elm_3">
          <h2 id="elm_3_headline">Multi-Purpose Landing Page Template</h2>
        </div>
        <div className=" draggable button" id="elm_5">
          <button className="button_watch">
            <a href="/#">WATCH VIDEO</a>
          </button>
        </div>
        <div className=" draggable button" id="elm_6">
          <button className="button_buy">
            <a href="/#">BUY TEMPLATE</a>
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
