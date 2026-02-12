import DashboardNav from "../../../__Share__/Dashboard/DashboardNav";
import ServicesStatics from "./ServicesStatics";
import StatusCard from "./StatusCard"
import Paragraphy from "../../../__Share__/Dashboard/Title";
export function DashboardContent(){
    return(
        <div className="pt-20 bg-universal"> 
             
            <DashboardNav />
            <Paragraphy highlight={"Dashboard"} title={"Overview"} description={"Quick summary of key metrics, recent activities, and service performance"}/>
        <StatusCard />
            <ServicesStatics />
        </div>
    )
}
