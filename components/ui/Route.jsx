"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

const Route = () => {
  const router = useRouter();
  const t = useTranslations("Index");
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
      ← {t("back")}
    </button>
  );
};

export default Route;
