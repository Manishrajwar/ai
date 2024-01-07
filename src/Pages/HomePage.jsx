import SetItSection from "../Components/home/SetItSection";
import TrustSection from "../Components/home/TrustSection";
import UserReckonSection from "../Components/home/UserReckonSection";
import HeroSection from "../Components/home/heroSection";
import "./page.css"
import Footer from "../Components/Common/Footer";
import Header from "../Components/Common/Header";

function HomePage(){
    return (
        <div>
              <Header />

       <HeroSection />

       <SetItSection />

       <UserReckonSection />

       <TrustSection />
       <Footer />
     
        </div>
    )
}

export default HomePage;