import styled from "styled-components";
export const Wrap_img = styled.div`
  position: relative;
  top: 110px;
  left: 912.9px;
  z-index: 99;
`;
export const Headline = styled.div`
  text-shadow: 0 1px 3px rgba((0, 0, 0, 0.1)) !important;
  position: absolute;
  width: 450px;
  z-index: 1;
  height: 71px;
  background-color: transparent;
  top: 138px;
  left: 755px;
  width: 200;
`;
export const Title = styled.h1`
  color: white;
  font-weight: 400;
  font-size: 70px;
  font-family: Josefin Sans;
`;
export const Wrap_Text = styled.div`
  position: absolute;
  z-index: 2;
  height: 35px;
  width: 573px;
  background-color: transparents;
  top: 236px;
  left: 677px;
`;
export const Text = styled.div`
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  font-size: 35px;
  font-style: normal;
  font-family: Josefin Sans;
  text-align: center;
`;
export const Button_Watch = styled.button`
  position: absolute;
  z-index: 4;
  height: 50px;
  width: 197px;
  border: 1px solid white;
  border-radius: 5px;
  background-color: transparent;
  top: 345px;
  left: 750px;
  cursor: pointer;
  transition: 0.4s;
  transition-property: background;
  & a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }
  &:hover {
    background: black;
  }
`;
export const Button_Buy = styled.button`
  position: absolute;
  z-index: 5;
  height: 50px;
  width: 195px;
  border: 1px solid rgb(17, 202, 182);
  background-color: #11cab6;
  top: 345px;
  left: 990px;
  transition: 0.5s;
  transition-property: background;
  border-radius: 5px;
  cursor: pointer;
  & a {
    font-size: 18px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    text-decoration: none;
  }
  &:hover {
    background: black;
    border-color: black;
  }
`;
