import React, { useEffect } from "react";
import FormSubscription from "./formSubscription";
import { useSelector, useDispatch } from "react-redux";
// import "./subscription.css";
import { getSubscription } from "./subscriptionSlice";
import * as styled from "./styledSubscription";
const Subscription = () => {
  const value = useSelector((state) => state.subscription.listSubscription);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubscription());
  }, [dispatch]);

  return (
    <>
      <styled.Background>
        <styled.Container>
          <styled.Content>
            <styled.Elm_18_headline>GROW YOUR REVENUE</styled.Elm_18_headline>
            <styled.Elm_19_headline>
              Maecenas gravida ullacomper nescum seget{" "}
            </styled.Elm_19_headline>
            <div className="wrap_content">
              <styled.Wrap_content_detail>
                {value.map((val, index) => {
                  return (
                    <styled.Icon>
                      <styled.Icon1>
                        <img src={val.icon} alt="" />
                      </styled.Icon1>
                      <div className="elm_23_text">
                        <styled.Text>{val.content}</styled.Text>
                      </div>
                    </styled.Icon>
                  );
                })}
              </styled.Wrap_content_detail>
            </div>
          </styled.Content>
          <FormSubscription />
        </styled.Container>
      </styled.Background>
    </>
  );
};
export default Subscription;
