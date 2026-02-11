export function MyStatistic(){
    return(
        <>
        <div className="grid grid-cols-4 bg-secondary justify-items-center px-2 py-6 gap-2 overflow-x-auto">

            <div className="text-white border-r border-white pr-2 sm:pr-10 lg:pr-20 text-center">
                <div className="justify-items-center">
                <h3 className="text-lg sm: lg:">1,000</h3>
                <p className="text-xs sm:text-base t">Avilble Services</p>
                </div>
            </div>

            <div className="text-white border-r border-white pr-2 sm:pr-10 lg:pr-20 text-center">
                <div className="justify-items-center">
                <h3 className="text-lg sm: lg:">15k+</h3>
                <p className="text-xs sm:text-base t">Server Clientes</p>
                </div>
            </div>

            <div className="text-white border-r border-white pr-2 sm:pr-10 lg:pr-20 text-center">
                <div className="justify-items-center">
                <h3 className="text-lg sm: lg:">87%</h3>
                <p className="text-xs sm:text-base ">Happy Clientes</p>
                </div>
            </div>

            <div className="text-white text-center">
                <div className="justify-items-center">
                <h3 className="text-lg sm: lg:">30+</h3>
                <p className="text-xs sm:text-base">Services Categotys</p>
                </div>
            </div>

        </div>
        </>
    )
}