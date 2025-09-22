import React from "react";

// Local images
import imgGate from "../assets/gate-1.png";
import imgGail from "../assets/gailimg-1.jpeg";
import imgAbout4 from "../assets/trees-1.jpeg";

const WhyJewar = () => {
  // Static data from backend
  const firstSection = {
    Images: [imgGate],
    headline: "Why Jeware",
  };

  const secondSection = {
    Images: [imgGail],
    content: {
      title: "Anugrah Homes",
      description1:
        "The Anugrah Homes provides the best opportunity to invest in Residential Plots Land with all luxurious amenities & modern facilities.",
      description2:
        "Anugrah Homes focuses on letting you detach from the world and reconnect with your spirit by creating a setting rich in peace and tranquility, surrounded by nature, while still offering all the amenities of luxury living.",
      description3:
        "Anugrah Homes is the natural manifestation of a modern yet fashionably confident plot in the countryside. We create customized adventures and discoveries for our visitors through bespoke cultural, culinary, wellness, architecture, lifestyle, and personalized service experiences.",
    },
  };

  const thirdSection = {
    Images: [imgAbout4],
    headline: "Peaceful Yet Luxurious Living",
  };

  // Plot development features
  const features = [
    {
      title: "Accuracy",
      description:
        "Every detail is planned precisely to ensure the best living experience.",
    },
    {
      title: "On-time Possession",
      description: "We deliver projects on schedule to keep your plans on track.",
    },
    {
      title: "Excellence in Architecture",
      description:
        "Our designs balance modern aesthetics with practical functionality.",
    },
    {
      title: "Well Located",
      description:
        "Strategically placed near key destinations and infrastructure.",
    },
    {
      title: "Nearby Attractions",
      description:
        "Close to Jewar Airport, Film City Noida, and cultural hotspots.",
    },
    {
      title: "Capital Appreciation",
      description:
        "Your investment grows with the area's booming real estate market.",
    },
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center md:h-[400px] lg:h-[500px] h-[300px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${firstSection.Images[0]})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl md:text-5xl font-bold">{firstSection.headline}</h1>
          <p className="mt-4 text-sm md:text-lg max-w-3xl mx-auto">
            Anugrah Homes Project Near Upcoming Jewar International Airport & Film City Noida
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={secondSection.Images[0]}
          alt="Residential Plots"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">{secondSection.content.title}</h2>
          <p className="text-gray-700 mb-4">{secondSection.content.description1}</p>
          <p className="text-gray-700 mb-4">{secondSection.content.description2}</p>
          <p className="text-gray-700">{secondSection.content.description3}</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="md:text-3xl text-2xl font-bold mb-10">Our Plot Development Features</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="md:text-3xl text-2xl font-bold mb-4">{thirdSection.headline}</h2>
          <p className="text-gray-700 mb-4">
            Our community is designed to bring you closer to nature while ensuring every luxury is
            within reach. Enjoy a perfect blend of tranquility and sophistication.
          </p>
          <p className="text-gray-700">
            From lush green spaces to modern amenities, Anugrah Homes redefines countryside living.
          </p>
        </div>
        <img
          src={thirdSection.Images[0]}
          alt="Nature and Lifestyle"
          className="rounded-xl shadow-lg"
        />
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Book Your Plot Today!</h2>
        <p className="mb-6">
          Secure your future with Anugrah Homes – a prime investment near Jewar Airport.
        </p>
        <a
          href="/contact"
          className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default WhyJewar;
