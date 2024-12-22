import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CartItem from "./cart-item";
import { cartMenu } from "./product-selection";
import { Button } from "@/components/ui/button";
import { LuReceiptText } from "react-icons/lu";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function PaymentStepPage() {
  return (
    <div className="flex gap-4">
      <div className="w-1/2">
        <Card>
          <CardContent className="py-4">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold leading-none text-slate-400">
                  Customer
                </span>
                <div className="flex flex-col gap-2">
                  <span className="text-sm">Henrich Fergian L</span>
                  <span className="text-sm">
                    henrich@mail.com | 08293810283
                  </span>
                </div>
              </div>
              <Separator />
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold leading-none text-slate-400">
                  Ship to
                </span>
                <div className="text-sm">
                  <span>
                    Henrich Fergian L, asldjflsadjflsjdflsjdfl, 012839028390
                  </span>
                </div>
              </div>
              <Separator />
            </div>
          </CardContent>
          <CardHeader>
            <CardTitle>Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-[1fr_2fr] gap-4">
              <span className="text-sm text-slate-400">Payment Method</span>
              <RadioGroup defaultValue="cash" className="flex">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cash" id="r1" />
                  <Label htmlFor="r1">Cash</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="transfer" id="r1" />
                  <Label htmlFor="r1">Transfer</Label>
                </div>
              </RadioGroup>
              <span className="text-sm text-slate-400">Billing Type</span>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select billing type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dp">DP</SelectItem>
                  <SelectItem value="full">Full</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm text-slate-400">Input Payment</span>
              <Input placeholder="Rp0,00" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-600">
              <span>Create Order</span>
              <LuReceiptText />
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="w-1/2">
        <Card>
          <CardContent className="py-4">
            <CartItem menu={cartMenu} quantity={1} />
            <div className="">
              <Separator />
              <div className="flex flex-col gap-2 py-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Item</span>
                  <span>{`${3} (items)`}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span>{50000}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Discount</span>
                  <span className="text-red-700">-Rp0.00</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-lg font-semibold text-slate-900">
                  <span>Total</span>
                  <span>{50000}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
