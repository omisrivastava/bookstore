import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import BookRoute from "./route/Book.route.js";
import Userroute from "./route/User.route.js";
import cors from "cors";

const PORT = process.env.PORT || 4001;
const URI = process.env.MONGODBURI;

const app = express();

app.use(cors());
app.use(express.json());

//connect to mongodb
try {
  mongoose.connect(URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("error", error);
}

app.use("/book", BookRoute);
app.use("/user", Userroute);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
