import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

// Static images
import img3 from "../assets/artical-2.jpg";
import img4 from "../assets/artical-3.png";
import img5 from "../assets/artical-4.png";
import img6 from "../assets/artical-1.jpg";
import img7 from "../assets/road-1.png";
import img8 from "../assets/third.png";
import imgs6 from "../assets/artical-5.png";

const Media = () => {
  const postsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  // --- Static data from your JSON ---
  const firstSection = {
    images: ["1756100136376-gate-1.png"],
  };

  const blogposts = {
    _id: "68ac00aa1ac1408e67c74627",
    images: ["1756114232368-g2.jpg"],
    content: {
      title: "The Future Of Office Spaces In A Hybrid Work Era",
      date: "May 06, 2025",
      author: "Printer Beatrix",
      excerpt:
        "Highway expansion projects are not just improving connectivity, but also transforming real estate landscapes by boosting demand for housing, commercial spaces, and industrial hubs.",
    },
  };

  const blogposts2 = {
    _id: "68ac52ecd2b023f91e84f8de",
    images: ["1756185608185-park-7.jpg"],
    content: {
      title: "Urban Expansion & Infrastructure in 2025",
      date: "July 02, 2025",
      author: "Printer Beatrix",
      excerpt:
        "Rapid urban expansion is reshaping cities, creating opportunities in housing, transport, and digital connectivity.",
    },
  };

  const blogposts3 = {
    _id: "68ad45e0a16ff33bfffc5363",
    images: ["1756186277900-g5.jpg"],
    content: {
      title: "A Perfect Blend of Luxury, Comfort & Location",
      date: "June 15, 2025",
      author: "Printer Beatrix",
      excerpt:
        "Finding a dream home is more than just choosing four walls – it’s about discovering a lifestyle that balances luxury, comfort, and the right location.",
    },
  };

  const recentPostsData = [
    {
      id: 1,
      img: img6,
      title: "Why Millennials Are Reshaping The Real Estate Market",
      date: "October 21, 2025",
      blogId: "5",
    },
    {
      id: 2,
      img: img3,
      title: "Technology Trends Redefining Modern Homes",
      date: "January 27, 2025",
      blogId: "6",
    },
    {
      id: 3,
      img: img4,
      title: "Cities With The Highest ROI For Airbnb Rentals",
      date: "March 27, 2024",
      blogId: "7",
    },
    {
      id: 4,
      img: img5,
      title: "Affordable Housing: A 2025 Perspective",
      date: "June 27, 2024",
      blogId: "8",
    },
    {
      id: 5,
      img: imgs6,
      title: "Why Millennials Are Reshaping The Real Estate Market",
      date: "June 28, 2024",
      blogId: "9",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      image: img8,
      blogId: blogposts._id,
      title: blogposts.content.title,
      date: blogposts.content.date,
      author: blogposts.content.author,
      excerpt: blogposts.content.excerpt,
      link: "/articles/future-office-spaces",
    },
    {
      id: 2,
      image: img7,
      blogId: blogposts2._id,
      title: blogposts2.content.title,
      date: blogposts2.content.date,
      author: blogposts2.content.author,
      excerpt: blogposts2.content.excerpt,
      link: "/articles/urban-expansion",
    },
    {
      id: 3,
      image: img8,
      blogId: blogposts3._id,
      title: blogposts3.content.title,
      date: blogposts3.content.date,
      author: blogposts3.content.author,
      excerpt: blogposts3.content.excerpt,
      link: "/articles/luxury-comfort-location",
    },
  ];

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(https://anugrah-main-backend.onrender.com/upload/${firstSection.images[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative md:h-[400px]  lg:h-[500px] h-[300px] flex items-end justify-center text-white"
      >
        <div className="bg-black/40 absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-2xl md:text-5xl font-bold ">Latest News</h1>
            <p className="text-sm mt-4">Home &gt; Media</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-12 gap-8">
        {/* Blog Posts */}
        <div className="lg:col-span-8 space-y-12">
          {currentPosts.map((post) => (
            <div key={post.id} className="space-y-4">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto  rounded-xl object-cover"
                />
              </div>
              <div className="text-sm text-gray-500">
                Post By <span className="font-medium text-black">{post.author}</span> | {post.date}
              </div>
              <h2 className="md:text-3xl text-2xl font-serif">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <Link
                to={`/blog/${post.blogId}`}
                className="text-blue-600 font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center gap-2 pt-10 items-center">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`p-2 border rounded-full transition ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {getPageNumbers().map((page, index) =>
              page === "..." ? (
                <span key={index} className="px-3">
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 border rounded transition ${
                    currentPage === page ? "bg-gray-800 text-white" : "hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              )
            )}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`p-2 border rounded-full transition ${
                currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
              }`}
            >
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
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-2 py-3 outline-none rounded"
              />
              <Search className="w-8 h-8" />
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-xl mb-3">Categories</h4>
            <ul className="text-gray-700 space-y-2">
              <li className="flex justify-between">Market Trends <span>(22)</span></li>
              <li className="flex justify-between">Property Investment <span>(15)</span></li>
              <li className="flex justify-between">Home Buying Tips <span>(16)</span></li>
              <li className="flex justify-between">Rental & Leasing <span>(08)</span></li>
              <li className="flex justify-between">Commercial Real Estate <span>(19)</span></li>
              <li className="flex justify-between">Smart Living & Design <span>(21)</span></li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="md:border md:p-4 border-gray-400 rounded-2xl">
            <h4 className="font-bold text-xl mb-3">Recent Posts</h4>
            <div className="space-y-4">
              {recentPostsData
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, 5)
                .map((post) => (
                  <div
                    key={post.id}
                    className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition"
                  >
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-20 h-20 rounded object-cover"
                    />
                    <div>
                      <Link
                        to={`/blog/${post.blogId}`}
                        className="font-semibold hover:underline"
                      >
                        <p className="text-sm font-semibold">{post.title}</p>
                      </Link>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-xl mb-3">Subscribe Newsletter</h4>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-4 py-3 border rounded mb-3"
            />
            <button className="bg-black text-white px-4 py-3 rounded w-full">
              Subscribe
            </button>
          </div>

          {/* Tags */}
          <div>
            <h4 className="font-bold text-xl mb-3">Tags</h4>
            <div className="flex flex-wrap gap-2 text-sm">
              {[
                "Housing",
                "Mortgage",
                "Rental",
                "Urban",
                "Investment",
                "Commercial",
                "Property",
                "Luxury",
                "Market",
              ].map((tag) => (
                <span key={tag} className="px-4 py-2 border border-gray-400 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
