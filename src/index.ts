import express from "express";
import routerApi from "./routes";
const cors = require("cors");
import "./config/mongodbConnection";
import {
  boomErrorHandler,
  errorHandler,
} from "./middleware/errorHandlers.middleware";

const app = express();
app.use(express.json());

// Config
const options = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(options));

// Routes
routerApi(app);

// Middleware
app.use(boomErrorHandler);
app.use(errorHandler);

const PORT = process.env.NODE_PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
