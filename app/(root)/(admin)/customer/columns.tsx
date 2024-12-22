"use client";

import { Button } from "@/components/ui/button";
import { Customer } from "@/lib/data";
import { ColumnDef } from "@tanstack/react-table";
import { LuEllipsis, LuPencilLine, LuSquareX } from "react-icons/lu";

export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "customerName",
    header: "Name",
  },
  {
    accessorKey: "customerEmail",
    header: "Email",
  },
  {
    accessorKey: "customerPhone",
    header: "Phone",
  },
  {
    accessorKey: "customerAddress",
    header: "Address",
  },
  {
    accessorKey: "customerType",
    header: "Customer Type",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <Button
            size={"icon"}
            variant={"outline"}
            className="text-orange-400 hover:bg-orange-400 hover:text-white"
          >
            <LuPencilLine />
          </Button>
          <Button
            size={"icon"}
            variant={"outline"}
            className="text-red-600 hover:bg-red-600 hover:text-white"
          >
            <LuSquareX />
          </Button>
          <Button size={"icon"} variant={"outline"} className="text-slate-600">
            <LuEllipsis />
          </Button>
        </div>
      );
    },
  },
];
