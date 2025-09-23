import { TreePine, Cloud, Trees, Building } from "lucide-react";
import img1 from "../../assets/garden-3.jpg";

export default function ResidentialSection() {
  const staticData = {
    content: {
      title: "Residential Plots",
      title1: "Our Plot Developments",
      discribe:
        "Our developments are always done keeping in mind the need of the user in terms of both living and capital appreciation.",
      discribe2: "All our developments come with the following features:",
      option1: "Accuracy",
      option2: "On-time Possession",
      option3: "Excellence in Architecture",
      option4: "Well Located",
    },
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
    <section className="relative py-20 px-6 md:px-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start relative z-10">
        {/* LEFT IMAGE */}
        <div className="relative group w-full h-[400px] md:h-[550px]">
          <img
            src={img1}
            alt="Anugrah Homes Residential Plots Development"
            className="rounded-3xl shadow-2xl w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-yellow-400/10 via-transparent to-yellow-500/10 pointer-events-none"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-start">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2 leading-snug">
            {staticData.content.title}
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold  text-orange-400 leading-snug">
            {staticData.content.title1}
          </h3>
          <p className="mb-4 text-gray-300 text-base leading-relaxed">
            {staticData.content.discribe}
          </p>
          <p className="mb-6 text-gray-300 text-base leading-relaxed">
            {staticData.content.discribe2}
          </p>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex flex-col h-full justify-start relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-lg hover:shadow-yellow-400/30 hover:scale-[1.03] transition duration-500"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-orange-400/20 text-orange-400 flex-shrink-0">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base line-clamp-3 leading-snug">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
