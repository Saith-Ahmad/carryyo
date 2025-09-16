

"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Menu, Settings } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { menuItems } from "@/lib/constants/menuItems";

// Custom hook for smooth scrolling and active link state
const useScrollManager = () => {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    // Intersection Observer to track visible sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6, // Adjust this value to control when the active state changes
      }
    );

    // Observe all sections on the page
    menuItems.forEach((item) => {
      const element = document.getElementById(item.href.substring(1));
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      menuItems.forEach((item) => {
        const element = document.getElementById(item.href.substring(1));
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Smooth scroll function with type definitions
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
    // Update URL hash without jumping
    window.history.pushState(null, '', href);
    setActiveSection(href);
  };

  return { activeSection, handleScrollTo };
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeSection, handleScrollTo } = useScrollManager();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    handleScrollTo(e, href);
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full z-50 bg-transparent">
      <div className="w-full flex justify-center">
        <div
          className={`w-full  shadow-lg transition-all backdrop-blur-2xl duration-300 ${
            isScrolled
              ? "bg-[#ffffffb9] "
              : "bg-[#ffffff25] backdrop-blur-xl"
          }`}
        >
          {/* Row 2: Main header */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex items-center container justify-between py-3"
          >
            {/* Logo */}
            <motion.div variants={item}>
              <a href="#home" className="text-2xl font-bold text-primary flex flex-row items-center gap-2">
                <img src={`${isScrolled ? "/asset/logo1.png" : "/asset/logo.png"}`} alt="logo" className="w-28 md:w-28"/>
              </a>
            </motion.div>

            {/* Desktop Nav */}
            <motion.nav
              variants={container}
              className="hidden md:flex gap-8 text-gray-600"
            >
              {menuItems.map((itemData) => {
                const isActive = activeSection === itemData.href;
                return (
                  <motion.div key={itemData.label} variants={item}>
                    <a
                      href={itemData.href}
                      onClick={(e) => handleScrollTo(e, itemData.href)}
                      className={`flex flex-col items-center gap-1 transition ${
                        isActive
                          ? "text-primary"
                          : `${!isScrolled ? "text-gray-200 hover:text-white" : "text-gray-500 hover:text-primary"} hover:scale-[1.02]`
                      }`}
                    >
                     
                      <span>{itemData.label}</span>
                    </a>
                  </motion.div>
                );
              })}
            </motion.nav>

            {/* CTA */}
            <motion.div variants={item}>
              <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")}>
                <Button
                  size={"lg"}
                  className={`${isScrolled ? "bg-primary" : "bg-primary text-white hover:text-white"} hidden md:block rounded-lg px-10 hover:bg-primary-hover`}
                >
                  Join Waitlist
                </Button>
              </a>
            </motion.div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button size="icon" className={`text-white hover:bg-primary ${!isScrolled && "bg-accent text-primary"}`}>
                    <Menu size={30} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80%] sm:w-[400px] px-10">
                  <SheetHeader />
                  <SheetTitle></SheetTitle>
                  <div className="mt-6 space-y-4">
                    {/* Mobile Nav */}
                    <nav className="flex flex-col gap-4">
                      {menuItems.map((itemData) => {
                        const isActive = activeSection === itemData.href;
                        return (
                          <a
                            key={itemData.label}
                            href={itemData.href}
                            onClick={(e) => handleMobileLinkClick(e, itemData.href)}
                            className={`flex items-center gap-3 transition ${
                              isActive
                                ? "text-primary"
                                : "text-gray-600 hover:text-primary"
                            }`}
                          >
                           
                            {itemData.label}
                          </a>
                        );
                      })}
                    </nav>

                    {/* CTA */}
                    <a href="#contact" onClick={(e) => handleMobileLinkClick(e, "#contact")}>
                      <Button className="w-full rounded-full bg-primary hover:bg-primary-hover">
                        Get in Touch
                      </Button>
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}