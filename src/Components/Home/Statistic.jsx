export function Statistic(){
    return(
        <>
        <div className="grid grid-cols-4 bg-secondary justify-items-center px-2 py-6 gap-2 overflow-x-auto">
            
            <div className="text-white border-r border-white pr-2 sm:pr-10 lg:pr-20 text-center">
                <h3 className="text-lg sm:text-2xl lg:text-3xl">1,000</h3>
                <p className="text-xs sm:text-base">avilble services</p>
            </div>

            <div className="text-white border-r border-white pr-2 sm:pr-10 lg:pr-20 text-center">
                <h3 className="text-lg sm:text-2xl lg:text-3xl">15k+</h3>
                <p className="text-xs sm:text-base">server clientes</p>
            </div>

            <div className="text-white border-r border-white pr-2 sm:pr-10 lg:pr-20 text-center">
                <h3 className="text-lg sm:text-2xl lg:text-3xl">87%</h3>
                <p className="text-xs sm:text-base">happy clientes</p>
            </div>

            <div className="text-white text-center">
                <h3 className="text-lg sm:text-2xl lg:text-3xl">30+</h3>
                <p className="text-xs sm:text-base">services categotys</p>
            </div>

        </div>
        </>
    )
}
