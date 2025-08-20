import "./footer.css";
import Image from "next/image";
import Link from "next/link";
import { Instagram, TikTok, Facebook } from "@wix/wix-ui-icons-common";
import { ShieldCheck, Package, Flag } from "lucide-react";

const produktLinks = [
  { href: "#", text: "Kunstwerk erstellen" },
  { href: "#", text: "Materialien" },
  { href: "#", text: "Beispiele" },
  { href: "#", text: "Preise" },
]

const unternehmenLinks = [
  { href: "#", text: "Über uns" },
  { href: "#", text: "Qualität" },
  { href: "#", text: "Nachhaltigkeit" },
  { href: "#", text: "Geschäftskunden" },
]

const supportLinks = [
  { href: "#", text: "FAQ" },
  { href: "#", text: "Kontakt" },
  { href: "#", text: "Versand" },
  { href: "#", text: "Retouren" },
]

const rechtlichesLinks = [
  { href: "#", text: "AGB" },
  { href: "#", text: "Datenschutz" },
  { href: "#", text: "Impressum" },
  { href: "#", text: "Widerruf" },
]

const columns = [
  { title: "Produkt", links: produktLinks },
  { title: "Unternehmen", links: unternehmenLinks },
  { title: "Support", links: supportLinks },
  { title: "Rechtliches", links: rechtlichesLinks },
]

const Footer = () => (
  <footer role="contentinfo" className="w-full bg-[var(--footer-bg,#0F172A)] text-white">
    <div className="mx-auto w-full max-w-[1300px] px-4 md:px-20 lg:px-8 py-10 md:py-14 lg:py-16">
      {/* Main footer content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-30">
        {/* Brand block - Column 1 */}
        <div className="lg:col-span-1 lg:pr-8 flex flex-col items-start">
          <div className="mb-4">
            <h2 className="text-[24px] md:text-[26px] lg:text-[24px] font-bold">canvasnova</h2>
          </div>
          <p className="text-[14px] md:text-[16px] lg:text-[12px] text-white/90 leading-relaxed mb-6">
            Einzigartige KI-Kunstwerke in Galeriequalität. In Deutschland gefertigt und auf Langlebigkeit ausgelegt – für Menschen, die das Besondere schätzen.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-[40px] lg:h-[40px] rounded-[16px] bg-white/10 hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-white/50 transition"
            >
              <Instagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-7 md:h-7 lg:w-[24px] lg:h-[24px]" />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-[40px] lg:h-[40px] rounded-[16px] bg-white/10 hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-white/50 transition"
            >
              <TikTok className="w-6 h-6 sm:w-7 sm:h-7 md:w-7 md:h-7 lg:w-[24px] lg:h-[24px]" />
            </a>
            <a
              href="#"
              aria-label="Kontakt"
              className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-[40px] lg:h-[40px] rounded-[16px] bg-white/10 hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-white/50 transition"
            >
              <Facebook className="w-6 h-6 sm:w-7 sm:h-7 md:w-7 md:h-7 lg:w-[24px] lg:h-[24px]" />
            </a>
          </div>
        </div>

        <div className="lg:contents grid grid-cols-2 gap-8 mt-8 sm:mt-10 lg:mt-0">
        {columns.map((column, index) => (
          <div key={index}>
            <p className="text-[clamp(14px,1.3vw,16px)] md:text-[18px] lg:text-[15px] text-white/90 font-bold mb-4">{column.title}</p>
            <ul className="space-y-3">
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href={link.href}
                    className="text-[clamp(12px,1.2vw,13px)] md:text-[15px] lg:text-[12px] underline underline-offset-2 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>
      </div>

      {/* Language selector - positioned above meta bar on desktop */}
      <div className="flex justify-center mt-8 lg:mt-8 lg:justify-end md:justify-start md:self-start">
        <label htmlFor="language-select" className="sr-only">
          Sprache auswählen
        </label>
        <select
          id="language-select"
          aria-label="Sprache auswählen"
          className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-[clamp(13px,1vw,14px)] hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-white/50 border-none outline-none"
        >
          <option value="de">🇩🇪 Deutsch</option>
        </select>
      </div>

      {/* Bottom meta bar */}
      <div className="mt-6 border-t border-white/10 pt-6">
        <div className="flex flex-col items-center text-center gap-4 md:flex-col md:items-center md:text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          {/* Copyright */}
          <p className="text-[12px] md:text-[14px] lg:text-[12px] text-white/80">© 2024 Canvasnova. Alle Rechte vorbehalten.</p>

          {/* Security badges */}
          <ul className="flex items-center gap-6 md:gap-8">
            <li className="flex items-center gap-2 opacity-90">
              <ShieldCheck size={15} aria-hidden="true" />
              <span className="text-[13px] md:text-[15px] lg:text-[13px] text-white">SSL-gesichert</span>
            </li>
            <li className="flex items-center gap-2 opacity-90">
              <Package size={15} aria-hidden="true" />
              <span className="text-[13px] md:text-[15px] lg:text-[13px] text-white">Sichere Verpackung</span>
            </li>
            <li className="flex items-center gap-2 opacity-90">
              <Flag size={15} aria-hidden="true" />
              <span className="text-[13px] md:text-[15px] lg:text-[13px] text-white">Made in Germany</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
