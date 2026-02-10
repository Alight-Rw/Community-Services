
const SetBar = () => {
    return (
        <div className="ml-40 b lg:px-4 py-4 inline-table ">
            <div className=" ">
                <img src="/Logo(2).png" alt="picture" />
                <div className="  text-3xl bg-blue-600 text-white rounded-2xl flex">
                    <div>
                        <img className=" w-20 h-20 ml-4  text-white" src="/Icon(11).png" alt="" />
                    </div>
                    <span className="text-white   mt-5 px-20 text-3xl inline-table">Dashboard</span>
                </div>
            </div>
            <div className="flex mt-5 p-5 ">
                <img className="w-7 h-7" src="/icon1.png" alt="" />
                <span className="text-xl font-bold ml-4">Available Services</span>

            </div>
            <div className="flex p-5">
                <img className="w-7 h-7" src="/icon2.png" alt="" />
                <span className="text-xl font-bold ml-4">Requested Services</span>
            </div>
            <div className="flex p-5">
                <img className="w-10 h-10" src="/icon3.png" alt="" />
                <span className="text-xl font-bold ml-4">Completed Services</span>
            </div>
            <div className="flex p-5">
                <img className="w-10 h-10" src="/icon4.png" alt="" />
                <span className="text-xl font-bold ml-4">Rejected Services</span>
            </div>
            <div className="flex p-5">
                <img className="w-10 h-10" src="/icon5.png" alt="" />
                <span className="text-xl font-bold ml-4">Settings</span>
            </div>
        </div>
    )
}

export default SetBar
