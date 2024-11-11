import Form from "@/components/Form";
import React from "react";

export const metadata = {
  title: "Bilgilerinizi giriniz",
};

const page = ({ params }) => {
  const { slug } = params;
  return <Form slug={slug} />;
};

export default page;
