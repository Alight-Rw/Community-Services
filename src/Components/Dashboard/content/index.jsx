import DashboardNav from "./DashboardNav";
import ServicesStatics from "./ServicesStatics";

export function DashboardContent(){
    return(
        <div className="pt-20"> 
        
            <DashboardNav />
            <ServicesStatics />
        </div>
    )
}
