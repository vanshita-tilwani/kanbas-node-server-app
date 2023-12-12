import model from "./model.js";

export const createQuiz = (quiz) => model.create(quiz);

export const findQuizByCourse = (courseNumber) =>
  model.find({ course: courseNumber });

  export const updateQuiz = (quizId, updatedQuiz) =>
  model.updateOne({ _id: quizId }, { $set: updatedQuiz });

export const deleteQuiz = (id) => model.deleteOne({ _id: id });


