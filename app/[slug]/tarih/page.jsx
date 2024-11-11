import CalendarComponent from "@/components/Calendar";
export const metadata = {
  title: "Tarih seçiniz",
};

const page = ({ params }) => {
  const { slug } = params;
  return <CalendarComponent slug={slug} />;
};

export default page;
