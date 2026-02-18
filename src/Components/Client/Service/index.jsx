import ServicesPage from "./ServicesCards";
import GlobalSearch from "../../Shared/GlobalSearch";
import SectionHeader from "../../Shared/SectionHeader";
export function Service(){
    return (
         <div>
             <GlobalSearch />
             <SectionHeader/>
            <ServicesPage />
         </div>
    )
}