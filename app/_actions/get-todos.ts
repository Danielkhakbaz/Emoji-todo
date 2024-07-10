"use server";

import { db } from "db";
import { sql } from "drizzle-orm";
import { todoTable } from "db/schema";

export const getTodos = async () => {
  return await db
    .select()
    .from(todoTable)
    .limit(20)
    .orderBy(sql`${todoTable.id} DESC`);
};
