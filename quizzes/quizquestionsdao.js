import model from "./quizquestionsmodel.js";

export const addQuestion = (question) => model.create(question);
export const addQuestions = (questions) => model.insertMany(questions);

export const findQuizQuestionsById = (quizId) =>
  model.find({ quiz: quizId });

export const updateQuizQuestion = (quizQuestionId, updatedQuestion) =>
  model.updateOne({ _id: quizQuestionId }, { $set: updatedQuestion });

export const deleteQuizQuestion = (id) => model.deleteOne({ _id: id });


