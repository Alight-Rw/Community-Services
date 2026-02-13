import ServicesPageChild from "./ServicesCardsChild";

function ServicesPage() {
  const items = [
    {image: "/ServicesImage/ServiceImg1.png", title: 'Car Auto Repair LTD', category: 'Garage', description: "We provide full car diagnostics, professional detailing, and complete maintenance services to keep your vehicle in excellent condition. Our team is committed to quality workmanship, reliability, and ensuring your car runs smoothly and safely every day.", place: "KG 9 Avenue, Kigali", phoneNumber: "+250788888888", time: "08:00 AM - 18:00 PM", available: "Service Available",price:"140,000FRw"},
  {image: "/ServicesImage/ServiceImg2.png", title: 'Jany Sewing Solutia', category: 'Tailoring', description: "We provide professional tailoring and sewing services, including custom clothing, alterations, and repairs. Our goal is to deliver precise craftsmanship, quality materials, and perfect fitting to meet your style and comfort needs.", place: "KG 8 St Remera-Kabeza", phoneNumber: "+250788888888", time: "08:00 AM - 18:00 PM", available: "Service Available", price:"500,000FRW"},
  {image: "/ServicesImage/ServiceImg3.png", title: 'Car Wash Enterprise', category: 'Garage', description: "We provide professional car washing, detailing, and cleaning services to keep your vehicle looking spotless and well-maintained. Our team ensures quality care, attention to detail, and a fresh, polished finish every time.", place: "NY 12 Rd, Rebero", phoneNumber: "+250788888888", time: "08:00 AM - 18:00 PM", available: "Service Available", price:"500,000FRW"},
  {image: "/ServicesImage/ServiceImg4.png", title: 'Cleaning Services Group', category: 'Cleaning', description: "We provide reliable and professional cleaning services for homes and businesses. Our team ensures thorough, efficient, and high-quality cleaning to create a fresh, healthy, and spotless environment.", place: "KG 9 Avenue, Kigali", phoneNumber: "+250788888888", time: "08:00 AM - 18:00 PM", available: "Service Available", price:"500,000FRW"},
  {image: "/ServicesImage/ServiceImg5.png", title: 'Plumbing Solutions Ltd', category: 'Plumbing', description: "We provide professional plumbing services, including installations, repairs, and maintenance for residential and commercial properties. Our team delivers reliable solutions, quality workmanship, and prompt service to ensure your plumbing systems run smoothly and efficiently.", place: "KG 8 St Remera-Kabeza", phoneNumber: "+250788888888", time: "08:00 AM - 18:00 PM", available: "Service Unavailable",price:"5,000FRW"},
  {image: "/ServicesImage/ServiceImg6.png", title: 'Solar Tech Enterprise', category: 'Energy', description: "We provide reliable solar energy solutions, including installation, maintenance, and system upgrades for homes and businesses. Our goal is to deliver efficient, cost-effective, and sustainable energy systems that power your property with clean energy.", place: "NY 12 Rd, Rebero", phoneNumber: "+250788888888", time: "08:00 AM - 18:00 PM", available: "Service Available" ,price:"12,000FRW"},
  {image: "/ServicesImage/ServiceImg7.png", title: 'KC Decorators Group', category: 'Decoration', description: "We provide professional decoration services for homes, offices, and events. Our team delivers creative designs, quality workmanship, and attention to detail to transform any space into a beautiful and inspiring environment.", place: "KG 9 Avenue, Kigali", phoneNumber: "+250788888888", time: "08:00 AM - 18:00 PM", available: "Service Unavailable", price:"500,000FRW"},

    
    
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
    </div>
  );
}

export default ServicesPage;