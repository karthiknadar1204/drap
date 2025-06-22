import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Bell } from "lucide-react";
import { ProfileAvatar } from "./profile-avatar";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";

interface Props {
  id: string;
  name: string;
  email: string;
  image: string;
}
export const Navbar = ({ id, email, name, image }: Props) => {
  return (
    <nav className="w-full flex items-center justify-between p-4">
      <div>
        <h1 className="text-2xl font-bold">Home</h1>
        <span className="text-sm text-muted-foreground">
          Manage all your task in one place.
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Button variant={"ghost"}>
          <Bell />
        </Button>
        <ThemeToggle />
        <Popover>
          <PopoverTrigger asChild>
            <ProfileAvatar url={image || undefined} name={name} />
          </PopoverTrigger>

          <PopoverContent className="flex flex-col items-center gap-3">
            <div className="mb-4 w-full flex flex-col items-center justify-between">
              <ProfileAvatar url={image || undefined} name={name} />
              <h2 className="text-lg font-semibold">{name}</h2>
              <p className="text-sm text-muted-foreground">{email}</p>
            </div>

            <Separator />

            <LogoutLink>Sign Out</LogoutLink>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};
