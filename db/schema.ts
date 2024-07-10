import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const todoTable = pgTable("todo_table", {
  id: serial("id").primaryKey(),
  text: varchar("text").notNull(),
});

export type InsertTodo = typeof todoTable.$inferInsert;
export type SelectTodo = typeof todoTable.$inferSelect;
