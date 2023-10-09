import express from 'express';
import routerApi from './routes';
const cors = require('cors');
import './config/mongodbConnection';

const app = express();
app.use(express.json());

// Config
const options = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(options));

// Routes
routerApi(app);

const PORT = process.env.NODE_PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
