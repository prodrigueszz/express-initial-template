import { env } from '@/utils/env.js'
import { drizzle } from 'drizzle-orm/node-postgres'
import { schema } from '@/db/schema/index.js'

export const db = drizzle(env.DATABASE_URL, {
  schema
})