import model from "./model.js";

export const createModule = (module) => model.create(module);

export const findModulesByCourse = (courseNumber) =>
  model.find({ course: courseNumber });

  export const updateModule = (moduleId, updatedModule) =>
  model.updateOne({ _id: moduleId }, { $set: updatedModule });

export const deleteModule = (id) => model.deleteOne({ _id: id });


