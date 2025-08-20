import { CartBag } from "../CartBag/CartBag";
import { NavBar } from "./NavBar/NavBar";
import { Login } from "../Login/Login";
import { Button } from "@wix/wix-ui-icons-common";
import Logo from "@/app/components/Layout/Logo/Logo";
import { Sparkles } from "lucide-react"

const Header = () => (
  <header className="bg-white h-[clamp(56px,4.2vw,68px)]" role="navigation">
    <div className="flex">
      {/* Desktop Layout */}
      <div className="max-[1023px]:hidden flex max-w-[1500px] w-[85vw] mx-auto h-full px-[clamp(16px,4vw,40px)] lg:px-10">
        <div className="hidden lg:flex items-center justify-between h-full w-full">
          {/* Linke Gruppe */}
          <div className="flex items-center">
            {/* Sub-Gruppe: Logo + Badge (nah beieinander) */}
            <div className="flex items-center gap-[clamp(8px,0.8vw,12px)]">
              <Logo />
              <button
                className="bg-[#0F172A] text-white text-[clamp(8px,0.7vw,10px)] px-[clamp(10px,1.2vw,14px)] py-[clamp(6px,0.9vw,8px)] rounded-full font-medium font-syne"
                aria-label="Made in Germany"
              >
                Made in Germany
              </button>
            </div>

            {/* Abstand zur Navigation (etwas größer) */}
            <div className="ml-[clamp(20px,1.6vw,40px)]" />

            {/* 4 Menüpunkte */}
            <NavBar />
          </div>

          {/* Rechte Gruppe */}
          <div className="flex items-center">
            {/* “Konto” mit mehr Abstand von der Navigation */}
            <div className="mr-[clamp(24px,2.2vw,36px)]">
              <Login />
            </div>

            {/* CTA mit etwas kleinerem Abstand zu Konto */}
            <button className="bg-[#0F172A] text-white text-[clamp(10px,0.9vw,12px)] font-medium px-[clamp(12px,1.4vw,16px)] py-[clamp(8px,1.1vw,10px)] rounded-[11px] flex items-center gap-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <Sparkles size={12} aria-hidden="true" />
              <span className="text-white text-[12px] font-medium underline">Jetzt starten</span>
            </button>

            {/* gleicher Abstand zwischen CTA und Cart wie zwischen Konto und CTA */}
            <div className="ml-[clamp(16px,1.6vw,24px)]" />
            <CartBag />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="min-[1024px]:hidden relative z-30 h-[56px] w-full">
        <div className="grid grid-cols-3 items-center h-full px-[clamp(6px,1.6vw,12px)]">
          <div className="flex items-center justify-start shrink-0"> 
            <NavBar /> 
          </div>
          <div className="flex items-center justify-center min-w-0">
            <div className="shrink-0">
              <Logo />
            </div>
          </div>
          <div className="flex items-center justify-end gap-[clamp(10px,2vw,16px)]">
            <Login />
            <div className="hidden min-[768px]:block">
              <button className="bg-[#0F172A] text-white text-[clamp(10px,1.1vw,12px)] font-medium px-[clamp(12px,1.6vw,16px)] py-[clamp(8px,1.1vw,10px)] rounded-[11px] inline-flex items-center gap-[clamp(6px,0.8vw,8px)] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <Sparkles
                  size={12}
                  className="w-[clamp(12px,1.2vw,14px)] h-[clamp(12px,1.2vw,14px)]"
                  aria-hidden="true"
                />
                <span className="text-white text-[10px] font-medium underline">Jetzt starten</span>
              </button>
            </div>
            <CartBag />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
