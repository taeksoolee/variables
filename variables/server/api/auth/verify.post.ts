import { z } from "zod";

const Body = z.object({
  access: z.string(),
});

export default defineEventHandler(async (event) => {
  const body = Body.safeParse(await readBody<{
    access: string;
  }>(event));

  if (!body.success) {
    setResponseStatus(event, 400, 'Bad Request');
    return {
      error: 'Invalid body',
    };
  }

  const { access } = body.data;
  const isValid = access === 'abc'; // TODO: token 검증

  if (isValid) {
    setResponseStatus(event, 204, 'No Content');
    return;
  } else {
    setResponseStatus(event, 400, 'Bad Request');
    return {
      error: 'Invalid body',
    };
  }
});