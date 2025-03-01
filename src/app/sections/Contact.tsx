import phone from "@/app/assets/phone.png";
import { Marck_Script } from "next/font/google";
import Image from "next/image";
import Button from "../components/Button";

const Marck_Scriptfont = Marck_Script({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Contact() {
  return (
    <div className="bg-[#191816] flex justify-center items-center">
      <div className=" w-[90%] h-[90%] flex justify-around items-center">
        <div className="flex flex-col justify-center items-start">
          <h1 className={`text-3xl ${Marck_Scriptfont.className}`}>
            Contact us
          </h1>
          <form className="flex flex-col justify-center items-start gap-4 mt-5">
            <input
              type="email"
              className="bg-transparent py-2 rounded-xl px-2 border outline-none border-white/50 w-[500px]"
              placeholder="email@example.com"
            />
            <input
              type="number"
              className="bg-transparent py-2 rounded-xl px-2 border outline-none border-white/50 w-[500px]"
              placeholder="+20124567890"
            />
            <textarea
              placeholder="Enter a feedback"
              className="bg-transparent py-2 rounded-xl px-2 border outline-none border-white/50 w-[500px]"
            ></textarea>
            <Button>Send</Button>
          </form>
        </div>
        <div>
          <Image src={phone} alt="phone" width={450} height={450} />
        </div>
      </div>
    </div>
  );
}
