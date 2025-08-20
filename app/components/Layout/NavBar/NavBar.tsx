"use client";
import { NavLink } from "./NavLink";
import { useEffect, useState } from "react";
import type { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { CartBag } from "@/app/components/CartBag/CartBag";
import { Login } from "@/app/components/Login/Login";
import "./Navbar.css";
import { useUI } from "@/app/components/Provider/context";
import {
  BLOGS_ROUTE,
  EVENTS_ROUTE,
  HOME_ROUTE,
  STORE_ROUTE,
  WORKSHOPS_ROUTE,
} from "@/app/routes";

export const navbarMainItems = [
  { ref: BLOGS_ROUTE, label: "Prozess" },
  { ref: STORE_ROUTE, label: "Materialien" },
  { ref: EVENTS_ROUTE, label: "Galerie" },
  { ref: WORKSHOPS_ROUTE, label: "FAQ" },
];

const StyledNavLink = ({
  isActive,
  className,
  ...linkProps
}: LinkProps & {
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
}) => (
  <NavLink
    className={`${className ?? ""} ${
      isActive ? "text-custom-2" : "hover:text-gray-400"
    }`}
    {...linkProps}
  />
);

export function NavBar() {
  const pathname = usePathname();
  const [linkRef, setLinkRef] = useState<LinkProps["href"]>(pathname!);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { closeSidebar } = useUI();

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeSidebar();
    }
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const effect = () => {
      if (isMenuOpen) {
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
        document.querySelector(".navbar-burger")?.classList.add("extended");
      } else {
        document.getElementsByTagName("html")[0].style.overflow = "auto";
        document.querySelector(".navbar-burger")?.classList.remove("extended");
      }
    };
    effect();
  }, [isMenuOpen]);

  useEffect(() => {
    linkRef !== pathname && setLinkRef(pathname!);
    isMenuOpen && setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div>
      <nav className="py-0 h-[56px] justify-between items-center flex">
        <div className="max-[1023px]:flex hidden h-[56px] items-center">
          <button
            onClick={toggleMenu}
            className="navbar-burger flex items-center justify-center w-13 h-13 rounded-[10px] bg-white focus:outline-none leading-none p-0 overflow-hidden shadow-none -ml-2"
            style={{ lineHeight: 0, padding: 0, overflow: "hidden", boxShadow: "none" }}
            aria-controls="primary-navigation"
          >
            <svg
              stroke="currentColor"
              fill="none"
              className="hamburger w-10 h-10 block"
              viewBox="-10 -10 120 120"
            >
              <path
                className="line"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="hidden min-[1024px]:flex gap-[clamp(1px,0.3vw,10px)]">
          {navbarMainItems.map(({ ref, label }) => (
            <li key={ref} className="relative pl-4">
              <StyledNavLink
                className="text-[clamp(9px,0.9vw,12px)] font-medium underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 py-1"
                isActive={ref === linkRef}
                href={ref}
                onClick={() => {
                  setLinkRef(ref);
                }}
              >
                {label}
              </StyledNavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`fixed inset-0 z-50 ${isMenuOpen ? "visible" : "invisible"}`}>
        <nav
          className={`absolute top-0 bottom-0 left-0 right-0 py-6 px-6 bg-white overflow-y-auto transition-all duration-700 ease-in-out
                    ${
                      isMenuOpen
                        ? "left-0 opacity-100"
                        : "left-[100vw] opacity-0"
                    } transition-all ease-in-out duration-700`}
        >
          <ul className="my-10 flex flex-col items-center gap-8">
            <li key={HOME_ROUTE} className="relative">
              <StyledNavLink
                className="text-2xl font-bold"
                isActive={HOME_ROUTE === linkRef}
                href={HOME_ROUTE}
                onClick={() => {
                  setLinkRef(HOME_ROUTE);
                }}
              >
                Home
              </StyledNavLink>
            </li>
            {navbarMainItems.map(({ ref, label }) => (
              <li key={ref} className="relative">
                <StyledNavLink
                  className="text-2xl font-bold font_9"
                  isActive={ref === linkRef}
                  href={ref}
                  onClick={() => {
                    setLinkRef(ref);
                  }}
                >
                  {label}
                </StyledNavLink>
              </li>
            ))}
            <li className="relative mt-20">
              <CartBag />
            </li>
            <li className="relative text-xl bg-custom-3 text-white rounded-md p-2">
              <Login />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
