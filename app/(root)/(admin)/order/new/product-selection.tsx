import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DataMenu from "./data-menu";
import DataMenuCategories from "./data-menu-categories";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import CartItem from "./cart-item";
import { Menu } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { LuArrowRight } from "react-icons/lu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function getFormattedDate(date = new Date()) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${dayName}, ${monthName} ${day}, ${year}`;
}

export const cartMenu: Menu = {
  menuID: "MU0002",
  menuName: "Margherita Pizza",
  menuDesc:
    "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.",
  menuPrice: 18000,
  menuType: "FOOD",
  menuCategoryID: "MC002",
  createdAt: "20241111",
};

const cartItemData: Cart = {
  menu: cartMenu,
  quantity: 3,
};

const cartArray: Cart[] = [cartItemData, cartItemData];

interface Cart {
  menu: Menu;
  quantity: number;
}

export default function ProductSelectionPage() {
  const preferdCardHeight = "78vh";

  const [currentCart, setCurrentCart] = useState<Cart[]>([...cartArray]);
  const discount = 10000;

  const calculateOrder = (items: Cart[], postOpsVar: number = 0) => {
    const total = items.reduce((accumulator: number, cart: Cart) => {
      return accumulator + cart.menu.menuPrice * cart.quantity;
    }, 0);

    return total + postOpsVar;
  };

  const updateCart = (menu: Menu, quantity: number) => {
    let targetCart = currentCart.find(
      (cart) => cart.menu.menuID === menu.menuID
    );

    if (targetCart) {
      targetCart = { ...targetCart, quantity: targetCart.quantity + quantity };
    } else {
      targetCart = { menu, quantity };
    }

    setCurrentCart([...currentCart, targetCart]);
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row lg:justify-between">
      <div className="w-full md:w-[70%]">
        <Card className={`p-4 min-h-[${preferdCardHeight}]`}>
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
            <h1 className="text-xl font-medium leading-none text-slate-900 pb-2 md:pb-0">
              Menu List
            </h1>
            <div className="flex">
              <Input
                placeholder="Search menu..."
                className="max-w-sm"
                prefix=""
              ></Input>
            </div>
          </div>
          <DataMenuCategories />
          <DataMenu />
        </Card>
      </div>
      <div className="w-full md:w-[30%]">
        <Card className={`min-h-[${preferdCardHeight}]`}>
          <div className="p-4 flex-grow">
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex flex-col gap-5 pb-4">
                  <span className="text-xl font-medium leading-none text-slate-900">
                    Current Order
                  </span>
                  <div className="flex flex-col gap-1.5 text-xs text-gray-500">
                    <span>Date: {getFormattedDate()}</span>
                    <div className="flex lg:items-center gap-1.5 flex-col lg:flex-row">
                      <span>Customer:</span>
                      <div className="flex gap-1.5 items-center">
                        <span className="font-semibold">Henrich Fergian L</span>
                        <Badge className="bg-orange-300">
                          <span className="text-[10px]">Personal</span>
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <Separator />
                {/* cart items */}
                <ScrollArea className="h-[31vh] max-h-[31vh] whitespace-nowrap">
                  {/* <div className="flex-grow overflow-y-auto max-h-[31vh]"> */}
                  {currentCart.map((cart) => (
                    <CartItem menu={cart.menu} quantity={cart.quantity} />
                  ))}
                  {/* </div> */}
                </ScrollArea>
              </div>
              {/* subtotal calculation */}
              <div className="relative">
                <Separator />
                <div className="flex flex-col gap-2 py-8">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Item</span>
                    <span>{`${currentCart.length} (items)`}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Subtotal</span>
                    <span>{calculateOrder(currentCart)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Discount</span>
                    <span className="text-red-700">-Rp0.00</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between text-lg font-semibold text-slate-900">
                    <span>Total</span>
                    <span>{calculateOrder(currentCart, -discount)}</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600">
                  <span>Next</span>
                  <LuArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
