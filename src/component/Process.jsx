import React, { useEffect } from 'react';
import { Calendar, Truck, Sparkles, Package, ArrowRight, Shirt } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import process from "../assets/process.jpg";

const steps = [
  {
    icon: <Calendar className="w-7 h-7 text-sky-500" />,
    title: "Schedule Pickup",
    description: "Book a convenient time for us to collect your laundry through our website or app."
  },
  {
    icon: <Truck className="w-7 h-7 text-sky-500" />,
    title: "We Collect",
    description: "Our friendly driver will pick up your laundry from your doorstep in our special laundry bags."
  },
  {
    icon: <Shirt className="w-7 h-7 text-sky-500" />,
    title: "Professional Cleaning",
    description: "Your clothes are sorted, cleaned, and folded with the utmost care by our experts."
  },
  {
    icon: <Package className="w-7 h-7 text-sky-500" />,
    title: "Fast Delivery",
    description: "We deliver your fresh, clean clothes back to you at your preferred time and location."
  }
];

const Process = () => {
  useEffect(() => {
    gsap.fromTo(
      ".process-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-title",
          start: "top 80%",
        },
      },
    );

    gsap.fromTo(
      ".process-step",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-steps",
          start: "top 75%",
        },
      },
    );

    gsap.fromTo(
      ".process-image",
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", delay: 1 }
    );

    gsap.fromTo(
      ".connector",
      { height: 0 },
      {
        height: "100%",
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".process-steps",
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-2 md:px-4">
        {/* Title & Subtitle */}
        <div className="text-center mb-14">
          <h2 className="process-title text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple 4-step process makes laundry day a breeze. Just schedule, and we'll handle the rest.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image with Badges */}
          <div className="relative flex justify-center items-center">
            {/* Blue Badge */}
            <div className="absolute -top-8 -left-8 z-10">
              <div className="bg-sky-500 text-white px-6 py-4 rounded-xl shadow-lg text-left">
                <div className="text-sm opacity-90">Average Turnaround</div>
                <div className="text-2xl font-extrabold leading-tight">24 Hours</div>
              </div>
            </div>
            {/* Image */}
            <img
              src={process}
              alt="Customer using laundry service"
              className="process-image w-full max-w-xl rounded-2xl object-cover shadow-xl"
            />
            {/* White Badge */}
            <div className="absolute -bottom-8 -right-8 z-10">
              <div className="bg-white px-6 py-4 rounded-xl shadow-lg text-left">
                <div className="text-sm text-gray-500">Satisfaction Rate</div>
                <div className="text-2xl font-extrabold text-gray-800 leading-tight">99.8%</div>
              </div>
            </div>
          </div>

          {/* Right: Timeline Steps */}
          <div className="flex flex-col justify-center process-steps">
            <div className="relative">
              {/* Vertical Line */}
              <div className="connector absolute left-5 top-8 bottom-0 w-1 bg-sky-100 z-0 rounded-full" style={{height: 'calc(100% - 2rem)'}}></div>
              <div className="space-y-12">
                {steps.map((step, idx) => (
                  <div key={idx} className="process-step relative flex items-start z-10">
                    {/* Icon in circle */}
                    <div className="flex flex-col items-center mr-6">
                      <div className="bg-sky-50 border-2 border-sky-100 w-14 h-14 flex items-center justify-center rounded-full mb-1">
                        {step.icon}
                      </div>
                    </div>
                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mr-2">{step.title}</h3>
                        <ArrowRight className="text-sky-400 w-5 h-5 ml-auto" />
                      </div>
                      <p className="text-gray-600 text-base mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;