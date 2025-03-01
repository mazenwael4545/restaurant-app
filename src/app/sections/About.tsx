import Image from "next/image";
import serving from "@/app/assets/serving.jpg";
import serving2 from "@/app/assets/serving2.jpg";
import { Marck_Script } from "next/font/google";
import Button from "../components/Button";

const Marck_Scriptfont = Marck_Script({
  subsets: ["latin"],
  weight: ["400"],
});
export default function About() {
  const imageClassName =
    "rounded-[10px] overflow-clip shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]";
  return (
    <section className="bg-[#191816] flex justify-center flex-col items-center p-10">
      <h1 className={`text-4xl ${Marck_Scriptfont.className}`}>
        AboutUs & Services
      </h1>
      <div className=" w-[90%] h-[90%] flex justify-around items-center">
        <div className="w-[30vw] m-8">
          <Image
            src={serving}
            alt="serving"
            width={350}
            className={`relative left-20 top-5 ${imageClassName}`}
            height={400}
          />
          <Image
            src={serving2}
            alt="serving"
            className={`relative right-20 ${imageClassName}`}
            width={350}
            height={400}
          />
        </div>
        <div className="h-fit flex flex-col gap-6">
          <p className="w-[450px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            officiis nulla distinctio saepe porro laboriosam ratione fuga,
            dolor, veritatis laborum vitae labore ullam dicta eveniet velit ab
            facere aliquam eius! Ipsam harum illum molestias. Mollitia magnam
            quidem eaque dolore eligendi.
          </p>
          <Button className="w-fit">Read More</Button>
        </div>
      </div>
    </section>
  );
}
