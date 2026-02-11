import { DashboardContent } from "./content"
import SidBar from "./SidBar"


function Dashboard(){
    return (
        <div className="flex">
        <SidBar/>
        <DashboardContent />
        </div>
    )
}
export default Dashboard