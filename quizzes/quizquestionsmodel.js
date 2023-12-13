import mongoose from "mongoose";
import schema from "./quizquestionsschema.js";
const model = mongoose.model("quiz_questions", schema);
export default model;