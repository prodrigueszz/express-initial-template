import { z } from 'zod'
import { config } from 'dotenv'

// Mudar para o arquivo .env real
config({ path: ".env.example" });

const envSchema = z.object({
  DATABASE_URL: z.url()
    .startsWith('postgresql://'),
  PORT: z.string()
}); 

export const env = envSchema.parse(process.env);
