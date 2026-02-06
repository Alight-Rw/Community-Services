export function Statistic(){
    return(
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-1 bg-secondary justify-items-center px-4 py-8 gap-y-6">
            
            <div className="text-white border-b sm:border-b-0 sm:border-r border-white sm:pr-10 lg:pr-20 pb-4 sm:pb-0">
                <div className="justify-items-center">
                    <h3 className="text-2xl md:text-3xl">1,000</h3>
                </div>
                <p className="text-base md:text-xl">avilble services</p>
            </div>

            <div className="text-white border-b sm:border-b-0 sm:border-r border-white sm:pr-10 lg:pr-20 pb-4 sm:pb-0">
                <div className="justify-items-center">
                    <h3 className="text-2xl md:text-3xl">15k+</h3>
                </div>
                <p className="text-base md:text-xl">server clientes</p>
            </div>

            <div className="text-white border-b sm:border-b-0 sm:border-r border-white sm:pr-10 lg:pr-20 pb-4 sm:pb-0">
                <div className="justify-items-center">
                    <h3 className="text-2xl md:text-3xl">87%</h3>
                </div>
                <p className="text-base md:text-xl">happy clientes</p>
            </div>

            <div className="text-white">
                <div className="justify-items-center">
                    <h3 className="text-2xl md:text-3xl">30+</h3>
                </div>
                <p className="text-base md:text-xl">services categotys</p>
            </div>

        </div>
        </>
    )
}
