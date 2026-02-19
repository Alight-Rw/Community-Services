import { Statistic } from "./Statistic"
import Hero from "./Hero";
import Slide from "./Slide"
import GlobalSearch from "../../Shared/GlobalSearch";
import ServicesProcess from "./ServicesProcess";


export function Home(){
    return (
         <> 
         <GlobalSearch />
         <Hero />
         <Statistic/>
         <Slide />
         <ServicesProcess />
        </>
    )
}