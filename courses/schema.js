import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    name: { type: String, required: true, },
    number: {type: String, required: true, unique: true},
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    credits: {type : Number, required : true},
    description: String,
  },
  { collection: "courses", versionKey: false });
export default courseSchema;