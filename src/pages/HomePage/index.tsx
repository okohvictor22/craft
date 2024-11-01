import Begin from "@/Components/begin"
import Empower from "@/Components/empower"
import WeAre from "@/Components/who_we_are"
import OurServices from "@/Components/our-services"
import Services from "@/Components/array"
import OurMission from "@/Components/our-mission"
import OurImpacts from "@/Components/our-impacts"
import ServicesCharter from "@/Components/our-services-charter"
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
        services.map((services));
    </main>   
    );
};

export default HomePage;