import Pagination from "../../Shared/Pagination";
import ServicesPageChild from "./ServicesCardsChild";

function ServicesPage() {
 const items = [
    {image: "/ServicesImage/ServiceImg1.png", title: 'Car Auto Repair LTD', category: 'Garage', description: "We provide full car diagnostics and maintenance.", place: "KG 9 Avenue, Kigali", phoneNumber: "+250788888888", time: "08:00-18:00", available: " Available Service", price: "140,000FRw"},
    {image: "/ServicesImage/ServiceImg3.png", title: 'Car Wash Enterprise', category: 'Garage', description: "We provide professional car washing and detailing.", place: "NY 12 Rd, Rebero", phoneNumber: "+250788888888", time: "08:00-18:00",available: " Available Service", price: "500,000FRW"},
    {image: "/ServicesImage/ServiceImg2.png", title: 'Jany Sewing Solutia', category: 'Tailoring', description: "We provide professional tailoring and sewing services.", place: "KG 8 St, Kabeza", phoneNumber: "+250788888888", time: "08:00-18:00", available: " Available Service", price: "500,000FRW"},
    {image: "/ServicesImage/ServiceImg4.png", title: 'Cleaning Services Group', category: 'Cleaning', description: "Reliable cleaning services for homes and businesses.", place: "KG 9 Avenue, Kigali", phoneNumber: "+250788888888", time: "08:00-18:00", available: " Available Service", price: "500,000FRW"},
    {image: "/ServicesImage/ServiceImg5.png", title: 'Plumbing Solutions Ltd', category: 'Plumbing', description: "Professional plumbing installations and repairs.", place: "KG 8 St, Kabeza", phoneNumber: "+250788888888", time: "08:00-18:00", available: "UnAvailable Service", price: "5,000FRW"},
    {image: "/ServicesImage/ServiceImg6.png", title: 'Solar Tech Enterprise', category: 'Energy', description: "Reliable solar energy solutions and installations.", place: "NY 12 Rd, Rebero", phoneNumber: "+250788888888", time: "08:00-18:00", available: " Available Service", price: "12,000FRW"},
    {image: "/ServicesImage/ServiceImg7.png", title: 'KC Decorators Group', category: 'Decoration', description: "Professional decoration services for homes and events.", place: "KG 9 Avenue, Kigali", phoneNumber: "+250788888888", time: "08:00-18:00", available: " Available Service", price: "500,000FRW"},
    {image: "/images/hair-dresser.jpeg", title: 'Queens Hair Studio', category: 'Hair Dressing', description: "Expert hair dressing, styling, and treatments.", place: "KK 3 Rd, Kimihurura", phoneNumber: "+250788111222", time: "09:00-20:00", available: " Available Service", price: "25,000FRW"},
    {image: "/images/discharger.jpeg", title: 'Express Loaders Ltd', category: 'Dischagement', description: "Specializing in heavy lifting and cargo discharge.", place: "KN 5 Rd, Kicukiro", phoneNumber: "+250788333444", time: "07:00-19:00", available: " Available Service", price: "60,000FRW"},
    {image: "/images/electrician2.jpeg", title: 'Elite Electrical Fixers', category: 'Electrical', description: "Expert electrical installations and emergency repairs.", place: "KG 11 Ave, Nyarutarama", phoneNumber: "+250788555666", time: "08:00-17:00", available: " Available Service", price: "15,000FRW"},
    {image: "/images/jardinien.jpeg", title: 'Green Thumb Gardens', category: 'Garden', description: "Professional landscaping and garden design services.", place: "KG 15 Ave, Kibagabaga", phoneNumber: "+250788777888", time: "07:00-17:00", available: " Available Service", price: "45,000FRW"},
    {image: "/images/driver.jpeg", title: 'Safe Ride Academy', category: 'Driving', description: "Comprehensive driving lessons for all levels.", place: "KK 15 Rd, Kicukiro", phoneNumber: "+250788999000", time: "06:00-20:00", available: "Available", price: "120,000FRW"},
    {image: "/images/draw.jpeg", title: 'Visionary Lines Studio', category: 'Drawing', description: "Architectural drafting and technical drawing projects.", place: "KN 2 Ave, City Center", phoneNumber: "+250788123456", time: "08:00-18:00", available: "UnAvailable Service", price: "85,000FRW"},
    {image: "/images/hair-dresser2.jpeg", title: 'Confidence Barbershop', category: 'Hair Style', description: "Modern hair cuts and professional grooming services.", place: "KG 7 Ave, Kacyiru", phoneNumber: "+250788654321", time: "08:00-21:00", available: " Available Service", price: "5,000FRW"},
    {image: "/images/teacher.jpeg", title: 'Excel Tutors Group', category: 'Teaching', description: "Personalized tutoring for students of all ages.", place: "KK 12 St, Kanombe", phoneNumber: "+250788000111", time: "14:00-19:00", available: " Available Service", price: "40,000FRW"}
];

  return (
    <div className=" min-h-screen py-12 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <ServicesPageChild
            key={index}
            Img={item.image}
            title={item.title}
            ServiceName={item.category}
            description={item.description}
            place={item.place}
            phoneNumber={item.phoneNumber}
            time={item.time}
            price={item.price}
            available={item.available}
          />
        ))}
      </div>
      <Pagination/>
    </div>
  );
}

export default ServicesPage;