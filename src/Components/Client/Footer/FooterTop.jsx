import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
const Footertop = () => {

    return (
        <div className="flex flex-col items-center md:items-start py-10 md:flex-row md:justify-between gap-10 px-mobilePaddingn md:px-componentPadding bg-universal">


            <div >
                <h1 className="flex flex-col-1  font-bold  border-b-4  w-18 gap-2 sm:px-mobilePadding">
                    <span className="text-2xl">About</span>
                    <span className="py-1"> community</span>
                    <span className="py-1">service</span></h1>

                <ul className="list-disc pl-5 py-4 ">

                    <li>About Us</li>
                    <li>Years of experience</li>
                    <li>Why customers trust us</li>
                </ul>
                <div className="flex gap-10 mt-5 mb-5">
                    <FaFacebookF  color="" size={40} />
                    <FaSquareInstagram 
                     size={40} />
                    <FaXTwitter color="black" size={40} />
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold  border-b-4 w-25">Supports</h2>
                <ul className="list-disc pl-5 py-4 ">

                    <li>Email Supports</li>
                    <li>Phone Supports</li>
                    <li>24 Hours Available</li>
                </ul>


            </div>
            <div>
                <h2 className="text-2xl font-bold  border-b-4 w-33">Contact Us</h2>
                <ul className="list-disc pl-5 py-4 ">

                    <li>Office Location</li>
                    <li>+25078888888</li>
                    <li>coding-school@gmail.com</li>
                </ul>
            </div>

        </div>


    )
}

export default Footertop
