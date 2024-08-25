import { eq } from "drizzle-orm";
import { isId, parseId } from "~/lib";
import { db } from "~/server/database";
import { variables } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;

  if (!isId(id)) {
    setResponseStatus(event, 404, 'Page Not Found');
    return { error: 'Page Not Found' };
  }

  const result = db
    .select()
    .from(variables)
    .where(eq(variables.id, parseId(id)))
    .get();
  return result;
});
