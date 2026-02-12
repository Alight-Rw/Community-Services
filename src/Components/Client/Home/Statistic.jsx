export function Statistic() {
    return (
        <>
            <div className="grid grid-cols-4 bg-secondary px-2 py-6 gap-2 overflow-x-auto">

                <div className="flex flex-col items-center justify-center text-primary border-r border-primary pr-2 sm:pr-10 lg:pr-20">
                    <div className=" flex flex-col items-center justify-center w-full">
                        <h3 className="text-lg sm:text-2xl lg:text-3xl">1,000</h3>
                        <p className="text-xs sm:text-base">Available Services</p>
                    </div>

                </div>

                <div className="text-primary border-r border-primary ">
                    <div className=" flex flex-col items-center justify-center w-full">
                        <h3 className="text-lg sm:text-2xl lg:text-3xl">15k+</h3>
                        <p className="text-xs sm:text-base">Served Clients</p>
                    </div>

                </div>

                <div className=" flex flex-col items-center justify-center text-primary border-r border-primary ">
                  <div className="flex flex-col items-center justify-center w-full">
                    <h3 className="text-lg sm:text-2xl lg:text-3xl">87%</h3>
                    <p className="text-xs sm:text-base">Happy Clients</p>
                    </div>
                   
                </div>

                <div className="flex flex-col items-center text-center text-primary">
                    <div className="flex flex-col items-center justify-center w-full">
                    <h3 className="text-lg sm:text-2xl lg:text-3xl">30+</h3>
                    <p className="text-xs sm:text-base">Service Categories</p>
                    </div>
                </div>

            </div>
        </>
    )
}
