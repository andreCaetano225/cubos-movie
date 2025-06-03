"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import Image from "next/image";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`bg-darkBg dark:bg-lightBg relative inline-flex  items-center rounded-full`}
      >
        <div className="translate-x-1 dark:translate-x-6 transform   transition">
          {theme === "light" ? (
            <>
              <div className=" ">
                <button
                  className="bg-[#B744F714] p-2 flex items-center justify-center rounded hover:opacity-90 transition cursor-pointer h-[2.7rem] w-[2.7rem]"
                  aria-label="Toggle theme"
                >
                  <Image
                    src={"./Sun_fill.svg"}
                    alt="Toggle theme"
                    width={22}
                    height={30}
                  />
                </button>
              </div>
            </>
          ) : (
            <>
              <div>
                <button
                  className="bg-[#ffff] p-2 flex items-center justify-center  rounded hover:opacity-90 transition cursor-pointer h-[2.7rem] w-[2.7rem]"
                  aria-label="Toggle theme"
                >
                  <Image
                    src={"./Moon_fill.svg"}
                    alt="Toggle theme"
                    width={22}
                    height={30}
                  />
                </button>
              </div>
            </>
          )}
        </div>
      </Switch>
    </div>
  );
};
