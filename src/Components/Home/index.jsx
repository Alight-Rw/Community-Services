import { Statistic } from "./Statistic"


import Hero from "./Hero";
import Slide from "./Slide"
import GlobalSearch from "./GlobalSearch";
import { MyStatistic } from "./MyStatistic";
export function Home(){
    return (
         <> 
         <GlobalSearch />
         <Hero />
         <Statistic/>
         <Slide />
         <MyStatistic/>
         
        </>






   
    )
}