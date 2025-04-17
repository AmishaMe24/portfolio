"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isNavigating) return;
      
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 300 && currentScrollY > scrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY, isNavigating]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link.startsWith('#')) {
      e.preventDefault();
      setIsNavigating(true);
      
      const targetElement = document.getElementById(link.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        
        // Reset the navigation flag after scrolling completes
        setTimeout(() => {
          setIsNavigating(false);
        }, 1000);
      } else {
        setIsNavigating(false);
      }
    }
  };

  return (
    <div
      className={cn(
        "flex justify-center fixed top-10 left-0 right-0 mx-auto w-full max-w-fit border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-lg z-[5000] px-4 py-4 items-center space-x-4 transition-all duration-200",
        visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          onClick={(e) => handleNavClick(e, navItem.link)}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-sm">{navItem.name}</span>
        </Link>
      ))}
    </div>
  );
};