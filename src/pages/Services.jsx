import ServiceCard from "../components/base/ServiceCard";
import Button from "../components/base/Button";
import { AC_Service, Fridge } from "../utils/image_distributor";

export default function Services() {
  const acServices = [
    {
      icon: "ri-air-conditioner-line",
      title: "AC Repair & Installation",
      description:
        "Professional repair and installation services for all types of domestic air conditioners",
      features: [
        "Split AC Services",
        "Window AC Services",
        "Central AC Systems",
        "Ductless Mini-Splits",
      ],
      imageUrl: AC_Service,
    },
    {
      icon: "ri-temp-cold-line",
      title: "AC Gas Filling & Maintenance",
      description: "Complete gas refilling and preventive maintenance services",
      features: [
        "Refrigerant Gas Refilling",
        "Filter Cleaning",
        "Coil Maintenance",
        "Performance Optimization",
      ],
      imageUrl: AC_Service,
    },
    {
      icon: "ri-recycle-line",
      title: "Second-hand AC Buy & Sell",
      description: "Buy and sell used air conditioners with quality assurance",
      features: [
        "Quality Inspection",
        "Fair Market Pricing",
        "Installation Included",
        "Warranty Available",
      ],
      imageUrl: Fridge,
    },
  ];

  const otherServices = [
    {
      icon: "ri-fridge-line",
      title: "Refrigerator Services",
      description: "Complete refrigerator repair and maintenance solutions",
      features: [
        "Cooling System Repair",
        "Compressor Issues",
        "Door Seal Replacement",
        "Thermostat Calibration",
      ],
      imageUrl: Fridge,
    },
    {
      icon: "ri-washing-machine-line",
      title: "Washing Machine Services",
      description: "Expert washing machine repair and maintenance",
      features: [
        "Drum Repair",
        "Motor Replacement",
        "Water Pump Issues",
        "Control Panel Repair",
      ],
      imageUrl: Fridge,
    },
    {
      icon: "ri-drop-line",
      title: "Water Purifier Services",
      description: "Water purifier installation, repair and maintenance",
      features: [
        "RO System Services",
        "UV Filter Replacement",
        "Water Quality Testing",
        "Pipe Installation",
      ],
      imageUrl: Fridge,
    },
    {
      icon: "ri-fire-line",
      title: "Water Heater Services",
      description: "Electric and gas water heater repair and installation",
      features: [
        "Electric Heater Repair",
        "Gas Heater Services",
        "Tank Replacement",
        "Safety Inspections",
      ],
      imageUrl: Fridge,
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Comprehensive home appliance services for all your repair,
            installation, and maintenance needs
          </p>
        </div>
      </section>

      {/* AC Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Air Conditioner Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete AC solutions including repair, installation, gas filling,
              maintenance, and second-hand AC buying & selling services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                imageUrl={service.imageUrl}
              >
                <Button
                  size="sm"
                  className="w-full mt-4"
                  onClick={() => scrollToSection("contact")}
                >
                  <i className="ri-phone-line mr-2"></i>
                  Book Now
                </Button>
              </ServiceCard>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Other Appliance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional repair and maintenance services for all your home
              appliances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherServices.map((service, index) => (
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
                  onClick={() => scrollToSection("contact")}
                >
                  Get Quote
                </Button>
              </ServiceCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Need Our Services?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for professional appliance repair and maintenance
            services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => (window.location.href = "/contact-us")}
            >
              <i className="ri-calendar-line mr-2"></i>
              Schedule Service
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = "tel:+15551234567")}
            >
              <i className="ri-phone-fill mr-2"></i>
              Call: +1 (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
