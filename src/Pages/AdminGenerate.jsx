import Header from "../Components/Common/Header";
import SideBar from "../Components/Common/Sidebar";
import "./adminGenerate.css";



function GeneratePage() {
 
  return (
    <div className="adminGenWrap ">
      <Header showBtn={false} />

      <div className="adminGenContain ">
        <SideBar />

        <div className="adminGenRight">

          <div className="adminGenContent">

                 <div className="adminGenHead">
                    <p>ADMIN</p>
                 </div>

                 <div className="adMaxTw">
                    <p className="adtitl">Max Tweets fetched per Influencer:</p>
                    <div className="adbox">
                        <input type="text" placeholder="5" />
                    </div>
                 </div>

                 <div className="adMaxTw2">
                    <p className="adtitl">Max Tweets fetched per Influencer:</p>
                    <div className="adbox">
                        <input type="text" placeholder="8" />
                    </div>
                 </div>


{/* first one  */}
                 <div className="adPromtGene">

                    <div className="title">
                        <p>Prompt for GENERATING new content</p>


                    </div>

                     <div className="adMainCont">

                         <div className="generateText">

                            <textarea placeholder={`${"Please write unique tweet content for me, following the instructions given in the USER INSTRUCTIONS section.The INFLUENCER TWEETS and TRENDING TWEETS sections provide content information that should be used as the basis for the new tweet content. "}
${`The tone/language and style of any new tweet written should be based on  MY PREVIOUS TWEETS.`} 
                            `} name="" id="" cols="30" rows="10">
                            
                            </textarea>


                         </div>

<button className="updateBtn"><span>UPDATE</span></button>

                     </div>

                 </div>

                 {/* second promt  */}

                 <div className="promptReply">

                    <div className="title">
                        <p>Prompt for REPLYING to COMMENTS</p>
                    </div>

                     <div className="replyContent">

                         <div className="replygeneText">

                            <textarea placeholder={`${"Please write unique tweet content for me, following the instructions given in the USER INSTRUCTIONS section.The INFLUENCER TWEETS and TRENDING TWEETS sections provide content information that should be used as the basis for the new tweet content. "}
${`The tone/language and style of any new tweet written should be based on  MY PREVIOUS TWEETS.`} 
                            `} name="" id="" cols="30" rows="10">
                            
                            </textarea>


                         </div>
                         
<button className="updateBtn"><span>UPDATE</span></button>

                     </div>

                 </div>

          </div>


         

        </div>


      </div>
    </div>
  );
}

export default GeneratePage;
