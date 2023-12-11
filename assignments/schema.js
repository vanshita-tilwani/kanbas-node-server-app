import mongoose from "mongoose";
const assignmentsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    course: { type: String, required: true },
  },
  { collection: "assignments" });
export default assignmentsSchema;