import { getFavicon } from "@/utils/getFavicon";
import Links from "./links";
import Image from "next/image";

const Navbar = () => {
  const imgSrc = getFavicon("https://www.google.com");
  return (
    <div className="h-[100px] flex items-center justify-between">
      <div className="text-[30px] font-bold flex w-full gap-4 items-center">
        <p>Logo</p>
        <div className="w-full h-full">
          <Image width={32} height={32} src={imgSrc} alt="logo" />
        </div>
      </div>
      <Links />
    </div>
  );
};

export default Navbar;
