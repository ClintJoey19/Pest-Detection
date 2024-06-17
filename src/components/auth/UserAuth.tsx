import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Button } from "../ui/button";
import Link from "next/link";

const UserAuth = async () => {
  const { userId } = auth();

  return (
    <div className="flex items-center gap-4">
      {userId && (
        <div>
          <Button asChild size="sm">
            <Link href={`/dashboard`}>Dashboard</Link>
          </Button>
        </div>
      )}
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default UserAuth;
