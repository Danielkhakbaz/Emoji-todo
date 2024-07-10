"use server";

import { revalidatePath } from "next/cache";
import { db } from "db";
import { eq } from "drizzle-orm";
import { todoTable, SelectTodo } from "db/schema";

export const deleteTodo = async (id: SelectTodo["id"]) => {
  revalidatePath("/");

  return await db.delete(todoTable).where(eq(todoTable.id, id));
};
