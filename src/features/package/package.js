import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { getpackages } from "./packageSlice";
// import "./package.css";
import * as styled from "./styledPackage";
const Package = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getpackages());
  }, [dispatch]);
  const packages = useSelector((state) => state.packages.listPackage);
  return (
    <>
      <styled.Background>
        <styled.Wrap_Banner>
          <styled.Banner>CHECK OUT OUR PLANS</styled.Banner>
        </styled.Wrap_Banner>
        <styled.Wrap_Banner>
          <styled.Title>
            Choose your own pricing plan to meet your requirements
          </styled.Title>
        </styled.Wrap_Banner>
        <styled.Wrap_Content>
          <styled.Wrap_List_Content>
            {packages.map((val, index) => {
              return (
                <React.Fragment key={index}>
                  <styled.Wrap_Detail_Content>
                    <styled.Icon_Package check={val.check}>
                      <styled.Icon_Price check={val.check}>$</styled.Icon_Price>
                      <styled.Content_Icon check={val.check}>
                        {val.price}
                      </styled.Content_Icon>
                    </styled.Icon_Package>
                    <styled.Title_Content>{val.type}</styled.Title_Content>
                    <styled.Border></styled.Border>
                    <styled.Text>
                      <p>{val.content}</p>
                      <p>{val.content}</p>
                      <p>{val.content}</p>
                    </styled.Text>
                    <styled.Button check={val.check}>
                      GET FOR FREE
                    </styled.Button>
                  </styled.Wrap_Detail_Content>
                </React.Fragment>
              );
            })}
          </styled.Wrap_List_Content>
        </styled.Wrap_Content>
      </styled.Background>
    </>
  );
};
export default Package;
