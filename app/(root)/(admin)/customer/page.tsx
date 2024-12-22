import { Button } from "@/components/ui/button";
import { DataTable } from "./data-table";
import { customersData } from "@/lib/data";
import { columns } from "./columns";
import { Card } from "@/components/ui/card";

export default function CustomerPage() {
  const data = customersData;

  return (
    <div className="py-4">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-xl font-medium leading-none text-slate-900">
              Store Customers
            </h1>
            <div className="flex items-center gap-2 text-sm font-normal text-gray-700">
              <div className="flex items-center gap-4 font-medium">
                <div className="me-2 flex flex-wrap gap-1.5">
                  <span className="text-md text-slate-600">All Customers:</span>
                  <span className="text-md text-ray-800 font-semibold">
                    49,053
                  </span>
                </div>
                <div className="me-2 flex flex-wrap gap-1.5">
                  <span className="text-md text-slate-600">
                    Home Catering Customers:
                  </span>
                  <span className="text-md text-slate-800 font-semibold">
                    724
                  </span>
                </div>
                <div className="me-2 flex flex-wrap gap-1.5">
                  <span className="text-md text-slate-600">
                    Corporate Customers:
                  </span>
                  <span className="text-md text-slate-800 font-semibold">
                    10
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Button size={"sm"} variant={"outline"} className="bg-white">
              Import CSV
            </Button>
            <Button size={"sm"} className="bg-blue-600">
              Add Customer
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Card>
          <DataTable columns={columns} data={data} />
        </Card>
      </div>
    </div>
  );
}
