import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardMenu from "./card-menu";
import { MenuData } from "@/lib/data";

export default function DataMenu() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 w-full">
      {MenuData.map((menu) => {
        return <CardMenu menu={menu} />;
      })}
    </div>
  );
}
