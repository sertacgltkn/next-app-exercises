"use client";
import React from "react";
import { useRouter } from "next/navigation";

function ClientUseRouter() {
  const router = useRouter();
  const handleExpensiveLogic = () => {
    router.push("/font");
  };
  return (
    <div>
      <button onClick={handleExpensiveLogic}>Click me</button>
    </div>
  );
}

export default ClientUseRouter;
