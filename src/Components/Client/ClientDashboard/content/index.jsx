import DashboardNav from "../../../__Share__/Dashboard/DashboardNav";
import ServicesStatics from "./ServicesStatics";
import StatusCard from "./StatusCard"
export function DashboardContent(){
    return(
        <div className="pt-20 bg-universal"> 
             
            <DashboardNav />
        <StatusCard />
            <ServicesStatics />
        </div>
    )
}
