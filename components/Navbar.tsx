import MenuPage from "@/app/menu/page";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;

  return (
    <div className="h-12 md:h-24 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="text-xl md:font-bold md:text-center flex-1">
        <Link href="/"> Massimo</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex justify-end gap-4 flex-1">
        <div className="flex items-center gap-2 cursor-pointer md:absolute top-3 r-2 lg:static bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20}/>
          <span>123 456 789</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
       <CartIcon/>
      </div>
    </div>
  );
};

export default Navbar;
