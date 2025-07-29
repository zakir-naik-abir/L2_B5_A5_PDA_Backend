import { Server } from "http";
import app from "./app";
import { envVars } from "./app/config/env";
import mongoose from "mongoose";

let server: Server;

const startServer = async () => {
  try {
    server = app.listen(envVars.PORT, () => {
      console.log(`✅ Server is listening to port ${envVars.PORT}`);
    });

    await mongoose.connect(envVars.DB_URL)
    console.log(`✅ Connected to DB!`)
  } catch (error) {
    console.log(`❌ Server Error ${error}`);
  }
};

(async () => {
  await startServer()
})();

