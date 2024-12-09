import {
  LuChartArea,
  LuCalendarClock,
  LuTruck,
  LuUsers,
  LuConciergeBell,
  LuCitrus,
  LuUtensils,
  LuWarehouse,
} from "react-icons/lu";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar";
import Link from "next/link";
import Image from "next/image";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LuChartArea,
  },
  {
    title: "Order",
    url: "/order",
    icon: LuConciergeBell,
  },
  {
    title: "Schedule",
    url: "/schedule",
    icon: LuCalendarClock,
  },
  {
    title: "Delivery",
    url: "/delivery",
    icon: LuTruck,
  },
];

const resourcesItems = [
  {
    title: "Customer",
    url: "/customer",
    icon: LuUsers,
  },
  {
    title: "Menu",
    url: "/menu",
    icon: LuUtensils,
  },
  {
    title: "Material",
    url: "/material",
    icon: LuCitrus,
  },
  {
    title: "Supplier",
    url: "/supplier",
    icon: LuWarehouse,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link href={"/dashboard"}>
          <Image
            src={`/images/sari-catering-logo.svg`}
            width={120}
            height={50}
            alt="logo"
          ></Image>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {resourcesItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
