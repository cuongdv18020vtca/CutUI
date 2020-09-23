import React from "react";
// import "./footer.css";
import * as styled from "./styledFooter";
const Footer = () => {
  return (
    <>
      <styled.Background>
        <styled.Wrap_Banner>
          <styled.Banner>INTERESTED?</styled.Banner>
        </styled.Wrap_Banner>
        <styled.Wrap_Title>
          <styled.Title>
            Just one click and your success story can start
          </styled.Title>
        </styled.Wrap_Title>
        <styled.Content>
          <styled.Button>SIGN UP NOW</styled.Button>
        </styled.Content>
        <styled.Content>
          <img
            src="https://1503641826.rsc.cdn77.org/Media/fhwyjjlbevlmxfscsxewonwws_usermedia.png"
            alt=""
          />
          <img
            src="https://1503641826.rsc.cdn77.org/Media/rlbyiepdzlreetwrmpyfdbcss_usermedia.png"
            alt=""
          />
          <img
            src="https://1503641826.rsc.cdn77.org/Media/truahslzgsxkdvqwjytbxndhf_usermedia.png"
            alt=""
          />
        </styled.Content>
        <styled.Text>
          <div>
            <p>
              Made with love by @mylanko <span>© 2015 Themeforest</span>
            </p>
          </div>
        </styled.Text>
      </styled.Background>
      <styled.Footer>
        Created by Pagewiz - The Landing Page Platform
      </styled.Footer>
    </>
  );
};
export default Footer;
