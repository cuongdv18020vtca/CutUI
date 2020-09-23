import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFeature } from "./featureSlice";
import * as styled from "./styledFeature";
const Feature = () => {
  const feature = useSelector((state) => state.feature.listFeature);
  const distpatch = useDispatch();
  useEffect(() => {
    distpatch(getFeature());
  }, [distpatch]);
  return (
    <>
      <styled.Background>
        <styled.Wrap_Banner>
          <styled.Banner>AWESOME FEATURES</styled.Banner>
        </styled.Wrap_Banner>
        <styled.Wrap_Title>
          <styled.Title>
            What will you get with our template and Pagewiz
          </styled.Title>
        </styled.Wrap_Title>
        <styled.Wrap_Content>
          <styled.Content>
            {feature.map((val, index) => {
              return (
                <styled.Wrap_Detail>
                  <styled.Image src={val.icon} alt="" />
                  <styled.Text>
                    <styled.Wrap_Text_Style>{val.title}</styled.Wrap_Text_Style>
                    <styled.Text_Style>{val.content}</styled.Text_Style>
                  </styled.Text>
                </styled.Wrap_Detail>
              );
            })}
          </styled.Content>
        </styled.Wrap_Content>
      </styled.Background>
    </>
  );
};
export default Feature;
