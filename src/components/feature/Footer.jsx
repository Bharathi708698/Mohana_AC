import { Link } from 'react-router-dom';
import { Logo } from '../../utils/image_distributor';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-15 h-15 flex items-center justify-center">
                 <img  src={Logo} />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: '"Pacifico", serif' }}>
                Mohana Air Conditioners
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted partner for all home appliance services. We provide professional repair, 
              installation, and maintenance services for AC, refrigerators, washing machines, and more.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">AC Services</li>
              <li className="text-gray-400">Refrigerator Repair</li>
              <li className="text-gray-400">Washing Machine</li>
              <li className="text-gray-400">Water Purifier</li>
              <li className="text-gray-400">Water Heater</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Mohana Air Conditioners. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              {/* <a 
                href="https://bharathi708698.github.io/Professional-Portfolio/" 
                className="text-gray-400 hover:text-blue-500 text-sm transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Designed and Developed By Bharathi ❣️
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
