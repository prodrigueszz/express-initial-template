import { env } from '@/utils/env.js'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  out: './migrations',
  schema: ['./src/db/schema/*'],
  dbCredentials: {
    url: env.DATABASE_URL
  }
})
