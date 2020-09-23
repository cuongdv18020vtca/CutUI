import styled from "styled-components";
export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: #f26347;
  top: 236px;
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
  color: #ffffff;
  font-style: normal;
`;
export const Wrap_Title = styled.div`
  height: 31px;
  width: 960px;
  position: relative;
  background-color: transparent;
  top: 2px;
  left: 577px;
  letter-spacing: 1px;
`;
export const Title = styled.h2`
  color: #ffffff;
  font-size: 30px;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  & img {
    margin-left: 25px;
    transform: translateX(-10px);
  }
`;
export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  & div {
    width: 960px;
    transform: translate(294px, 100px);
    color: white;
    & span {
      padding-left: 10px;
    }
  }
`;
export const Footer = styled.div`
  width: 100%;
  position: fixed;
  height: 20px;
  background: black;
  top: 273px;
  color: white;
  text-align: center;
  transform: translateY(610px);
  z-index: 10000;
`;
export const Button = styled.button`
  width: 195px;
  height: 50px;
  background: #f26347;
  border: 1px solid #ffffff;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  font-weight: bold;

  transition: 0.5s;
  transition-property: background;
  &:hover {
    background: black;
    border: none;
  }
`;
