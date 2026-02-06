export function Statistic(){
    return(
        <>
        <div className="grid grid-cols-4 bg-secondary justify-items-center px-2 py-6 gap-2 overflow-x-auto">
            
            <div className="text-white border-r border-white pr-2 sm:pr-10 lg:pr-20 text-center">
                <h3 className="text-lg sm:text-2xl lg:text-3xl">1,000</h3>
                <p className="text-xs sm:text-base">Avilble Services</p>
            </div>

            <div className="text-white border-r border-white pr-2 sm:pr-10 lg:pr-20 text-center">
                <h3 className="text-lg sm:text-2xl large:text-3xl">15k+</h3>
                <p className="text-xs sm:text-base">Server Clientes</p>
            </div>

            <div className="text-white border-r border-white pr-2 sm:pr-10 lg:pr-20 text-center">
                <h3 className="text-lg sm:text-2xl lg:text-3xl">87%</h3>
                <p className="text-xs sm:text-base">Happy Clientes</p>
            </div>

            <div className="text-white text-center">
                <h3 className="text-lg sm:text-2xl lg:text-3xl">30+</h3>
                <p className="text-xs sm:text-base">Services Categotys</p>
            </div>

        </div>
        </>
    )
}
