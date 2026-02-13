import { Statistic } from "./Statistic"
import Hero from "./Hero";
import Slide from "./Slide"
import GlobalSearch from "../../__Share__/GlobalSearch";
import { DashboardPage } from "../ClientDashboard/content/DashboardPage";

export function Home(){
    return (
         <> 
         <GlobalSearch />
         <Hero />
         <Statistic/>
         <Slide />
         <DashboardPage/>
        </>
    )
}