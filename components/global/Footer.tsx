// components/Footer.tsx
'use client';
import { menuItems } from "@/lib/constants/menuItems";
import { motion } from "framer-motion";
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
   <div className="bg-secondary py-20 px-5 rounded-t-[70px] flex flex-col">

     <footer className="flex flex-col">
      <div className="bg-primary rounded-4xl relative text-white md:pt-14 py-10 overflow-hidden">
      

        {/* First Row */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white/20">
          {/* Logo & About */}
          <div>
            <img src={'/asset/logo3.png'} alt="logo" className="w-44 my-4"/>
            <p className="mt-3 text-sm text-white/80">
              Delivery is not just about packages. It is about love, care, and connection. Made simple, affordable, and human.
            </p>
            <div className="flex gap-3 mt-3">
              <img src="/asset/social1.png" alt="social media" className="max-w-10"/>
              <img src="/asset/social2.png" alt="social media" className="max-w-10"/>
              <img src="/asset/social3.png" alt="social media" className="max-w-10"/>
              <img src="/asset/social4.png" alt="social media" className="max-w-10"/>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-lg font-semibold mb-4">Locations</p>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-accent transition">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


           <div>
            <p className="text-lg font-semibold mb-4">Links</p>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-accent transition">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support & Contact */}
          <div>
           
            <p className="text-lg font-semibold mb-4">Contacts</p>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2">
                <Phone size={18} className="text-white" /> hello@carryyo.com
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} className="text-white"/> info@carryyo.com
              </p>
            </div>
          </div>
        </div>


        
      </div>
    </footer>

    <div className="container flex flex-col md:flex-row gap-3 justify-between items-center">
      <div className=" px-6 mt-5 text-center text-white/70 text-sm">
          © {new Date().getFullYear()}Carryyo. All rights reserved.
        </div>

        <div className="text-white text-sm flex  gap-5">
          <p>Privacy Policy</p>
          <p>Terms of use</p>
          <p>Legal</p>
        </div>
    </div>
   </div>
  );
}