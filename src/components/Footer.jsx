import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#1d1e22] text-white text-center pb-20 py-10  md:py-2 px-4">
        {/* Copyright */}
        <p className="text-xs mb-2">
          Copyright © 2025 <span className="font-semibold">Anugrah Homes</span>
        </p>

        {/* Disclaimer */}
        <p className="text-xs mb-2 max-w-4xl mx-auto">
          Disclaimer: This website belongs solely to <span className="font-semibold">Anugrah Homes</span> and Maxpine Group. 
        </p>

        {/* Image Usage Notice */}
        <p className="text-xs mb-4 max-w-4xl mx-auto">
          All images on this website are owned by Anugrah Homes. No one is allowed to use, copy, 
          download, or distribute these images without explicit permission. Any unauthorized use 
          is strictly prohibited.
        </p>

        {/* Webmaster Info */}
        
      </footer>
    </div>
  );
}
