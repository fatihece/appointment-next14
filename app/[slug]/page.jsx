import React from "react";
import ReservationList from "@/components/ReservationList";
import { getServiceByDate, getTennantData } from "@/lib/data-service";

const Page = async ({ params }) => {
  const { slug } = params;
  const tennants = await getTennantData();
  const store = tennants?.output?.find((s) => s.url_alias === slug);

  const apiUrl = store?.api_url;

  const reservationData = await getServiceByDate(apiUrl);
  // const cookieStore = cookies();

  // let tennantSlug = "";
  // const tennantExists = cookieStore.has("tennant");

  // if (tennantExists) {
  //   tennantSlug = cookieStore.get("tennant");
  //   redirect(`/${tennantSlug}`);
  // } else {
  //   await create({ slug: store.url_alias });
  //   tennantSlug = store.url_alias;
  // }

  return (
    <section className="flex-1">
      <div className="container">
        <h1 className="text-center text-2xl mt-16 mb-5">
          <strong>{store?.application_alias}</strong>'ne Hoş Geldiniz
        </h1>
        {reservationData?.output?.length === 0 && (
          <p className="text-center mt-12 leading-[150%] text-lg">
            Sistemimiz kısa süre içinde erişime açılacaktır. Anlayışınız için
            teşekkür ederiz.
          </p>
        )}
        <ReservationList data={reservationData} slug={slug} />
      </div>
    </section>
  );
};

export default Page;
