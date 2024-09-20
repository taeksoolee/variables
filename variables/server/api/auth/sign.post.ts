import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "~/server/database";
import { users } from "~/server/database/schema";

const Body = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default defineEventHandler(async (event) => {
  console.log(await readBody<{
    email: string;
    password: string;
  }>(event));
  const {data, error, success} = Body.safeParse(await readBody<{
    email: string;
    password: string;
  }>(event));

  if (error) {
    setResponseStatus(event, 400, 'Bad Request');
    return {
      error,
    };
  }

  const { email, password } = data;

  const user = (await db.select().from(users).where(eq(users.email, email)).execute())[0];

  console.log(user);

  // TODO: jwt 구현
  
  return {
    access: '',
    refresh: '',
  };
});