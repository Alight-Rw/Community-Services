
const Footertop = () => {
    const items = [
        {
            heard: "Supports",
            listOne: "Email Supports",
            listTwo: "Phone Supports",
            listThree: "24 Hours Available"
        },
        {
            heard: "Contact Us",
            listOne: "Office Location",
            listTwo: "+250787684171",
            listThree: "coding-school@gmail.com"
        }
    ]
    return (
        <div className="flex  bg-universal px-60">
            <div>
                <div className="flex">
                    <h1 className="text-2xl font-bold mb-5 border-b ">About</h1><span className="font-extrabold mt-1 m-0 lg:text-xl ">community service</span>
                </div>
                <ul className="list-disc pl-5 ">
                    <li>About Us</li>
                    <li>Years of experience</li>
                    <li>Why customers trust us</li>
                </ul>
                <div className="flex gap-10 mt-5 mb-5">
                     <img src="/images4.png" alt="icon" />
                    <img src="/images2.png" alt="icon" />
                    <img src="/images3.png" alt="icon" />
                   
                </div>


            </div>
            <div className="ml-40 justify-between  ">
                <div className="grid grid-cols-2 ">
                    {items.map((item, index) => (
                        <div key={index}>
                            <h1 className="text-2xl font-bold  mb-5 lg:grid grid-cols-2 md:flex underline">{item.heard}</h1>
                            <ul className="list-disc pl-5">
                                <li>{item.listOne}</li>
                                <li>{item.listTwo}</li>
                                <li>{item.listThree}</li>

                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footertop
