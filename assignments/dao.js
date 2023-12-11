import model from "./model.js";

export const createAssignment = (assignment) => model.create(assignment);

export const findAssignmentsByCourse = (courseNumber) =>
  model.find({ course: courseNumber });

  export const updateAssignment = (assignmentId, assignment) =>
  model.updateOne({ _id: assignmentId }, { $set: assignment });

export const deleteAssignment = (id) => model.deleteOne({ _id: id });


