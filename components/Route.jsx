"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Route = () => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  // If it's the home page, don't render the component
  if (isHomePage) {
    return null;
  }

  return (
    <button
      className="p-2 text-base text-gray-500 rounded hover:underline hover:text-gray-800 ml-auto"
      onClick={() => router.back()}
    >
      ← Geri
    </button>
  );
};

export default Route;
