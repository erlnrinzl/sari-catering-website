import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function DataMenuCategories() {
  return (
    <ToggleGroup
      type="single"
      variant={"outline"}
      size={"sm"}
      className="gap-2 md:gap-5 justify-start"
    >
      <ToggleGroupItem value="all">All</ToggleGroupItem>
      <ToggleGroupItem value="main course">Main Course</ToggleGroupItem>
      <ToggleGroupItem value="beverages">Beverages</ToggleGroupItem>
      <ToggleGroupItem value="dessert">Dessert</ToggleGroupItem>
    </ToggleGroup>
  );
}
