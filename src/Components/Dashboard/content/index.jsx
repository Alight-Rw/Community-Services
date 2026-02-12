import DashboardNav from "./DashboardNav";
import Paragraphy from "./Paragraph";
import ServicesStatics from "./ServicesStatics";

export function DashboardContent(){
    return(
        <div className="pt-20 bg-universal"> 
             <Paragraphy highlight={"Dashboard"} title={"Overview"} description={"Quick summary of key metrics, recent activities, and service performance"}/>
            <DashboardNav />
            <ServicesStatics />
        </div>
    )
}
