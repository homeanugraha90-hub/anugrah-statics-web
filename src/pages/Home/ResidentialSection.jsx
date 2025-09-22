import { TreePine, Cloud, Trees, Building } from "lucide-react";
import img1 from "../../assets/garden-3.jpg";

export default function ResidentialSection() {
  // Static data from backend response
  const staticData = {
    content: {
      title: "Residential Plots",
      title1: "Our Plot Developments",
      discribe: "Always done keeping in mind the need of the user in terms of both living and capital appreciation.",
      discribe1: "Are always done keeping in mind the need of the user in terms of both living and capital appreciation.",
      discribe2: "All our developments come with the following features:",
      option1: "Accuracy",
      option2: "On-time Possession",
      option3: "Excellence in Architecture",
      option4: "Well Located",
      option5: "Nearby Attractions"
    },
    images: [
      "1758376423284-slide-001.jpeg"
    ]
  };

  const features = [
    {
      title: staticData.content.option1,
      desc: "Precise planning and execution ensuring every detail meets the highest standards for your investment.",
      icon: <TreePine className="w-7 h-7 text-orange-400" />,
    },
    {
      title: staticData.content.option2,
      desc: "Committed delivery schedules with transparent timelines, ensuring you get your plot when promised.",
      icon: <Cloud className="w-7 h-7 text-orange-400" />,
    },
    {
      title: staticData.content.option3,
      desc: "Modern architectural planning with thoughtful design that maximizes both functionality and aesthetic appeal.",
      icon: <Trees className="w-7 h-7 text-orange-400" />,
    },
    {
      title: staticData.content.option4,
      desc: "Strategic locations near Yamuna Expressway with excellent connectivity to major hubs and airports.",
      icon: <Building className="w-7 h-7 text-orange-400" />,
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Image */}
        <div className="relative group">
          <img
            src={img1}
            alt="Anugrah Homes Residential Plots Development"
            className="rounded-3xl shadow-2xl w-full transform transition duration-700 group-hover:scale-105"
          />
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-yellow-400/10 via-transparent to-yellow-500/10 pointer-events-none"></div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            {staticData.content.title}
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-orange-400">
            {staticData.content.title1}
          </h3>
          <p className="mb-6 text-gray-300 leading-relaxed text-lg">
            {staticData.content.discribe}
          </p>
          <p className="mb-8 text-gray-300 leading-relaxed">
            {staticData.content.discribe2}
          </p>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-yellow-400/30 hover:scale-[1.03] transition duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-orange-400/20 text-orange-400">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{f.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}