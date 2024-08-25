import { z } from "zod";

const Body = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default defineEventHandler(async (event) => {
  const body = Body.safeParse(await readBody<{
    email: string;
    password: string;
  }>(event));

  if (!body.success) {
    setResponseStatus(event, 400, 'Bad Request');
    return {
      error: 'Invalid body',
    };
  }

  const { email, password } = body.data;

  // TODO: jwt 구현
  
  return {
    access: '',
    refresh: '',
  };
});