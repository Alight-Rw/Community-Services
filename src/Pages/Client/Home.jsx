import { useEffect, useState } from "react";
import { Home } from "../../Components/Client/Home"
import { APIsRequestService } from "../../Services/APIsRequestService";
import { toast } from "react-toastify";


export function HomePage(){
    const [data, setData] = useState('');

    useEffect(() => {
        const handleWelcome = async () => {
            try {
                const response = await APIsRequestService.WelcomeAPI();
                const data = await response.json();

                if (!response.ok) {
                    return toast.error('Failed Request:', data.message);
                }

                setData(data);
                return toast.success('Succeeded Request:', data.message);
            } catch (error) {
               toast.error('Failed Error:', error);
            }
        }

        handleWelcome();
    }, []);
  
    return <Home data={data} />
} 