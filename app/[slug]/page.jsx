import React from "react";
import data from "/data.json";

import HomePage from "@/components/home/HomePage";

const page = async ({ params }) => {
  const { slug } = params;

  const store = data.find((s) => s.slug === slug);

  return <HomePage store={store} slug={slug} />;
};

export default page;
