import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";
import ProfileDrawer from "./ProfileDrawer";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-[rgb(var(--border))] pb-4">
      {/* LEFT */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Nutri"
          width={36}
          height={36}
          className="w-8 h-6 md:w-12 md:h-9"
        />
        <p className="hidden md:block text-md font-medium tracking-wider text-[rgb(var(--text))]">
          Befit Nutrition
        </p>
      </Link>

      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <SearchBar />

        <Link href="/">
          <Home className="w-4 h-4 text-[rgb(var(--text))]" />
        </Link>

        <Bell className="w-4 h-4 text-[rgb(var(--text))]" />

        <ShoppingCartIcon />
        <ProfileDrawer />
      </div>
    </nav>
  );
};

export default Navbar;