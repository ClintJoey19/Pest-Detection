import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const UserAuth = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default UserAuth;
