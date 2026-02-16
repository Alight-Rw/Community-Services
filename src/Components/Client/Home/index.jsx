import { Statistic } from "./Statistic"
import Hero from "./Hero";
import Slide from "./Slide"
import GlobalSearch from "../../__Share__/GlobalSearch";
import { ServicesClient } from "../ServicesClient";


export function Home(){
    return (
         <> 
         <GlobalSearch />
         <Hero />
         <Statistic/>
         <Slide />
        <ServicesClient />
        </>
    )
}