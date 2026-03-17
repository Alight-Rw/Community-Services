import { useEffect, useState } from "react";
import { Home } from "../../Components/Client/Home"
import { APIsRequestService } from "../../Services/APIsRequestService";


export function HomePage(){
    const [data, setData] = useState('');

    useEffect(() => {
        const handleWelcome = async () => {
            try {
                const response = await APIsRequestService.WelcomeAPI();
                const data = await response.json();

                if (!response.ok) {
                    return console.error('Failed Request:', data.message);
                }

                setData(data);
                return console.log('Succeeded Request:', data.message);
            } catch (error) {
                console.error('Failed Error:', error);
            }
        }

        handleWelcome();
    }, []);
  
    return <Home data={data} />
} 