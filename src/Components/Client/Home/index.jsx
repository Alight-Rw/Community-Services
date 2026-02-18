import { Statistic } from "./Statistic"
import Hero from "./Hero";
import Slide from "./Slide"
import GlobalSearch from "../../Shared/GlobalSearch";
import { AddNewService } from "../../Provider/Dashboard/AddNewService";


export function Home(){
    return (
         <> 
         <GlobalSearch />
         <Hero />
         <Statistic/>
         <Slide />
         <AddNewService/>
        </>
    )
}