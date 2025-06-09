import React from 'react';
// import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import {  Shirt, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const quickLinks = [
    "Our Services",
    "How it Works",
    "Pricing",
    "Testimonials",
    "Contact Us"
  ];

  const services = [
    "Wash & Fold",
    "Dry Cleaning",
    "Express Service",
    "Eco-Friendly Cleaning",
    "Pickup & Delivery"
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="footer-content grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="flex items-center gap-2 mb-6 cursor-pointer"
            >
              <Shirt className="h-8 w-8 text-primary" />
              <span className="flex flex-col leading-tight">
                <span className="font-extrabold text-xl sm:text-2xl text-white group-hover:text-primary transition">
                  Your Laundry
                </span>
                <span className="font-semibold text-xs sm:text-sm tracking-wide text-primary/80 uppercase">
                  Services
                </span>
              </span>
            </ScrollLink>
            <p className="mb-6 text-gray-400">
              Professional laundry and dry cleaning services with free pickup
              and delivery. Making laundry day a breeze since 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="hover:text-primary transition-colors cursor-pointer"
                  activeClass="text-primary"
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="process"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="hover:text-primary transition-colors cursor-pointer"
                  activeClass="text-primary"
                >
                  How It Works
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="pricing"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="hover:text-primary transition-colors cursor-pointer"
                  activeClass="text-primary"
                >
                  Pricing
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="hover:text-primary transition-colors cursor-pointer"
                  activeClass="text-primary"
                >
                  Testimonials
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="hover:text-primary transition-colors cursor-pointer"
                  activeClass="text-primary"
                >
                  Contact Us
                </ScrollLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-lg mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Wash & Fold</li>
              <li>Dry Cleaning</li>
              <li>Express Service</li>
              <li>Eco-Friendly Cleaning</li>
              <li>Commercial Services</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-lg mb-6">
              Service Area
            </h3>
            <p className="mb-4 text-gray-400">
              We proudly serve all of Kasanga and surrounding
              neighborhoods, including Kabalagala, Muyenga, Ggaba, Bunga, Nsambya. Contact us to confirm service in your area!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Your Laundry Services. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;