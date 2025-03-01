import Image from "next/image";
import Button from "./Button";

export default function MenuCard({
  meal,
  image,
}: {
  meal: {
    name: string;
    id: number;
    description: string;
    price: number;
  };
  image: any;
}) {
  return (
    <div className="flex flex-col w-[320px] h-[520px] overflow-clip rounded-lg bg-white/90 hover:translate-y-2 duration-75 text-black">
      <div className="bg-yellow-500 flex items-center overflow-clip justify-center w-[320px] h-[300px]">
        <Image src={image} alt="meal-image" width={250} height={250} />
      </div>
      {/* meal info */}
      <div className="px-3 relative">
        <h2 className="text-2xl m-2">{meal.name}</h2>
        <p>{meal.description}</p>
        <div className="flex justify-around items-center mt-4 gap-4">
          <span className="m-2 text-yellow-500 text-xl">${meal.price}</span>
          <Button>Order</Button>
        </div>
      </div>
    </div>
  );
}
