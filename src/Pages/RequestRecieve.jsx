import "./requestAccess.css"
import Header from "../Components/Common/Header"

function RequestRecieve(){
    return (
        <div className="reqRecWrap">

            <Header showBtn={false} showSmBtn={false} />

            <div className="reqRecContain">

                <div className="rec_head">
                Request Received
                </div>

                <div className="reci_para">
                    <p>We appreciate your interest in our service. As we work on expanding our capacity, access is currently limited. Please bear with us as we make necessary adjustments.</p>

                    <p>If your request is approved, you’ll receive an email with instructions.</p>
                </div>

            </div>

        </div>
    )
}
export default RequestRecieve;