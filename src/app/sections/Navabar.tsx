import { Italianno } from "next/font/google";
import Button from "../components/Button";

const ItaliannoFont = Italianno({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  return (
    <nav
      className="w-[100%] h-[10%] justify-between items-center px-10 text-lg py-5 flex bg-[#191816]"
      style={{ borderRadius: "10px 10px 0 0" }}
    >
      <h1
        className={`${ItaliannoFont.className} text-4xl`}
        style={{
          WebkitUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none",
        }}
      >
        Food Hut
      </h1>
      <ul className="flex items-center justify-between gap-10">
        <li className="cursor-pointer hover:text-[#F18B3D] duration-150">
          Home
        </li>
        <li className="cursor-pointer hover:text-[#F18B3D] duration-150">
          Menu
        </li>
        <li className="cursor-pointer hover:text-[#F18B3D] duration-150">
          About
        </li>
        <li className="cursor-pointer hover:text-[#F18B3D] duration-150">
          Contact
        </li>
      </ul>
      <Button>BOOK A TABLE</Button>
    </nav>
  );
}
