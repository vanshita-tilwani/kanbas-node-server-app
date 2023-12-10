import model from "./model.js";

export const createCourse = (course) => model.create(course);
export const findAllCourses = () => model.find();
export const findCourseByNumber = (courseNumber) =>
  model.findOne({ number: courseNumber });

  export const updateCourse = (courseNumber, course) =>
  model.updateOne({ number: courseNumber }, { $set: course });
export const deleteCourse = (id) => model.deleteOne({ number: id });


