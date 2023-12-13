import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: {type: String, required: true},
    course: { type: String, required: true },
    published: {type: Boolean},
    points: {type:Number, required:true},
    shuffleAnswers: {type:Boolean},
    timeLimit: {type:Number, required:true},
    multipleAttempts: {type:Boolean},
    dueDate: {type:Date, required : true},
    availableFrom: {type:Date, required : true},
    availableUntil: {type:Date},
  },
  { collection: "quiz", versionKey: false });
export default quizSchema;