import DashboardNav from "./DashboardNav";
import ServicesStatics from "./ServicesStatistics";

export function DashboardContent(){
    return(
        <div className="pt-20"> {/* padding-top = height ya nav bar */}
            <DashboardNav />
            <ServicesStatics />
        </div>
    )
}
