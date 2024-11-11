import React from "react";
import Time from "@/components/Time";

export const metadata = {
  title: "Saat seçiniz",
};

const page = ({ params }) => {
  const { slug } = params;
  return <Time slug={slug} />;
};

export default page;
