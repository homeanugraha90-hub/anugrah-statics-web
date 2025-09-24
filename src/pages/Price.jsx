import img1 from "../assets/gate-1.png"
import { Check } from "lucide-react";

import "swiper/css/pagination";
import { Star } from "lucide-react";
import CardSlider from "../components/CardSlider";
import ContactFaq from "../components/ContactFaq";
import { useNavigate } from "react-router-dom";





const Price = () => {
  const nav=useNavigate();
  return (
    <main className="">
      {/* Hero Banner */}
      <section
  style={{
    backgroundImage: `url(${img1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
  className="relative  md:h-[400px]  lg:h-[500px] h-[300px]  "
>
  <div className=" bg-opacity-50 flex justify-center items-center pt-10 bg-black/50 h-full ">
    <div className="max-w-7xl mx-auto px-4 py-16 text-center text-white">
      <h1 className="text-2xl md:text-5xl font-bold mt-2">Pricing Plans</h1>
      <p className="text-sm mt-4">Home &gt;  Price</p>
    </div>
  </div>
</section>


      {/* Pricing Plans */}
     <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
          Property Pricing
        </h2>
        <h3 className="mt-2 text-2xl md:text-3xl font-bold">
          Affordable Residential Plots Near Jewar Airport
        </h3>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Choose from our range of plots with transparent pricing and all modern amenities.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Small Plot */}
          <div className="shadow-2xl py-12 rounded-xl p-6 flex flex-col">
            <h4 className="text-xl font-bold mb-2">100 Sq. Yards Plot</h4>
            <p className="text-sm text-gray-500 mb-4">
              Perfect for compact luxury homes.
            </p>
            <span className="md:text-4xl text-2xl font-extrabold mb-6">₹52.5 Lakh</span>
            <button onClick={() => nav("/site-visit")} className="bg-white border border-black text-black px-4 py-2 font-medium rounded hover:bg-black hover:text-white transition">
              Book Now
            </button>
            <ul className="mt-6 text-sm text-left text-gray-600 space-y-2">
              <li className="flex gap-2">
                <Check className="w-5 h-5 text-white bg-black rounded-full" />
                Legal documentation assistance
              </li>
              <li className="flex gap-2">
                <Check className="w-5 h-5 text-white bg-black rounded-full" />
                Free site visit
              </li>
              <li className="flex gap-2">
                <Check className="w-5 h-5 text-white bg-black rounded-full" />
                Gated community access
              </li>
              <li className="flex gap-2">
                <Check className="w-5 h-5 text-white bg-black rounded-full" />
                24x7 security
              </li>
            </ul>
          </div>

          {/* Medium Plot */}
          <div className="shadow-2xl py-12 rounded-xl p-6 flex flex-col bg-gray-50 relative">
            <span className="absolute top-4 right-4 bg-yellow-300 text-black text-xs font-semibold px-2 py-1 rounded">
              Most Popular
            </span>
            <h4 className="text-xl font-bold mb-2">200 Sq. Yards Plot</h4>
            <p className="text-sm text-gray-500 mb-4">
              Best choice for spacious villas.
            </p>
            <span className="md:text-4xl text-2xl font-extrabold mb-6">₹105 Lakh</span>
            <button onClick={() => nav("/site-visit")} className="bg-black text-white px-4 py-2 font-medium rounded hover:bg-gray-800 transition">
              Book Now
            </button>
            <ul className="mt-6 text-sm text-left text-gray-600 space-y-2">
              <li className="flex gap-2">
                <Check className="w-5 h-5 text-white bg-black rounded-full" />
                All features of 200 Sq. Yards
              </li>
              <li className="flex gap-2">
                <Check className="w-5 h-5 text-white bg-black rounded-full" />
                Corner plot options available
              </li>
              <li className="flex gap-2">
                <Check className="w-5 h-5 text-white bg-black rounded-full" />
                Loan assistance available
              </li>
              <li className="flex gap-2">
                <Check className="w-5 h-5 text-white bg-black rounded-full" />
                Park facing options
              </li>
            </ul>
          </div>

          {/* Large Plot */}
          <div className="shadow-2xl py-12 rounded-xl p-6 flex flex-col">
            <h4 className="text-xl font-bold mb-2">300 Sq. Yards Plot</h4>
            <p className="text-sm text-gray-500 mb-4">
              Ideal for large luxury residences.
            </p>
            <span className="md:text-4xl text-2xl font-extrabold mb-6">₹157.5 Lakh</span>
            <button onClick={() => nav("/site-visit")} className="bg-white border border-black text-black px-4 py-2 font-medium rounded hover:bg-black hover:text-white transition">
              Book Now
            </button>
            <ul className="mt-6 text-sm text-left text-gray-600 space-y-2">
              <li className="flex gap-2">
                <Check className="w-5 h-5 text-white bg-black rounded-full" />
                Premium location inside society
              </li>
              <li className="flex gap-2">
                <Check className="w-5 h-5 text-white bg-black rounded-full" />
                Nearby commercial hub
              </li>
              <li className="flex gap-2">
                <Check className="w-5 h-5 text-white bg-black rounded-full" />
                Exclusive clubhouse access
              </li>
              <li className="flex gap-2">
                <Check className="w-5 h-5 text-white bg-black rounded-full" />
                Lifetime maintenance support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

      {/* Testimonials */}
      <CardSlider/>






      


      {/* Contact + FAQ */}
      <ContactFaq/>
      
    </main>
  );
};

export default Price;
