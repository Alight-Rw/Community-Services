import { Auth } from "../../Components/Auth";
import { useLocation } from "react-router-dom";


function Authentication(){
    const location = useLocation();

    return <Auth pathURL={location.pathname}/>
}

export default Authentication;