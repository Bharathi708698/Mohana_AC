import { useEffect } from "react";
// import Header from '../../components/feature/Header';
// import Footer from '../../components/feature/Footer';
import Button from "../components/base/Button";
import ServiceCard from "../components/base/ServiceCard";
import { AC_Service, Fridge, Logo, WashingMachine, WaterHeater, WaterPurifier } from "../utils/image_distributor";
import Hero from "../assets/heroSection.jpg";

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: "ri-air-conditioner-line",
      title: "AC Services",
      description:
        "Complete air conditioning solutions for all domestic AC types",
      features: [
        "Repair & Installation",
        "Gas Filling",
        "Regular Maintenance",
        "Second-hand Buy/Sell",
      ],
      imageUrl: AC_Service,
    },
    {
      icon: "ri-fridge-line",
      title: "Refrigerator Services",
      description: "Expert refrigerator repair and maintenance services",
      features: [
        "Cooling Issues",
        "Compressor Repair",
        "Temperature Control",
        "Ice Maker Repair",
      ],
      imageUrl: Fridge,
    },
    {
      icon: "ri-washing-machine-line",
      title: "Washing Machine Services",
      description: "Comprehensive washing machine repair and maintenance",
      features: [
        "Drum Repair",
        "Motor Issues",
        "Water Leakage",
        "Spin Problems",
      ],
      imageUrl: WashingMachine,
    },
    {
      icon: "ri-drop-line",
      title: "Water Purifier Services",
      description: "Water purifier installation, repair and filter replacement",
      features: [
        "Filter Replacement",
        "Installation",
        "Water Quality Testing",
        "Maintenance",
      ],
      imageUrl: WaterPurifier,
    },
    {
      icon: "ri-fire-line",
      title: "Water Heater Services",
      description: "Electric and gas water heater repair and installation",
      features: [
        "Heating Element Repair",
        "Thermostat Issues",
        "Installation",
        "Safety Checks",
      ],
      imageUrl: WaterHeater ,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Hero})`,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Professional Home Appliance Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expert repair, installation, and maintenance for all your home
            appliances. Quick, reliable, and affordable services for AC,
            refrigerator, washing machine, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("services")}
              className="animate-bounce-slow"
            >
              <i className="ri-service-line mr-2"></i>
              View Our Services
            </Button>
            <Button
              variant="inline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900"
            >
              <i className="ri-phone-line mr-2"></i>
              +91 73389 65589
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive home appliance services with expert
              technicians, genuine parts, and guaranteed satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                imageUrl={service.imageUrl}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4"
                  onClick={() => (window.location.href = "/services")}
                >
                  Learn More
                </Button>
              </ServiceCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={() => (window.location.href = "/services")}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                About Mohana Air Conditioner
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are dedicated to providing top-quality air conditioning
                services to both residential and commercial clients. With years
                of experience in the HVAC industry, we offer expert
                consultation, professional installation, and reliable
                maintenance.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    5000+
                  </div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    15+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-600">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <img
                src={Logo}
                alt="Mohana Team"
                className="rounded-xl shadow-lg w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Mohana AC?
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              We're committed to providing the best appliance services with
              unmatched quality and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white text-blue-600 rounded-full mx-auto mb-4">
                <i className="ri-time-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
              <p className="opacity-90">
                Same-day service available with 2-hour response time
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white text-blue-600 rounded-full mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="opacity-90">
                Fully licensed technicians with comprehensive insurance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white text-blue-600 rounded-full mx-auto mb-4">
                <i className="ri-money-dollar-circle-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fair Pricing</h3>
              <p className="opacity-90">
                Transparent pricing with no hidden charges
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white text-blue-600 rounded-full mx-auto mb-4">
                <i className="ri-customer-service-2-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="opacity-90">
                Round-the-clock customer support for emergencies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Fix Your Appliances?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't let broken appliances disrupt your daily routine. Contact us
            today for fast, reliable, and affordable repair services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => (window.location.href = "/contact-us")}
            >
              <i className="ri-phone-line mr-2"></i>
              Book Service Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = "tel:+15551234567")}
            >
              <i className="ri-phone-fill mr-2"></i>
              +91 73389 65589
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
