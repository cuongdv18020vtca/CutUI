import React, { useEffect } from "react";
import FormSubscription from "./formSubscription";
import { useSelector, useDispatch } from "react-redux";
import "./subscription.css";
import { getSubscription } from "./subscriptionSlice";
const Subscription = () => {
  const value = useSelector((state) => state.subscription.listSubscription);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubscription());
  }, [dispatch]);
  return (
    <>
      <div className="section" id="SECTION3">
        <div className="container">
          <div className="content">
            <h2 id="elm_18_headline">GROW YOUR REVENUE</h2>
            <h2 id="elm_19_headline">
              Maecenas gravida ullacomper nescum seget{" "}
            </h2>
            <div className="wrap_content">
              <div className="wrap_content_detail" style={{ width: "580px" }}>
                {value.map((val, index) => {
                  return (
                    <div
                      key={index}
                      className="icon"
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        className="icon1"
                        style={{ marginRight: "15px", paddingTop: "14px" }}
                      >
                        <img src={val.icon} alt="" />
                      </div>
                      <div className="elm_23_text">
                        <p
                          style={{
                            color: "#8e8386",
                            lineHeight: "25px",
                            fontSize: "14px",
                          }}
                        >
                          {val.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <FormSubscription />
        </div>
      </div>
    </>
  );
};
export default Subscription;
