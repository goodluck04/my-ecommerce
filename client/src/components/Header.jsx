import React, { useState } from "react";
import { Button } from "./ui/button";
import useMediaQuery from "@/hooks/useMediaQuery";
import { CircleUser, Menu, ShoppingBag, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  return (
    <nav className=" z-30 h-20">
      <div className={`${flexBetween} fixed top-0 bg-red-400  w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6 gap-16`}>
          <div className={`flex`}>
            <p className="text-slate-700 font-bold">My</p>
            <p className="text-green-400 font-bold">Ecommerce</p>
          </div>
          {isDesktop ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-12 text-sm`}>
                <Button variant="link">Home</Button>
                <Button variant="link">Trending</Button>
                <Button variant="link">Products</Button>
                <Button variant="link">Categories</Button>
              </div>
              <div className="flex items-center gap-8">
                <ShoppingBag className="w-8 h-8 cursor-pointer hover:opacity-65 transition delay-75" />
                <CircleUser className="w-8 h-8 cursor-pointer hover:opacity-65 transition delay-75" />
                <ModeToggle />
                <Button variant="destructive">Sign In</Button>
              </div>
            </div>
          ) : (
            <div>
              <Button
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                variant="icon"
              >
                <Menu />
              </Button>
              <ModeToggle />
            </div>
          )}
        </div>
      </div>

      {/* for mobile view */}
      {!isDesktop && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-slate-600 drop-shadow-xl">
          {/* close icon */}
          <div className="flex justify-end p-12">
            <Button
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              variant="icon"
            >
              <X />
            </Button>
          </div>
          {/* menu item */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Button variant="link">Home</Button>
            <Button variant="link">Trending</Button>
            <Button variant="link">Products</Button>
            <Button variant="link">Categories</Button>
            <div className="flex gap justify-around">
              <ShoppingBag className="w-8 h-8 cursor-pointer hover:opacity-65 transition delay-75" />
              <CircleUser className="w-8 h-8 cursor-pointer hover:opacity-65 transition delay-75" />
            </div>
            <Button variant="destructive">Sign In</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
