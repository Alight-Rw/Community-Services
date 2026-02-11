import DashboardNav from "./DashboardNav";
import ServicesStatics from "./ServicesStatics";
import StatusCard from "../content/StatusCard"
export function DashboardContent(){
    return(
        <div className="pt-20 bg-universal"> 
        
            <DashboardNav />
        <StatusCard />
            <ServicesStatics />
        </div>
    )
}
