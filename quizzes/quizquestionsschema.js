import mongoose, { Schema } from "mongoose";
const quizQuestionsSchema = new mongoose.Schema({ 
    quiz: {type : Schema.ObjectId},
    questionType: {type : String, required : true},
    title: {type : String},
    questionText : {type: String},
    possibleAnswers : {type : [String]},
    correctAnswers : {type : [String]},
 }, {collection: "quiz_questions", versionKey: false});

export default quizQuestionsSchema;