"use client";
import { FileDown } from "lucide-react"; // download icon
import pdfFile from "../assets/Anugrah-Homes-Brochure.pdf"; // apna pdf public folder me daalna

export default function FloatingBrochure() {
  return (
    <a
      href={pdfFile}
      download
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50
                 bg-orange-500 text-white rounded-full p-4 shadow-lg 
                 hover:bg-orange-600 transition flex items-center justify-center"
    > 
      <span className="mr-2">Download Brochure</span>
      <FileDown className="w-6 h-6" />
    </a>
  );
}
