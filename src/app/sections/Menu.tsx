"use client";
import { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard";
import BigMac from "@/app/assets/BigMac.png";
import cheeseBurger from "@/app/assets/cheeseBurger.png";
import chickenNuggets from "@/app/assets/chickenNuggets.png";
import pepperoniPizza from "@/app/assets/pepperoniPizza.png";
import chickenSandwich from "@/app/assets/chickenSandwich.png";
import frenchFries from "@/app/assets/frenchFries.png";
import shawarma from "@/app/assets/shawarma.png";
import hotDog from "@/app/assets/hotDog.png";
import friedChicken from "@/app/assets/friedChicken.png";
import milkShake from "@/app/assets/milkShake.png";
import { Marck_Script } from "next/font/google";
const Marck_Scriptfont = Marck_Script({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Menu() {
  const images = [
    BigMac,
    cheeseBurger,
    chickenNuggets,
    pepperoniPizza,
    frenchFries,
    chickenSandwich,
    shawarma,
    hotDog,
    friedChicken,
    milkShake,
  ];
  const [meals, setMeals] = useState<any>();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        return response.json();
      })
      .then((meals) => {
        setMeals(meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="bg-[#191816] px-5 py-5">
      <h1
        className={`text-center mt-2 mb-7 ${Marck_Scriptfont.className} text-4xl`}
      >
        Our Menu
      </h1>
      {meals && (
        <div className="flex items-center justify-center gap-5 flex-wrap">
          {meals.map((meal: any, i: number) => (
            <MenuCard meal={meal} key={meal.id} image={images[i]} />
          ))}
        </div>
      )}
    </section>
  );
}
