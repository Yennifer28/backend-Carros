import express from 'express'
import dotenv from 'dotenv'
//import authMiddleware from './middlewares/authMiddleware.js'
//import errorHandler from './middlewares/errorHandler.js'
//import rateLimitMiddleware from './middlewares/rateLimit.js'
import routes from './routes/index.js'

import cors from 'cors'

const corsOptions ={
  origin : '*',
  optionSuccesStatus :200
}

dotenv.config();

const app = express();

app.use(express.json());
//app.use(rateLimitMiddleware);
app.use(cors(corsOptions))
app.use('/api', routes);
//app.use(errorHandler);

const PORT = process.env.PORT || 3020;

app.listen(PORT, () => {
  console.log(`Servidor Trabajando 🚀: ${PORT}`);
});