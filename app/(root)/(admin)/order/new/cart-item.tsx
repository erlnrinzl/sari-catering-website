import { Button } from "@/components/ui/button";
import { Menu } from "@/lib/data";
import Image from "next/image";
import { LuMinus, LuPlus } from "react-icons/lu";

export default function CartItem({
  menu,
  quantity,
}: {
  menu: Menu;
  quantity: number;
}) {
  return (
    <div className="flex gap-3 w-full border bg-slate-100 p-3 my-2 rounded-md">
      <div className="relative h-14 w-1/4">
        <Image
          src={`/images/food-img.jpg`}
          alt="food image"
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col justify-between w-3/4">
        <span className="text-xs font-medium text-gray-500">
          {menu.menuName}
        </span>
        <div className="flex justify-between gap-1 items-center md:items-start lg:items-center md:flex-col-reverse lg:flex-row">
          <div className="flex gap-3 items-center">
            <Button
              size={"icon"}
              variant={"outline"}
              className="rounded-md w-6 h-6 shadow-md bg-gray-50 text-orange-400 hover:bg-orange-200"
            >
              <LuMinus />
            </Button>
            <span className="text-xs">{quantity}</span>
            <Button
              size={"icon"}
              className="rounded-md w-6 h-6 shadow-md bg-orange-400 hover:bg-orange-200"
            >
              <LuPlus />
            </Button>
          </div>
          <div className="flex gap-2">
            <span className="text-xs text-orange-500">{`${quantity} x Rp${menu.menuPrice}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
