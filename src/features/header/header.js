import React from "react";
// import "./header.css";
import * as styled from "./styledHeader";
const Header = () => {
  return (
    <>
      <div>
        <styled.Wrap_img>
          <img
            id="elm_4_image"
            src="https://1503641826.rsc.cdn77.org/Media/xsdnwcngpiyjfuxgtbyiyuysu_usermedia.png"
            alt="1"
          />
        </styled.Wrap_img>
        <styled.Headline>
          <styled.Title>MODULANDS</styled.Title>
        </styled.Headline>
        <styled.Wrap_Text>
          <styled.Text>Multi-Purpose Landing Page Template</styled.Text>
        </styled.Wrap_Text>
        <div>
          <styled.Button_Watch>
            <a href="/#">WATCH VIDEO</a>
          </styled.Button_Watch>
        </div>
        <div>
          <styled.Button_Buy>
            <a href="/#">BUY TEMPLATE</a>
          </styled.Button_Buy>
        </div>
      </div>
    </>
  );
};
export default Header;
