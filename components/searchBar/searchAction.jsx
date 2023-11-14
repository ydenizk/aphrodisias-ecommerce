/* "use server";

import { redirect } from "next/navigation";

export async function searchProducts(formData) {
  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

//http://localhost:3000/search?query=sez
 */