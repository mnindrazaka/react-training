import { useTokenContext } from "@/Token";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

export const Navbar = () => {
  const router = useRouter();
  const { token, setToken } = useTokenContext();

  const onLogout = () => {
    setToken(null);
    router.push("/");
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" passHref legacyBehavior>
            <NavigationMenuLink>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/products" passHref legacyBehavior>
            <NavigationMenuLink>Products</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {token === null ? (
            <Link href="/login" passHref legacyBehavior>
              <NavigationMenuLink>Login</NavigationMenuLink>
            </Link>
          ) : (
            <Button variant="destructive" onClick={onLogout}>
              Logout
            </Button>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
