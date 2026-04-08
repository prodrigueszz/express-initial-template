import { z } from 'zod'
import { config } from 'dotenv'

// Mudar para o arquivo .env real
config({ path: ".env.example" });

const envSchema = z.object({
  DATABASE_URL: z.string()
    .startsWith('postgresql://'),
  PORT: z.number()
}) 

export const env = envSchema.parse({
  databaseUrl: process.env.DATABASE_URL,
  port: process.env.PORT
})