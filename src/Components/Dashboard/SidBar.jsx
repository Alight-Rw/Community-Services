
import { useState } from "react"

const SidBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "Dashboard", icon: "/Icon(11).png", active: true },
    { name: "Requested Services", icon: "/icon2.png" },
    { name: "Completed Services", icon: "/icon3.png" },
    { name: "Rejected Services", icon: "/icon4.png" },
    { name: "Settings", icon: "/icon5.png" },
  ]

  return (
    <div className="flex">

      
      <div
        className={`
          bg-primary shadow-lg h-screen p-4
          transition-all duration-300
          ${isOpen ? "w-[300px]" : "w-[90px]"}
          lg:w-[300px]
          flex flex-col justify-between
        `}
      >

        
        <div className="flex justify-between items-center">
          <img src="/Logo(2).png" alt="logo" className="w-10 h-10" />

          
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            <img className="w-8 h-8" src="/Close Icon.png" alt="toggle" />
          </div>
        </div>

        
        <div className="mt-6 space-y-6">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer
                ${item.active ? "bg-blue-600 text-white":''}
              `}
            >
              <img className="w-6 h-6" src={item.icon} alt={item.name} />
              
              <span className={`${isOpen ? "block":''} lg:block`}>
                {item.name}
              </span>
            </div>
          ))}
        </div>

        
        <div className={`flex items-center mt-10 ${!isOpen ? "justify-center" : "justify-between"} lg:justify-between`}>
          <h1 className="rounded-2xl  font-bold bg-blue-100 px-2 py-2">Ni</h1>
          <span className={`${isOpen ? "block" : ""} lg:block ml-5 truncate`}>
            niyo.alice@codingschool...
          </span>
          {isOpen && (
            <button>
              <img className="w-10 h-10 ml-10" src="/Close Icon(1).png" alt="logout" />
            </button>
          )}
        </div>

      </div>
    </div>
  )
}

export default SidBar
