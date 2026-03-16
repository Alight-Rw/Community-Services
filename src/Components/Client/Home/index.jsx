import { Statistic } from "./Statistic"
import Hero from "./Hero";
import Slide from "./Slide"
import GlobalSearch from "../../Shared/GlobalSearch";
import ServicesProcess from "./ServicesProcess";


export function Home({ data }){
    return (
         <>
         <p className="text-center text-4xl md:text-5xl font-extrabold text-secondary mt-10 tracking-wide animate-fade-in">
            {data.message}
        </p>
         <GlobalSearch />
         <Hero />
         <Statistic/>
         <Slide />
         <ServicesProcess />
        </>
    )
}