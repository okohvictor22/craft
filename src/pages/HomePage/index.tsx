import Begin from "@/Components/begin"
import Empower from "@/Components/empower"
import WeAre from "@/Components/who_we_are"
import OurServices from "@/Components/our-services"
import Services from "@/Components/array"
import OurMission from "@/Components/our-mission"
import OurImpacts from "@/Components/our-impacts"
import ServicesCharter from "@/Components/our-services-charter"
import ConferenceTraining from "@/Components/comference-training"
import Event from "@/Components/event"
import GetInTouch from "@/Components/get-in-touch"
import Footer from "@/Components/footer"
const HomePage = () => {
    return (
    <main>
        <Begin />
       < Empower/>
        < WeAre/>
        <OurServices/>
        <Services/>
        <OurMission/>
        <OurImpacts/>
        <ServicesCharter/>
        <ConferenceTraining/>
        <Event/>
        <GetInTouch/>
        <Footer/>
        services.map((services));
    </main>   
    );
};

export default HomePage;