"use client";

import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";

const Register = () => {
  const searchParams = useSearchParams();
  const planString = searchParams?.get("plan") as any;

  const plan = useMemo(() => {
    return planString ? JSON.parse(planString) : null;
  }, [planString]);

  console.log("PLAN:: ", plan);

  return <div className="bg-[#1c1c1c] min-h-screen">Register</div>;
};

export default Register;
