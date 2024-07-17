import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SignInButton = () => {
  return (
    <Button size="sm" asChild>
      <Link href="/sign-in">
        Sign In <ArrowRight className="h-4 w-4 ml-2" />
      </Link>
    </Button>
  );
};

export default SignInButton;
