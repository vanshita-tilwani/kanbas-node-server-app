import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: {type: String, required: true},
    course: { type: String, required: true },
    published: {type: Boolean},
  },
  { collection: "quiz" });
export default quizSchema;