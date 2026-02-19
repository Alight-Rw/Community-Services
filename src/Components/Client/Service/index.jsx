import ServicesPage from "./ServicesCards";
import GlobalSearch from "../../Shared/GlobalSearch";
import GlobalHeader from "../../Shared/GlobalHeader";

export function Service(){
    return (
         <div>
             <GlobalSearch />
             <GlobalHeader title='Available Service' subtitle='Browse and book from our selection of professional services'/>
            <ServicesPage />
            
         </div>
    )
}