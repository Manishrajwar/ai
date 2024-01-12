import Header from "../Components/Common/Header";
import SideBar from "../Components/Common/Sidebar";
import "./generate.css";



function GeneratePage() {
 
  return (
    <div className="generateWrap ">
      <Header showBtn={false} />

      <div className="generateContain ">
        <SideBar />

        <div className="generateRight">

          <div className="geneContent">

            <div className="gene_head">
              <p>GENERATE</p>
            </div>

            <div className="gene_Para ">
              <p>
              Provide a final tweak to the prompts used to generate the tweets </p>
            </div>

            <div className="genPara ">
              <p>
              “Based on the tweets from the influencers and the topics of interest provided as inputs, please write for me:”             </p>
            </div>

         <div className="geneMainblock">

            {/* first block */}
            <div className="genBlock">

                <div className="genInputB">
                    <textarea type="text" >An opinion tweet that is aligned with the tone of voice from my previous tweets</textarea>
                </div>

                <button className="genBtn"><span>GENERATE</span></button>
            </div>

            {/* second block */}
            <div className="genBlock">

                <div className="genInputB">
                    <textarea type="text" >An informative tweet about one of the topics of interest, using a light web3 humour</textarea>
                </div>

                <button className="genBtn"><span>GENERATE</span></button>
            </div>

            {/* third block */}
            <div className="genBlock">

                <div className="genInputB">
                    <textarea type="text" >An instructive tweet thread (4+ tweets) explaining a topic that was recently discussed in the topics or by an influencer</textarea>
                </div>

                <button className="genBtn"><span>GENERATE</span></button>
            </div>

            {/* fourth block */}
            <div className="genBlock2">
              <p className="bloc2tit">Max Characters per tweet:</p>
               <div className="bloc2box">
                <input type="number" placeholder="280" />
               </div>
            </div>

            {/* fivth block */}
            <div className="genBlock2">
              <p className="bloc2tit">Thread size (no of tweets):</p>
               <div className="bloc2box">
                <input type="number" placeholder="1" />
               </div>
            </div>

         </div>

          </div>


         

        </div>


      </div>
    </div>
  );
}

export default GeneratePage;
