import { useState } from "react";
import Header from "../Components/Common/Header";
import SideBar from "../Components/Common/Sidebar";
import "./accountFeed.css";

const accData = [
  "@NFT_GOD",
  "@ZssBecker",
  "@BrianDEvans",
  "@EarlOfHurl",
  "@BenPGothard",
  "@ETH_Daily",
  "@chainlink",
  "@CoinMarketCap",
];

function AccountFeedPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };
  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  return (
    <div className="accFeedWrap ">
      <Header showBtn={false} />

      <div className="accFeeContain ">
        <SideBar />

        <div className="rightContainer">
          <div className="accFedContent">
            <div className="acc_head">
              <p>ACCOUNT FEEDS</p>
            </div>

            <div className="acc_Para ">
              <p>
                Add the accounts of influencers that you’d like to draw
                inspiration from
              </p>
            </div>

            <div className="accMainBlock">
              {/* first row  */}
              <div className="accCol1">
                {/* input field */}
                <div className="inputCont">
                  <input
                    type="text"
                    placeholder="Add influencer account (comma separated)"
                  />
                  <span className="cursor_pointer">
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

                <div className="max10">
                  <p>Max 10</p>
                </div>
              </div>

              {/* secons row  */}

              <div className="accCol2 space-y-[2px]">
                {accData.map((acc, index) => (
                  <div key={index} className="singleAcc">
                    <p className="accId">{acc}</p>

                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <path
                          d="M7.25 5.54167L8.75 9.5L7.25 13.4583H8.75L9.5 11.4792L10.25 13.4583H11.75L10.25 9.5L11.75 5.54167H10.25L9.5 7.52083L8.75 5.54167H7.25ZM4.25 2.375H14.75C15.1478 2.375 15.5294 2.54181 15.8107 2.83875C16.092 3.13568 16.25 3.53841 16.25 3.95833V15.0417C16.25 15.4616 16.092 15.8643 15.8107 16.1613C15.5294 16.4582 15.1478 16.625 14.75 16.625H4.25C3.85218 16.625 3.47064 16.4582 3.18934 16.1613C2.90804 15.8643 2.75 15.4616 2.75 15.0417V3.95833C2.75 3.53841 2.90804 3.13568 3.18934 2.83875C3.47064 2.54181 3.85218 2.375 4.25 2.375Z"
                          fill="#333333"
                        />
                      </svg>
                    </span>
                  </div>
                ))}
              </div>

              {/* fourth  */}
              <div className="fetchTwetCont">
                <div className="titl">
                  <p>Fetch Only Influencer Tweets With:</p>
                </div>

                <div className="ftbox1">
                  <p className="comTex">More than </p>

                  <div className="comBox">
                    <input type="number" placeholder="1.000" />
                  </div>

                  <span className="comTex">Likes</span>
                </div>
                {/* box2 */}
                <div className="ftbox1">
                  <p className="comTex">More than </p>

                  <div className="comBox">
                    <input type="number" placeholder="20" />
                  </div>

                  <span className="comTex">Comments</span>
                </div>
                {/* box3 */}
                <div className="ftbox1">
                  <p className="comTex">More than </p>

                  <div className="comBox">
                    <input type="number" placeholder="10.000" />
                  </div>

                  <span className="comTex">Views</span>
                </div>
              </div>

              {/* fivth  */}
              <div className="engInfuCont">
                {/* first col */}
                <div className="engCol1">
                  <p>Engage With Influencers</p>
                </div>

                {/* second col */}
                <div className="engCol2">
                  <div
                    className={`custom-checkbox ${isChecked ? "checked" : ""}`}
                    onClick={handleCheckboxChange}
                  >
                    {/* Your SVG code goes here */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                    >
                      <path
                        d="M16.8809 0.5L15.0638 2.39614L7.74259 9.71736L5.60942 7.66321L3.71328 5.76706L0 9.48034L1.89614 11.3765L5.84644 15.3268L7.66358 17.2229L9.55972 15.3268L18.7771 6.10942L20.6732 4.21328L16.8809 0.5Z"
                        fill="#FF8080"
                      />
                    </svg>
                  </div>
                  {/*  */}
                  <p className="engText">
                    Automatically ‘Like’ every post with more than{" "}
                  </p>

                  <div className="comBox2">
                    <input type="number" placeholder="10" />
                  </div>

                  <p className="engText">Likes</p>
                </div>

                {/* third col */}
                <div className="engCol2">
                  <div
                    className={`custom-checkbox ${isChecked1 ? "checked" : ""}`}
                    onClick={handleCheckboxChange1}
                  >
                    {/* Your SVG code goes here */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                    >
                      <path
                        d="M16.8809 0.5L15.0638 2.39614L7.74259 9.71736L5.60942 7.66321L3.71328 5.76706L0 9.48034L1.89614 11.3765L5.84644 15.3268L7.66358 17.2229L9.55972 15.3268L18.7771 6.10942L20.6732 4.21328L16.8809 0.5Z"
                        fill="#FF8080"
                      />
                    </svg>
                  </div>

                  <p className="engText">
                    Automatically comment on every post with more than{" "}
                  </p>

                  <div className="comBox2 gapLess">
                    <input type="number" placeholder="10" />
                  </div>

                  <p className="engText">Comments (Experimental)</p>
                </div>

                {/* fourth col */}
                <div className="engCol2">
                  <div
                    className={`custom-checkbox ${isChecked2 ? "checked" : ""}`}
                    onClick={handleCheckboxChange2}
                  >
                    {/* Your SVG code goes here */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                    >
                      <path
                        d="M16.8809 0.5L15.0638 2.39614L7.74259 9.71736L5.60942 7.66321L3.71328 5.76706L0 9.48034L1.89614 11.3765L5.84644 15.3268L7.66358 17.2229L9.55972 15.3268L18.7771 6.10942L20.6732 4.21328L16.8809 0.5Z"
                        fill="#FF8080"
                      />
                    </svg>
                  </div>

                  <p className="engText">
                    Automatically repost every post with more than{" "}
                  </p>

                  <div className="comBox2">
                    <input type="number" placeholder="50" />
                  </div>

                  <p className="engText">Comments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountFeedPage;
