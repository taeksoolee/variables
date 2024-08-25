import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'sqlite',
  dbCredentials: {
    url: './server/database/db.sqlite',
  },
  schema: './server/database/schema.ts',
  out: './server/database/migrations'
})