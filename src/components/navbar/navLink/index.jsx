"use client";

import { usePathname } from "next/navigation";

const { default: Link } = require("next/link");

const NavLink = ({ link }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`min-w-[100px] p-2.5 rounded-[20px] font-medium text-center ${
        pathname === link.path ? "bg-white text-[#0d0c22]" : ""
      }`}
      href={link.path}
    >
      {link.title}
    </Link>
  );
};
export default NavLink;
