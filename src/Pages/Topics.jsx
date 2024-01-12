import "./topics.css";
import Header from "../Components/Common/Header";
import SideBar from "../Components/Common/Sidebar";

const accData = ["NFTs", "Cryptocurrency"];

function Topics() {
  return (
    <div className="topicWrapper">
      <Header showBtn={false}  />

      <div className="topicContain">
        <SideBar />

        <div className="topicRightCont">
          <div className="topicContent">

            <div className="headTitl">
              <p>TOPICS</p>
            </div>

            <div className="headPara">
              <p>
                Add the topics of interest that you’d like to generate tweets
                about
              </p>
            </div>

            <div className="topicMainBlock">
              {/* first row  */}
              <div className="topicCol1">
                {/* input field */}
                <div className="inputContTopic">
                  <input
                    type="text"
                    placeholder="Add topics of interest (comma separated)"
                  />
                  <span className="cursor_pointer_tpic">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="25"
                      viewBox="0 0 26 25"
                      fill="none"
                      className=""
                    >
                      <g clip-path="url(#clip0_3110_185)">
                        <path
                          d="M13 0.390625C6.31055 0.390625 0.890625 5.81055 0.890625 12.5C0.890625 19.1895 6.31055 24.6094 13 24.6094C19.6895 24.6094 25.1094 19.1895 25.1094 12.5C25.1094 5.81055 19.6895 0.390625 13 0.390625ZM20.0312 13.8672C20.0312 14.1895 19.7676 14.4531 19.4453 14.4531H14.9531V18.9453C14.9531 19.2676 14.6895 19.5312 14.3672 19.5312H11.6328C11.3105 19.5312 11.0469 19.2676 11.0469 18.9453V14.4531H6.55469C6.23242 14.4531 5.96875 14.1895 5.96875 13.8672V11.1328C5.96875 10.8105 6.23242 10.5469 6.55469 10.5469H11.0469V6.05469C11.0469 5.73242 11.3105 5.46875 11.6328 5.46875H14.3672C14.6895 5.46875 14.9531 5.73242 14.9531 6.05469V10.5469H19.4453C19.7676 10.5469 20.0312 10.8105 20.0312 11.1328V13.8672Z"
                          fill="#FF8080"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3110_185">
                          <rect
                            width="25"
                            height="25"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>

                <div className="max10T">
                  <p>Max 10</p>
                </div>
              </div>

              {/* secons row  */}

              <div className="topicCol2 space-y-[2px]">
                {accData.map((acc, index) => (
                  <div key={index} className="singleTopic">
                    <p className="TopicId">{acc}</p>

                  </div>
                ))}
              </div>

              {/* fourth  */}
              <div className="TopicfetchTwetCont">
                <div className="titl">
                  <p>Fetch Only Topic Tweets With:</p>
                </div>

                <div className="ftbox1">
                  <p className="topicComTex">More than </p>

                  <div className="TopicomBox">
                    <input type="number" placeholder="1.000" />
                  </div>

                  <span className="topicComTex">Likes</span>
                </div>
                {/* box2 */}
                <div className="ftbox1">
                  <p className="topicComTex">More than </p>

                  <div className="TopicomBox">
                    <input type="number" placeholder="20" />
                  </div>

                  <span className="topicComTex">Comments</span>
                </div>
                {/* box3 */}
                <div className="ftbox1">
                  <p className="topicComTex">More than </p>

                  <div className="TopicomBox">
                    <input type="number" placeholder="10.000" />
                  </div>

                  <span className="topicComTex">Views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topics;
