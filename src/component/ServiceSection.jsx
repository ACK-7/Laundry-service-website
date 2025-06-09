import React, { useEffect } from 'react';
import { Droplets, Shirt, Zap, Leaf, Wind, Package } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".services-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-title",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      ".service-icon",
      { scale: 0, rotation: -45 },
      {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 75%",
        },
      }
    );
  }, []);

  const services = [
    {
      icon: Droplets,
      color: 'bg-blue-500',
      title: "Wash & Fold",
      description: "Professional washing, drying, and folding of your everyday clothes and linens."
    },
    {
      icon: Shirt,
      color: 'bg-purple-400',
      title: "Dry Cleaning",
      description: "Expert care for your delicate garments, suits, dresses, and special fabrics."
    },
    {
      icon: Zap,
      color: 'bg-green-500',
      title: "Express Service",
      description: "Same-day service when you need your clothes cleaned in a hurry."
    },
    {
      icon: Leaf,
      color: 'bg-orange-400',
      title: "Eco-Friendly",
      description: "Environmentally conscious cleaning options that are gentle on your clothes and the planet."
    },
    {
      icon: Wind,
      color: 'bg-red-500',
      title: "Ironing & Pressing",
      description: "Crisp ironing and professional pressing for a sharp, polished look."
    },
    {
      icon: Package,
      color: 'bg-teal-600',
      title: "Pickup & Delivery",
      description: "Convenient door-to-door laundry pickup and delivery service at your schedule."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#f7f9fa]">
      <div className="container mx-auto px-2 md:px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="services-title text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Laundry Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a complete array of laundry services to make your weekly lives a bit easier, cleaner, fresher.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card flex flex-col items-start bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border-0"
              >
                <div className={`service-icon ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;