import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("quiz", schema);
export default model;