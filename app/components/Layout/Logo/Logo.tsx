import Link from "next/link";
import { HOME_ROUTE } from "@/app/routes";
import Image from "next/image";

const Logo = () => (
  <Link
    href={HOME_ROUTE}
    className="flex items-center justify-center md:justify-start md:items-center gap-2 px-4 md:px-10 lg:px-0"
  >
    <div className="relative">
      <Image src="/images/logo_klein.png" alt="Canvas Nova" width={604} height={108} className="block w-[clamp(170px,14vw,220px)] h-auto max-h-[clamp(30px,2.5vw,39px)]" />
    </div>
  </Link>
);

export default Logo;
