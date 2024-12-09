import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar, AvatarImage } from "./avatar";
import { SidebarTrigger } from "./sidebar";
import { Separator } from "./separator";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@radix-ui/react-menubar";
import { MenubarSeparator } from "./menubar";

export function Navbar() {
  return (
    <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 px-4 py-2">
      <div className="flex items-center gap-2 px-42 w-auto">
        <SidebarTrigger />
        <div className="hidden md:flex items-center">
          <div className="shrink-0 bg-border w-[2px] mr-2 h-4 bg-gray-500"></div>
          <Separator orientation="vertical" />
          <nav>
            <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5">
              <li>
                <a href="/">url 2</a>
              </li>
              <li>svg right arrow</li>
              <li>
                <a href="/">url 1</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium">
                  Henrich Fergian L
                </span>
                <span className="text-[10px] text-gray-500 text-right">
                  Admin
                </span>
              </div>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="profile photo"
                />
                <AvatarFallback>profile photo</AvatarFallback>
              </Avatar>
            </div>
          </MenubarTrigger>
          <MenubarContent className="text-sm bg-slate-100 min-w-36 p-2 mt-2 rounded">
            <MenubarItem className="py-1">Profile</MenubarItem>
            <MenubarSeparator className="bg-slate-200" />
            <MenubarItem className="py-1">Logout</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </header>
  );
}
