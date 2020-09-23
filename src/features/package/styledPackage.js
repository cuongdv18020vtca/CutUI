import styled, { css } from "styled-components";
export const Background = styled.div`
  height: 650px;
  width: 100%;
  background-color: #e8e5e1;
  position: relative;
  top: 316px;
`;
export const Wrap_Banner = styled.div`
  height: 51px;
  width: 960px;
  position: relative;
  background-color: transparent;
  top: 15px;
  z-index: 32;
  letter-spacing: normal;
  left: 487px;
`;
export const Banner = styled.h2`
  font-weight: normal;
  text-decoration: none;
  text-align: center;
  font-size: 50px;
  color: #6a585b;
  font-style: normal;
`;
export const Title = styled.h2`
  color: #aba1a3;
  font-size: 30px;
  position: relative;
  left: 70px;
`;
export const Wrap_Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Wrap_List_Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-evenly;
  position: relative;
  top: 43px;
  transform: translateX(2px);
`;
export const Wrap_Detail_Content = styled.div`
  display: flex;

  width: 300px;
  height: 390px;
  background: #f9f8f6;
  margin-left: 30px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const Title_Content = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 25px;
  transform: translateY(8px);
`;

export const Text = styled.div`
  text-align: center;
  color: rgb(142, 131, 134);
`;
export const Icon_Package = styled.div`
  ${(props) => {
    if (props.check === false) {
      return css`
        background: #11cab6;
        border: 5px solid #0eb5a3;
      `;
    }
  }}

  position: relative;
  z-index: 61;
  height: 110px;
  width: 110px;
  border: 5px solid #e8e5e1;
  border-radius: 100%;
  display: flex;
  justify-content: center;
`;
export const Icon_Price = styled.div`
  ${(props) => {
    if (props.check === false) {
      return css`
        color: "white";
      `;
    }
  }}
  font-weight: normal;
  font-style: normal;
  text-align: center;
  font-size: 20px;
  color: #aba1a3;
  transform: translateY(55px);
`;
export const Content_Icon = styled.p`
  ${(props) => {
    if (props.check === false) {
      return css`
        color: white;
      `;
    }
  }}
  height: 50px;
  transform: translateY(-22px);
  color: #d0cec8;
  font-size: 50px;
`;
export const Border = styled.div`
  border-bottom: 0.5px solid #e8e5e1;
  width: 247px;
  transform: translateY(20px);
`;
export const Button = styled.button`
  ${(props) => {
    if (props.check === false) {
      return css`
        width: 195px;
        height: 50px;
        background: #11cab6;
        border: 1px solid #11cab6;
        border-radius: 5px;
        color: white;
        font-size: 18px;
        font-weight: bold;

        transition: 0.5s;
        transition-property: background;
        &:hover {
          background-color: black;
          border: none;
        }
      `;
    }
    return css`
      width: 195px;
      height: 50px;
      background: #f26347;
      border: 1px solid #f26347;
      border-radius: 5px;
      color: white;
      font-size: 18px;
      font-weight: bold;

      transition: 0.5s;
      transition-property: background;
      &:hover {
        background-color: black;
        border: none;
      }
    `;
  }}
`;
