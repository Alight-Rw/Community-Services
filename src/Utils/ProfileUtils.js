import { useEffect, useState } from "react"
import { APIsRequestService } from "../Services/APIsRequestService"
import { toast } from "react-toastify"

export const ProfileUtils = () => {
    const [data,setData]= useState([])

    useEffect(() => {
        const getProfile = async () => {
            const response = await APIsRequestService.GetProfileAPI()
            const data = response.json()
            if (!response.ok) {
                return toast.error(data.message)
            }
            setData(data)
        }
        getProfile()
    }, [])

    return {data}
}