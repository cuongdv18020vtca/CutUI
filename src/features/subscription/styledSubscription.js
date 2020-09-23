import styled from "styled-components";

export const Form = styled.div`
  width: 330px;
  transform: translate(27px);
  background-color: white;
`;
export const Form_container = styled.div`
  padding-left: 25px;
  transform: translate(-4px);
`;
export const Form1 = styled.div`
  width: 330px;
`;
export const Field_container = styled.div`
  margin-bottom: 15px;
`;
export const Input = styled.div`
  padding-top: 10px;
`;
export const Button = styled.button.attrs({
  type: "submit",
})`
  background-color: #f26347;
  width: 290px;
  height: 50px;
  border: 2px solid #f26347;
  background-position: center center;
  font-size: 18px;
  border-radius: 4px;
  color: white;
  transition: 0.5s;
  transition-property: background;
  &:hover {
    background: black;
    border: none;
  }
`;
export const InputChildren = styled.input`
  width: 290px;
  height: 40px;
  box-sizing: border-box;
  border: 2px solid #e8e5e1;
  border-radius: 5px;
  padding: 1px 2px;
`;
export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 520px;
  background-color: #f0efeb;
  top: 355px;
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
`;
export const Content = styled.div`
  padding-left: 16px;
`;
export const Elm_18_headline = styled.div`
  margin: 0;
  padding: 0;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  text-align: left;
  font-size: 50px;
  color: #6a585b;
`;
export const Elm_19_headline = styled.div`
  margin: 0;
  padding: 0;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  text-align: left;
  font-size: 30px;
  color: #aba1a3;
`;
export const Icon1 = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 15px;
  padding-top: 14px;
`;
export const Wrap_content_detail = styled.div`
  width: "580px";
`;
export const Error = styled.div`
  color: red;
`;
export const Icon = styled.div`
  display: flex;
  justifycontent: flex-start;
  alignitems: flex-start;
`;
export const Text = styled.p`
  color: #8e8386;
  lineheight: 25px;
  fontsize: 14px;
`;
