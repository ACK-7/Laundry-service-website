import React, { useEffect } from 'react';
import { Check } from 'lucide-react';
import gsap from 'gsap';
import heroImg from "../assets/hero.png";

const HeroSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    );
    gsap.fromTo(
      ".hero-description",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.7 }
    );
    gsap.fromTo(
      ".hero-features",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.7 }
    );
    gsap.fromTo(
      ".hero-cta",
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.7 }
    );
    gsap.fromTo(
      ".hero-image",
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.7 }
    );
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#e0f7fa] to-[#b2ebf2] h-[100vh]  py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="hero-title text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-800">Fresh.</span>{' '}
                <span className="text-blue-500">Fast.</span>{' '}
                <span className="text-gray-800">Flawless</span>
              </h1>
              <p className="hero-description text-gray-600 text-lg mt-6 max-w-md">
                We take care of your laundry so you can focus on what matters 
                most. Professional quality with fast and free delivery.
              </p>
            </div>

            {/* Features List */}
            <div className="hero-features space-y-3">
              <div className=" flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-gray-700">Free pickup and delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-gray-700">Same day turnaround time</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-gray-700">Eco-friendly cleaning options</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Book Service
              </button>
              <button className="text-blue-500 hover:text-blue-600 px-8 py-3 rounded-lg font-medium border border-blue-200 hover:border-blue-300 transition-colors">
                View Pricing
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
              <div className="relative flex justify-center items-center">
                  <img
                  src={heroImg}
                  width="500"
                  height="400"
                  alt="Hero Image"
                  className="hero-image rounded-[40px] object-cover"
                />
              </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;