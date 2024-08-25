import type { InferSelectModel } from "drizzle-orm";
import type { variables } from "~/server/database/schema";

export type Variable = InferSelectModel<typeof variables>;