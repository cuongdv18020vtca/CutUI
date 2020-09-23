import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as styled from "./styledVideo";
// import "./video.css";
import { getVideo } from "./videoSlice";
const Video = () => {
  const video = useSelector((state) => state.video.listVideo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideo());
  }, [dispatch]);
  return (
    <>
      <styled.Background>
        <styled.Wrap_Content>
          <styled.Wrap_detail>
            <styled.Video
              data-thumb="https://i.vimeocdn.com/video/127119331.webp?mw=600&mh=338"
              data-thumb-width="600px"
            ></styled.Video>
            <styled.Text>
              <div className="title-section5">
                <div>
                  {" "}
                  <styled.Title_Detail>{video.title}</styled.Title_Detail>
                </div>
                <styled.Content>{video.content}</styled.Content>
              </div>
              <styled.Content></styled.Content>
              <styled.Button>BUY TEMPLATE</styled.Button>
            </styled.Text>
          </styled.Wrap_detail>
        </styled.Wrap_Content>
      </styled.Background>
    </>
  );
};
export default Video;
