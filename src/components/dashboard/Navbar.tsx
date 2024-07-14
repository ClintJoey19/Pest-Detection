import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import MobileNavbar from "./MobileNavbar";
import Logo from "../global/Logo";

const Navbar = () => {
  return (
    <section className="h-[8vh] w-full px-4 flex items-center justify-between border-b border-slate-300 fixed top-0 right-0 bg-white z-50">
      <div className="flex gap-2 items-center">
        <div className="md:hidden flex items-center">
          <MobileNavbar />
        </div>
        <Logo />
      </div>
      <div className="h-full flex items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </section>
  );
};

export default Navbar;
