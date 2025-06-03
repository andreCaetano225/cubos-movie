import Image from "next/image";
import Link from "next/link";
import { ButtonApp } from "./buttonApp";
import { ThemeSwitcher } from "./themeSwitter";

export const Header = () => {
  return (
    <header className="w-full bg-[#121113] border-b border-[#2a282c] text-white px-4 py-3 shadow-md z-50 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center gap-4 cursor-pointer">
            <Image
              src="/logo-cubo.png"
              alt="Logo Cubos"
              width={130}
              height={130}
            />
            <span className="font-semibold text-white text-lg font-inter">
              Movies
            </span>
          </div>
        </Link>
        <div className="flex  gap-8">
          <ThemeSwitcher />
          <ButtonApp className="h-[2.7rem]">Logout</ButtonApp>
        </div>
      </div>
    </header>
  );
};
