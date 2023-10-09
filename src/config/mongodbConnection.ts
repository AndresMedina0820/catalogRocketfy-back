import mongoose from "mongoose";
import config from "./config";

const URI = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbCluster}.kabk0gm.mongodb.net/${config.dbName}?retryWrites=true&w=majority`;

mongoose
  .connect(URI)
  .then(() => console.log("Success connection"))
  .catch((error) => console.log("Error connection", error));
