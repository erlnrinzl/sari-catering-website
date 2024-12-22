import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Menu } from "@/lib/data";
import Image from "next/image";
import { LuMinus, LuPlus } from "react-icons/lu";

const inCart = false;

export default function CardMenu({ menu }: { menu: Menu }) {
  return (
    <div className="w-full">
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-2">
            <div className="relative w-full h-20 md:h-24 lg:h-28">
              <Image
                src={`/images/food-img.jpg`}
                alt="food image"
                fill
                className="rounded-md object-cover"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm">{menu.menuName}</span>
              <div className="flex items-center justify-between">
                <span className="text-xs text-green-400">{menu.menuPrice}</span>
                <span className="text-xs text-gray-500">
                  {menu.menuCategoryID}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-4 pb-4">
          {inCart ? (
            <div className="flex gap-2 items-center justify-between w-full px-3 bg-slate-100 rounded-xl p-1">
              <Button
                size={"icon"}
                className="rounded-full w-8 h-8 bg-emerald-600 hover:bg-slate-300"
              >
                <LuMinus />
              </Button>
              <span>1</span>
              <Button
                size={"icon"}
                className="rounded-full w-8 h-8 bg-emerald-600 hover:bg-slate-300"
              >
                <LuPlus />
              </Button>
            </div>
          ) : (
            <div className="w-full ">
              <Button
                size={"sm"}
                className="w-full h-8 bg-emerald-600 hover:bg-slate-300"
              >
                Add to Cart
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
