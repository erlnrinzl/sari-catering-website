"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductSelectionPage from "./product-selection";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  LuArrowLeft,
  LuArrowRight,
  LuCheck,
  LuChevronsUpDown,
} from "react-icons/lu";
import { useState } from "react";
import { Customer, customersData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import WizardNav from "./wizard-nav";
import { useRouter } from "next/navigation";
import PaymentStepPage from "./payment-step";
import { Calendar } from "@/components/ui/calendar";
import { DateTimePicker } from "@/components/ui/DateTimePicker";
import { Separator } from "@/components/ui/separator";

export default function OrderWizardPage() {
  const [open, setOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>();
  const [sameShippingAddress, setSameShippingAddress] = useState(true);
  const [sameBillingAddress, setSameBillingAddress] = useState(true);
  const [wizardStep, setWizardStep] = useState(1);

  const router = useRouter();

  return (
    <>
      <WizardNav currentStep={wizardStep} />
      <Button
        size={"sm"}
        variant={"link"}
        onClick={() => {
          if (wizardStep != 1) {
            setWizardStep(wizardStep - 1);
          } else {
            router.push("/order");
          }
        }}
      >
        <LuArrowLeft />
        <span>Back</span>
      </Button>

      {wizardStep === 1 ? (
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
              <CardDescription>
                Enter the customer's details, including their name, contact
                number, and delivery address.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div className="grid grid-cols-[1fr_6fr] gap-2.5 justify-start items-center">
                <span>Customer</span>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-[200px] justify-between"
                    >
                      {selectedCustomer
                        ? customersData.find(
                            (customer) =>
                              customer.customerID ===
                              selectedCustomer.customerID
                          )?.customerName
                        : "Select customer..."}
                      <LuChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search customer..." />
                      <CommandList>
                        <CommandEmpty>No customer found.</CommandEmpty>
                        <CommandGroup>
                          {customersData.map((customer) => (
                            <CommandItem
                              key={customer.customerID}
                              value={customer.customerID}
                              onSelect={(currentSelected) => {
                                setSelectedCustomer(
                                  currentSelected ===
                                    selectedCustomer?.customerID
                                    ? null
                                    : customersData.find(
                                        (customer) =>
                                          customer.customerID ===
                                          currentSelected
                                      )
                                );
                                setOpen(false);
                              }}
                            >
                              <LuCheck
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  selectedCustomer?.customerID ===
                                    customer.customerID
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {customer.customerName}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              <Separator />

              <div className="flex">
                <div className="flex flex-col gap-6 w-2/5">
                  <div className="grid grid-cols-[1fr_3fr] gap-2.5">
                    <span className="col-span-2 font-semibold leading-none text-slate-900">
                      Contact information
                    </span>
                    <span>Name</span>
                    <span className="text-gray-500">
                      {selectedCustomer?.customerName ?? "-"}
                    </span>
                    <span>Phone</span>
                    <span className="text-gray-500">
                      {selectedCustomer?.customerPhone ?? "-"}
                    </span>
                    <span>Email</span>
                    <span className="text-gray-500">
                      {selectedCustomer?.customerEmail ?? "-"}
                    </span>
                    <span>Address</span>
                    <div className="flex flex-col gap-1">
                      <span className="text-gray-500">
                        {selectedCustomer?.customerAddress ?? "-"}
                      </span>
                      <span className="text-gray-500">
                        {selectedCustomer?.customerPhone ?? (
                          <span className="text-transparent">-</span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6 w-3/5">
                  <div className="grid grid-cols-[1fr_3fr] gap-2.5">
                    <span className="text-base font-semibold leading-none text-slate-900">
                      Delivery Schedule
                    </span>
                    <div className="w-56">
                      <DateTimePicker />
                    </div>
                  </div>
                  <div className="grid grid-cols-[1fr_3fr] gap-2.5">
                    <span className="font-semibold leading-none text-slate-900">
                      Shipping address
                    </span>
                    <div className="flex gap-2">
                      <Checkbox
                        id="sameShippingAddress"
                        checked={sameShippingAddress}
                        onCheckedChange={() => {
                          setSameShippingAddress(!sameShippingAddress);
                        }}
                      />
                      <label
                        htmlFor="sameShippingAddress"
                        className="text-gray-500 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        same as customer address
                      </label>
                    </div>
                    {sameShippingAddress ? (
                      ""
                    ) : (
                      <>
                        <span>Recipient</span>
                        <Input placeholder="recipient name" />
                        <span>Address</span>
                        <Textarea placeholder="shipping address..." />
                        <span>Phone</span>
                        <Input placeholder="08xxx" />
                      </>
                    )}
                  </div>
                  <div className="grid grid-cols-[1fr_3fr] gap-2.5">
                    <span className="text-base font-semibold leading-none text-slate-900">
                      Billing address
                    </span>
                    <div className="flex gap-2">
                      <Checkbox
                        id="sameBillingAddress"
                        checked={sameBillingAddress}
                        onCheckedChange={() => {
                          setSameBillingAddress(!sameBillingAddress);
                        }}
                      />
                      <label
                        htmlFor="sameBillingAddress"
                        className="text-gray-500 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        same as shipping address
                      </label>
                    </div>
                    {sameBillingAddress ? (
                      ""
                    ) : (
                      <>
                        <span>Recipient</span>
                        <Input placeholder="recipient name" />
                        <span>Address</span>
                        <Textarea placeholder="billing address..." />
                        <span>Phone</span>
                        <Input placeholder="08xxx" />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                size={"sm"}
                onClick={() => {
                  setWizardStep(2);
                }}
                className="bg-blue-600"
              >
                <span>Next</span>
                <LuArrowRight />
              </Button>
            </CardFooter>
          </Card>
        </div>
      ) : (
        <ProductSelectionPage />
        // <PaymentStepPage />
      )}
    </>
  );
}
