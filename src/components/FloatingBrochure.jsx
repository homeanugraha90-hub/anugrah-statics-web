"use client";
import { FileDown } from "lucide-react"; // download icon
import pdfFile from "../assets/Anugrah-Homes-Brochure.pdf"; // apna pdf public folder me daalna

export default function FloatingBrochure() {
  return (
    <a
      href={pdfFile}
      download
      className="group fixed left-4 top-1/2 -translate-y-1/2 z-50
                 bg-orange-500 text-white rounded-full p-4 shadow-lg 
                 hover:bg-orange-600 transition flex items-center justify-center"
    >
      <FileDown className="w-6 h-6" />

      {/* Tooltip with Animation */}
      <span
        className="absolute left-full ml-3 whitespace-nowrap 
                   bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium 
                   px-4 py-1.5 rounded-md shadow-md 
                   opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0
                   transition-all duration-500 ease-out"
      >
        Download Brochure
      </span>
    </a>
  );
}
