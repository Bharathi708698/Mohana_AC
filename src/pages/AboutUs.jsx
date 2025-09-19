import Button from "../components/base/Button";
import { Logo } from "../utils/image_distributor";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-24 pb-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About CoolAir Pro
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Your trusted partner for professional AC services since 2009. We
              bring expertise, reliability, and exceptional customer service to
              every job.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    At Mohana Air Conditioner, we are dedicated to providing
                    top-quality air conditioning services to both residential
                    and commercial clients. With years of experience in the HVAC
                    industry, we offer expert consultation, professional
                    installation, and reliable maintenance.
                  </p>
                  {/* <p>
                    Over the years, we've built our reputation on quality workmanship, transparent pricing,
                    and exceptional customer service. We've served over 5,000 satisfied customers and
                    continue to be the go-to choice for residential and commercial AC needs.
                  </p>
                  <p>
                    Today, our team of certified technicians combines traditional craftsmanship with
                    cutting-edge technology to deliver solutions that keep you comfortable year-round.
                  </p> */}
                </div>
                <div className="mt-8">
                  <Button
                    onClick={() => (window.location.href = "/contact-us")}
                  >
                    <i className="ri-phone-line mr-2"></i>
                    Get Started Today
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={Logo}
                  alt="CoolAir Pro technicians at work"
                  className="rounded-lg shadow-xl object-cover w-full h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-6">
                  <i className="ri-target-line text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our mission is simple: to provide reliable, high-quality air
                  conditioning services that exceed our customers' expectations.
                  We aim to deliver expert consultation, flawless installation,
                  and ongoing support that ensures comfort, performance, and
                  efficiency for every client.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-6">
                  <i className="ri-eye-line text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the leading provider of innovative and sustainable
                  air conditioning solutions, creating a more comfortable and
                  energy-efficient world for our customers. We strive to build
                  lasting relationships by consistently delivering exceptional
                  service and value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mx-auto mb-4">
                  <i className="ri-shield-check-line text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Integrity
                </h3>
                <p className="text-gray-600">
                  Honest, transparent business practices in every interaction
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mx-auto mb-4">
                  <i className="ri-star-line text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  Delivering superior quality in every project, big or small
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mx-auto mb-4">
                  <i className="ri-customer-service-2-line text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Service
                </h3>
                <p className="text-gray-600">
                  Putting customers first with responsive, caring support
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mx-auto mb-4">
                  <i className="ri-leaf-line text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Sustainability
                </h3>
                <p className="text-gray-600">
                  Promoting energy-efficient, eco-friendly solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
