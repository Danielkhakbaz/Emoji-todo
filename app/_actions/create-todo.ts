"use server";

import { revalidatePath } from "next/cache";
import { db } from "db";
import { todoTable } from "db/schema";

export const createTodo = async (formData: FormData) => {
  let text = formData.get("text") as string;

  revalidatePath("/");

  return await db.insert(todoTable).values({ text });
};
