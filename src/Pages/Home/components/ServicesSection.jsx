// components/ServicesSection.jsx
import React from "react";

const services = [
  {
    title: "Book Appointments",
    description: "Book directly your desired appointment and get notified your book is done",
    image: "/assets/bookcard.jpg",
  },
  {
    title: "Health Products",
    description: "Discover doctor-approved supplements, vitamins, and essentials.",
    image: "/assets/as.jpg",
  },
  {
    title: "Wellness Tips",
    description: "Daily tips and lifestyle advice to stay active, energized, and stress-free.",
    image: "/assets/tipscard2.jpg",
  },
];

const ServicesSection = () => {
  return (
    <div className="px-20 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <div
      key={index}
      className="relative h-64 rounded-xl overflow-hidden shadow-md bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${service.image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text Content */}
      <div className="absolute bottom-0 p-4 z-10">
        <h3 className="text-lg font-bold mb-1">{service.title}</h3>
        <p className="text-sm font-bold">{service.description}</p>
      </div>
    </div>
  ))}
</div>

     


    </div>
  );
};

export default ServicesSection;




