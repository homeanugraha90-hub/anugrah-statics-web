import { useParams } from "react-router-dom";
import img6 from "../assets/artical-1.jpg";
import img3 from "../assets/artical-2.jpg";
import img4 from "../assets/artical-3.png";
import img5 from "../assets/artical-4.png";
import imgs6 from "../assets/artical-5.png";

const BlogDetails = () => {
  const { id } = useParams();

  // Static blog data
  const blogs = [
    {
      _id: "5",
      title: "Why Millennials Are Reshaping The Real Estate Market",
      author: "Printer Beatrix",
      date: "June 28, 2024",
      content: `Millennials, now the largest generation in the workforce, are playing a major role in transforming the real estate market. Their lifestyle choices, financial priorities, and tech-driven approach to home buying are creating new trends that developers and investors can’t ignore.\n\n1. Preference for Urban & Suburban Living\nUnlike previous generations, millennials value connectivity and convenience. Many are choosing homes in urban hubs or well-connected suburbs where access to workspaces, entertainment, and public transport is easier.\n\n2. Technology-First Approach\nFrom browsing listings online to using virtual tours, millennials rely heavily on technology in the home-buying process. Real estate companies that invest in digital platforms are seeing higher engagement with this generation.\n\n3. Demand for Affordable Yet Modern Homes\nMillennials prioritize affordability but don’t want to compromise on modern amenities. Compact, energy-efficient homes with smart features are in high demand.\n\n4. Sustainability & Eco-Friendly Living\nGreen buildings, solar-powered homes, and sustainable housing options attract millennials who are conscious of environmental impact.\n\n5. Shift Toward Co-Living & Renting\nWhile some are investing in property, many millennials prefer renting or co-living arrangements due to flexibility in careers and lifestyle.`,
      images: [imgs6],
    },
    {
      _id: "1",
      title: "Why Millennials Are Reshaping The Real Estate Market",
      author: "Printer Beatrix",
      date: "October 21, 2025",
      content: `The real estate market in 2025 is not the same as it was a decade ago. A major reason for this change is the rise of millennials — the largest generation of homebuyers today. Their lifestyle, priorities, and financial habits are reshaping how properties are built, marketed, and sold.\n\nTech-Savvy Buyers\nMillennials rely heavily on technology before making any purchase. From virtual property tours to digital loan approvals, they expect a seamless online experience. Real estate companies are now adopting digital-first strategies to meet this demand.\n\nPreference for Urban and Connected Living\nUnlike previous generations, millennials value proximity to workspaces, cafes, gyms, and social hubs. They prefer neighborhoods that offer convenience, connectivity, and a vibrant lifestyle. Properties near metro stations, business districts, and entertainment zones are in high demand.\n\nSustainability Matters\nThis generation is environmentally conscious. Green buildings, energy-efficient homes, and eco-friendly designs are gaining popularity. Developers are focusing on solar power, rainwater harvesting, and sustainable materials to attract millennial buyers.\n\nFlexible Housing Needs\nWith the rise of remote and hybrid work, millennials are looking for homes that support flexible lifestyles. Larger living spaces, home offices, and co-living arrangements are becoming essential features.\n\nFinancial Approach\nMillennials are more cautious with finances, preferring affordable housing or properties with long-term appreciation potential. They are also open to co-investing with friends or family to share costs and risks.\n\nThe Future Outlook\nAs millennials continue to dominate the housing market, real estate will keep evolving to match their preferences. Developers who adapt quickly — offering digital convenience, sustainability, and flexible living options — will lead the future of property sales.`,
      images: [img6],
    },
    {
      _id: "2",
      title: "Technology Trends Redefining Modern Homes",
      author: "Printer Beatrix",
      date: "January 27, 2025",
      content: `The concept of a “home” is rapidly evolving in 2025. Modern houses are no longer just about walls and roofs; they are smart, sustainable, and deeply connected with technology. From daily comfort to long-term efficiency, technology is transforming the way people live and interact with their spaces.\n\n1. Smart Home Automation\nVoice-controlled assistants, app-based lighting, and automated appliances are now standard. Homeowners can control everything from security systems to air conditioning with a single tap or voice command.\n\n2. Energy-Efficient Solutions\nGreen technology is making homes more sustainable. Solar panels, smart thermostats, and energy-saving appliances are helping families reduce costs while caring for the environment.\n\n3. Advanced Security Systems\nModern homes feature AI-powered surveillance cameras, biometric locks, and smart alarms. These technologies provide peace of mind by making home security more proactive and reliable.\n\n4. Connected Living with IoT\nThe Internet of Things (IoT) ensures seamless connectivity. Smart fridges, washing machines, and entertainment systems communicate with each other, making everyday living more convenient.\n\n5. Health & Wellness Tech\nPost-pandemic, homeowners are investing in health-focused technologies. Smart air purifiers, water filtration systems, and even home gyms with AI trainers are part of modern households.\n\n6. Flexible Workspaces at Home\nRemote and hybrid work trends have influenced interior design. Dedicated home offices, soundproof pods, and ergonomic setups powered by smart tech are becoming essentials.\n\n7. Future of Modern Homes\nLooking ahead, homes will become even smarter with AI-driven personalization, sustainable building materials, and fully integrated digital ecosystems. Technology won’t just support living—it will redefine the meaning of comfort, security, and lifestyle.`,
      images: [img3],
    },
    {
      _id: "3",
      title: "Cities With The Highest ROI For Airbnb Rentals",
      author: "Printer Beatrix",
      date: "March 27, 2024",
      content: `The rise of short-term rentals through platforms like Airbnb has completely transformed the way people invest in real estate. Instead of relying solely on long-term tenants, homeowners and investors now explore markets where tourism and business travel fuel strong demand for short stays. The key metric here is Return on Investment (ROI), which depends on property prices, occupancy rates, and average nightly income.\n\nFactors That Boost Airbnb ROI:\n- Tourism & Business Hubs – Cities with consistent visitor traffic ensure high occupancy rates.\n- Affordable Property Prices – Lower purchase costs combined with high rental income increase returns.\n- Local Regulations – Friendly short-term rental policies attract investors.\n\nTop Cities Showing High ROI Potential:\n1. Miami, USA – With year-round tourism, beaches, and nightlife, Miami properties enjoy strong occupancy rates and premium pricing.\n2. Lisbon, Portugal – A booming tourist hub with relatively affordable property values compared to Western Europe.\n3. Bali, Indonesia – A global hotspot for remote workers and vacationers, ensuring consistent bookings.\n4. Dubai, UAE – With luxury tourism, business travel, and tax benefits, Dubai leads as a top Airbnb investment city.\n5. Mexico City, Mexico – Low property costs with high urban demand make it an investor’s favorite.\n\nWhy It Matters:\nIn 2025, as travelers seek unique stays and flexible accommodation options, Airbnb continues to outperform traditional rentals in many global cities. Smart investors carefully analyze location, tourism trends, and government policies to choose markets that maximize their ROI.`,
      images: [img4],
    },
    {
      _id: "4",
      title: "Affordable Housing: A 2025 Perspective",
      author: "Printer Beatrix",
      date: "June 27, 2024",
      content: `As urban populations continue to rise, affordable housing has become one of the most pressing concerns in 2025. With increasing property prices, growing migration to cities, and shifting lifestyles, governments and developers are rethinking how to provide sustainable, inclusive, and cost-effective living options.\n\nKey Factors Driving Affordable Housing in 2025\n- Smart Urban Planning – Cities are prioritizing mixed-use communities, where residents can live, work, and access amenities without high commuting costs.\n- Government Policies & Subsidies – Initiatives like tax benefits, low-interest home loans, and public-private partnerships are boosting affordable housing projects.\n- Technology Integration – Prefabricated homes, modular construction, and AI-driven design are reducing construction costs and making homes more accessible.\n- Sustainability – Eco-friendly, energy-efficient housing is being prioritized to cut long-term expenses for residents.\n- Community Living Models – Co-living spaces and shared amenities are emerging as a cost-effective solution for young professionals and low-income families.\n\nThe 2025 Outlook\nAffordable housing is no longer just about low-cost homes; it’s about quality, accessibility, and inclusivity. Cities that succeed in balancing affordability with modern infrastructure will not only address housing shortages but also foster stronger, more resilient communities.`,
      images: [img5],
    },
  ];

  // Find the blog by id
  const blog = blogs.find((b) => b._id === id) || blogs[0];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 pt-20">
      <img
        src={blog.images[0]}
        alt={blog.title}
        className="w-full h-80 object-cover rounded-xl"
      />
      <h1 className="text-4xl font-bold mt-6">{blog.title}</h1>
      <p className="text-gray-500 text-sm mt-2">
        {blog.author} • {blog.date}
      </p>
      <div className="mt-6 text-lg leading-relaxed text-gray-800 whitespace-pre-line">
        {blog.content}
      </div>
    </div>
  );
};

export default BlogDetails;
