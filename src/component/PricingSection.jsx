import React, { useEffect } from 'react';
import { Check, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const PricingSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".pricing-header",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pricing-header",
          start: "top 80%",
        },
      },
    );

    gsap.fromTo(
      ".why-choose",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-choose",
          start: "top 85%",
        },
      },
    );

    gsap.fromTo(
      ".weekly-specials",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".weekly-specials",
          start: "top 85%",
        },
      },
    );
  }, []);

  const features = [
    "Affordable prices - excellent results",
    "Free pickup and delivery",
    "Fast turnaround times",
    "Eco-friendly cleaning options",
    "Special care for delicate garments"
  ];

  const weeklySpecials = [
    "Get 15% off your first order",
    "Ask about our loyalty programs"
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="pricing-header text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Affordable Prices – Excellent Results!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enjoy premium laundry care with transparent, competitive rates and exclusive weekly specials.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Why Choose Us */}
          <div className='why-choose ms-20'>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 ">
              Why Choose Us?
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Specials */}
          <div className="weekly-specials">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Weekly Specials
            </h3>
            <div className="space-y-4">
              {weeklySpecials.map((special, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star size={12} className="text-white" />
                  </div>
                  <span className="text-gray-700">{special}</span>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Ready to get started?
              </h4>
              <p className="text-gray-600 mb-4">
                Contact us today for a free quote and experience the difference.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;