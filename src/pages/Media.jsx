import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

// Local images
import gate from "../assets/gate-1.png";
// import img1 from "../assets/park-7.jpg";
import img2 from "../assets/garden-3.jpg";
import img3 from "../assets/artical-2.jpg";
import img4 from "../assets/artical-3.png";
import img5 from "../assets/artical-4.png";
import img6 from "../assets/artical-1.jpg";
import img7 from "../assets/road-1.png";
import img8 from "../assets/contst-1.jpg";
import imgs6 from "../assets/artical-5.png";
import art_1 from "../assets/latest-article_1.png"

const Media = () => {
  const postsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  // Static blog posts (all local data) - ordered from latest to oldest
  const blogPosts = [
    {
      id: 4,
      image: art_1,
      title: "Yamuna Expressway property prices surge: Plots appreciate over 500%, apartments up 158% show data",
      date: "June 15, 2025",
      author: "Printer Beatrix",
      excerpt:
        " According to the latest RealX Stats by InvestoXpert Advisors, apartments along the corridor appreciated by 158% between 2020 and 2025, while plots witnessed an extraordinary five-fold jump of 536% during the same period.",
      link: "/blog/3",
    },
    {
      id: 3,
      image: img7,
      title: "Urban Expansion & Infrastructure in 2025",
      date: "July 02, 2025",
      author: "Printer Beatrix",
      excerpt:
        "Rapid urban expansion is reshaping cities, creating opportunities in housing, transport, and digital connectivity.",
      link: "/blog/2",
    },
    {
      id: 2,
      image: img2,
      title: "The Future Of Office Spaces In A Hybrid Work Era",
      date: "May 06, 2025",
      author: "Printer Beatrix",
      excerpt:
        "Highway expansion projects are not just improving connectivity, but also transforming real estate landscapes by boosting demand for housing, commercial spaces, and industrial hubs.",
      link: "/blog/1",
    },
    {
      id: 1,
      image: img8,
      link: "/blog/0",
      title: "A Perfect Blend of Luxury, Comfort & Location",
      date: "May 06, 2025",
      author: "Printer Beatrix",
      excerpt:
        "Finding a dream home is more than just choosing four walls – it's about discovering a lifestyle that balances luxury, comfort, and the right location.",
    },
  ];

  // Recent posts - ordered from latest to oldest
  const recentPosts = [
    { id: 1, img: art_1, title: "Yamuna Expressway property prices surge...", date: "October 21, 2025", link: "/blog/3" },
    { id: 5, img: imgs6, title: "Why Millennials Are Reshaping The Real Estate Market...", date: "June 28, 2024", link: "/blog/4" },
    { id: 4, img: img5, title: "Affordable Housing: A 2025 Perspective...", date: "June 27, 2024", link: "/blog/3" },
    { id: 3, img: img4, title: "Cities With The Highest ROI For Airbnb Rentals...", date: "March 27, 2024", link: "/blog/2" },
    { id: 2, img: img3, title: "Technology Trends Redefining Modern Homes...", date: "January 27, 2025", link: "/blog/1" },
  ];

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) pages.push(1, 2, 3, "...", totalPages);
      else if (currentPage >= totalPages - 2) pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      else pages.push(1, "...", currentPage, "...", totalPages);
    }
    return pages;
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(${gate})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative  md:h-[400px] lg:h-[500px] h-[300px] flex items-end justify-center text-white"
      >
        <div className="bg-black/40 absolute inset-0 flex items-center justify-center pt-20">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-2xl md:text-5xl font-bold">Latest News</h1>
            <p className="text-sm md:mt-4">Home &gt; Media</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-12 gap-8">
        {/* Blog Posts */}
        <div className="lg:col-span-8 space-y-12  ">
         {currentPosts.map((post) => (
            <div key={post.id} className="space-y-4 ">
              <img src={post.image} alt={post.title} className="w-full md:h-[70vh] h-[30vh] rounded-xl object-cover object-top " />
              <div className="text-sm text-gray-500">
                Post By <span className="font-medium text-black">{post.author}</span> | {post.date}
              </div>
              <h2 className="md:text-3xl text-2xl font-serif">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <Link to={post.link} className="text-blue-600 font-semibold hover:underline">
                Read More →
              </Link>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center gap-2 pt-10 items-center">
            <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className={`p-2 border rounded-full transition ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}>
              <ChevronLeft className="w-5 h-5" />
            </button>
            {getPageNumbers().map((page, index) =>
              page === "..." ? (
                <span key={index} className="px-3">...</span>
              ) : (
                <button key={page} onClick={() => setCurrentPage(page)} className={`px-4 py-2 border rounded transition ${currentPage === page ? "bg-gray-800 text-white" : "hover:bg-gray-100"}`}>
                  {page}
                </button>
              )
            )}
            <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className={`p-2 border rounded-full transition ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-10 border-[#c5c0c0] border h-12/12 rounded-2xl md:p-8 p-2">
          {/* Search */}
          <div>
            <h4 className="font-bold text-xl mb-3">Search</h4>
            <div className="flex items-center border border-gray-400 rounded px-4">
              <input type="text" placeholder="Search..." className="w-full px-2 py-3 outline-none rounded" />
              <Search className="w-8 h-8" />
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-xl mb-3">Categories</h4>
            <ul className="text-gray-700 space-y-2">
              {["Market Trends", "Property Investment", "Home Buying Tips", "Rental & Leasing", "Commercial Real Estate", "Smart Living & Design"].map((cat, i) => (
                <li key={i} className="flex justify-between">{cat} <span>({Math.floor(Math.random()*25+5)})</span></li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="md:border md:p-4 border-gray-400 rounded-2xl">
            <h4 className="font-bold text-xl mb-3">Recent Posts</h4>
            <div className="space-y-4">
              {recentPosts.slice(0, 5).map((post) => (
                <div key={post.id} className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                  <img src={post.img} alt={post.title} className="w-20 h-20 rounded object-cover" />
                  <div>
                    <Link to={post.link} className="font-semibold hover:underline">{post.title}</Link>
                    <span className="text-xs text-gray-500 block">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-xl mb-3">Subscribe Newsletter</h4>
            <input type="email" placeholder="Enter email address" className="w-full px-4 py-3 border rounded mb-3" />
            <button className="bg-black text-white px-4 py-3 rounded w-full">Subscribe</button>
          </div>

          {/* Tags */}
          <div>
            <h4 className="font-bold text-xl mb-3">Tags</h4>
            <div className="flex flex-wrap gap-2 text-sm">
              {["Housing", "Mortgage", "Rental", "Urban", "Investment", "Commercial", "Property", "Luxury", "Market"].map((tag) => (
                <span key={tag} className="px-4 py-2 border border-gray-400 rounded">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;