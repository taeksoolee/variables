import { db } from "~/server/database";
import { variables } from "~/server/database/schema";

export default defineEventHandler(() => {
  const results = db.select().from(variables).all();
  return results;
});
