"use-client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const steps = [
  {
    id: 1,
    order: 1,
    name: "Customer Information",
  },
  {
    id: 2,
    order: 2,
    name: "Items",
  },
  {
    id: 3,
    order: 3,
    name: "Payment",
  },
];

export default function WizardNav({ currentStep }: { currentStep: number }) {
  const requiredCols = steps.length * 2 - 1;

  return (
    <div className="px-12 mt-4">
      <div className="grid grid-cols-5"></div>
      <ul
        className={`grid grid-cols-${requiredCols} justify-stretch items-baseline`}
      >
        {steps.map((step) => {
          if (step.order === 1) {
            return (
              <li className="flex flex-col items-center gap-2 justify-center">
                <Badge className="flex p-2 w-6 h-6">{step.order}</Badge>
                <span>{step.name}</span>
              </li>
            );
          } else if (step.order === steps.length) {
            return (
              <li className="flex flex-col items-center gap-2 justify-center">
                <Badge className="flex p-2 w-6 h-6">{step.order}</Badge>
                <span>{step.name}</span>
              </li>
            );
          } else {
            return (
              <>
                <li>
                  <Separator className="bg-slate-300 h-1" />
                </li>
                <li className="flex flex-col items-center gap-2 justify-center">
                  <Badge className="flex p-2 w-6 h-6">{step.order}</Badge>
                  <span>{step.name}</span>
                </li>
                <li>
                  <Separator className="bg-slate-300 h-1" />
                </li>
              </>
            );
          }
        })}
      </ul>
    </div>
  );
}
