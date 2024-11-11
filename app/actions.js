"use server";

import { cookies } from "next/headers";

export async function create(data) {
  const cookieStore = await cookies();
  cookieStore.set("tennant", data.slug);

  // cookieStore.set({
  //   name: 'name',
  //   value: 'lee',
  //   httpOnly: true,
  //   path: '/',
  // })
}
