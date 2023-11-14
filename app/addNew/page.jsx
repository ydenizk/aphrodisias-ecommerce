import React from "react";
import { prisma } from "@/utils/prismaDb";
import { redirect } from "next/navigation";
import AddNewButton from "@/components/addNewButton/addNewButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function addNew(FormData) {
  "use server";

  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/addNew");
  }


  const name = FormData.get("name")?.toString();
  const description = FormData.get("description")?.toString();
  const imgUrl = FormData.get("imgUrl")?.toString();
  const price = Number(FormData.get("price") || 0);
  const catName = FormData.get("catName")?.toString();
  const category = {
    connect: { categoryName: catName },
  };

  if (!name || !description || !imgUrl || !price || !catName) {
    throw Error("Please fill all fields...");
  }

  await prisma.product.create({
    data: { name, description, imgUrl, price, category },
  });
  redirect("/");
}

async function AddNewPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/addNew");
  }

  return (
    <div className="w-full flex justify-center items-center my-16">
      <form
        action={addNew}
        className="  mx-auto w-[480px]" /* onSubmit={handleSubmit} */
      >
        <div className="mb-2">
          <input
            type="text"
            required
            name="name"
            placeholder="Name "
            className="w-full border p-1 rounded outline-none text-blackk "
            //value={bandName}
            //onChange={(e) => setBandName(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <textarea
            className=" p-1 border outline-none rounded text-blackk w-full"
            placeholder="Description"
            required
            name="description"
            rows="8"
            //value={desc}
            //onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-2">
          <input
            type="url"
            name="imgUrl"
            required
            placeholder="Image Url "
            className="w-full border p-1 rounded outline-none text-blackk "
            //value={bandName}
            //onChange={(e) => setBandName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            name="price"
            required
            placeholder="Price "
            className="w-full border p-1 rounded outline-none text-blackk "
            //value={bandName}
            //onChange={(e) => setBandName(e.target.value)}
          />
        </div>

        <div className="w-full flex justify-between items-center ">
          <select
            required
            name="catName"
            type="text"
            className="mb-2 appearance-none outline-none mt-1 bg-slate-300 text-right
              rounded p-1 px-4 text-slate-600"
          >
            <option value="">Select A Category</option>
            <option value="shoulder bags">Shoulder bags</option>
            <option value="travel bags">Travel bags</option>
            <option value="daypacks">Daypacks</option>
            <option value="sports bags">Sports bags</option>
          </select>
          <AddNewButton className=""></AddNewButton>
        </div>
      </form>
    </div>
  );
}

export default AddNewPage;
