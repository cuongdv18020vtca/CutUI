import styled from "styled-components";
export const Background = styled.div`
  height: 450px;
  width: 100%;
  background: red;
  position: relative;
  top: 355px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrap_Content = styled.div`
  display: flex;

  width: 960px;

  justify-content: space-evenly;
`;
export const Wrap_detail = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Video = styled.div`
  height: 375px;
  width: 599px;
  background-image: url(https://i.vimeocdn.com/video/127119331.webp?mw=600&mh=338);
  background-repeat: no-repeat;
  z-index: 1;
`;
export const Text = styled.div`
  height: 48px;
  width: 330px;
  background-color: transparent;

  height: 375px;
  transform: translate(63px, -36px);
`;
export const Title_Detail = styled.p`
  font-weight: 400;
  font-size: 30px;
  font-style: normal;
  text-align: left;
  color: #393d3e;
`;
export const Content = styled.div`
  width: 318.05px;
  line-height: 25px;
  font-size: 14px;
  color: #8e8386;
  margin-top: -11px;
`;
export const Button = styled.button`
  width: 195px;
  height: 50px;
  background: #11cab6;
  border: 1px solid #11cab6;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-top: 43px;
  transition: 0.5s;
  transition-property: background;
  &:hover {
    background: black;
    border: none;
  }
`;
