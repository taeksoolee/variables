import { db } from "../../database";
import { variables } from "../../database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const result = await db.insert(variables).values(body).execute();

  setResponseStatus(event, 201);
  return result;
});