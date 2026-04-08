import express from 'express'
import { env } from '@/utils/env.js'

const app = express();

app.listen(env.PORT, () => {
  console.log(`server listenning on port ${env.PORT}`);
})
