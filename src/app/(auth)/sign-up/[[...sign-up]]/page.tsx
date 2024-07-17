import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return <SignUp signInUrl="/sign-in" />;
};

export default page;
