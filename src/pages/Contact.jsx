import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section
        className="relative pt-24 pb-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Ready to schedule your Home Appliances service? Contact our friendly team today
              for expert advice and fast, reliable service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info - Side by Side */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Quick Contact */}
            <div className="bg-blue-600 text-white rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg">
                    <i className="ri-phone-line"></i>
                  </div>
                  <div>
                    <p className="font-medium">Call Us </p>
                    <p className="text-blue-100">+91 73389 65589</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg">
                    <i className="ri-mail-line"></i>
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-blue-100">xyz@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg">
                    <i className="ri-time-line"></i>
                  </div>
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-blue-100 text-sm">
                      Mon-Fri: 7AM-7PM
                      <br />
                      Sat: 8AM-5PM
                      <br />
                      Sun: Emergency Only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Location */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Location</h3>
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
                  <i className="ri-map-pin-line"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Mohana Air Conditioners</p>
                  <p className="text-gray-600 text-sm">
                    26 ganapathy nagar, Kadappa Rd, teacher's colony,
                    <br />
                    Kolathur, Chennai, Tamil Nadu - 600099
                  </p>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.497565376046!2d80.20305499999999!3d13.130984299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265efbbd71591%3A0x5cb60644ed912ceb!2sMohana%20air%20conditioners!5e0!3m2!1sen!2sin!4v1758306550285!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Service Areas</h2>
            <p className="text-lg text-gray-600 mb-8">
              We proudly serve the following areas with fast, reliable AC services:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                'Downtown',
                'Westside',
                'East Hills',
                'Riverside',
                'North Valley',
                'South Bay',
                'Central Park',
                'Oak Grove'
              ].map((area, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow">
                  <p className="font-medium text-gray-800">{area}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mt-6">
              Don't see your area listed? Give us a call - we may still be able to help!
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
