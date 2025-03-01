import { Marck_Script } from "next/font/google";
import meal1 from "@/app/assets/meal1.png";
import meal2 from "@/app/assets/meal2.png";
import meal3 from "@/app/assets/meal3.png";
import SwiperCards from "../components/SwiperCards";
import Button from "../components/Button";

const Marck_Scriptfont = Marck_Script({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
  return (
    <section className="bg-[#191816] flex items-center justify-center h-[90%]">
      <div className="contaier bg-gradient-to-t py-5 from-custom-orange-1 via-custom-orange-3 to-custom-orange-5 w-[80%] h-[90%] rounded-[40px] overflow-clip flex justify-around items-center">
        <div className="max-w-[35%] flex flex-col gap-5 items-start justify-center">
          <h1 className={`${Marck_Scriptfont.className} text-6xl`}>
            Enjoy Your Meal
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
            rem nobis? Sapiente alias placeat adipisci.
          </p>
          <Button>BOOK A TABLE</Button>
        </div>
        <div className="w-[50%] h-[50%]">
          <SwiperCards
            items={[{ src: meal1.src }, { src: meal2.src }, { src: meal3.src }]}
          />
        </div>
      </div>
    </section>
  );
}
