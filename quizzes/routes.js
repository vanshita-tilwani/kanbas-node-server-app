import * as dao from "./dao.js";
import * as questionDao from "./quizquestionsdao.js";

function QuizRoutes(app) {
  /* Quiz */
  app.put("/api/quiz/:qid", async(req, res) => {
    const { qid } = req.params;
    const quiz = req.body;
    const status = await dao.updateQuiz(qid, quiz);
    res.json(status);

  });


  app.delete("/api/quiz/:qid", async(req, res) => {
    const { qid } = req.params;
    const status = await dao.deleteQuiz(qid);
    res.json(status);
  });

  app.post("/api/courses/:cid/quiz", async(req, res) => {
    const { cid } = req.params;
    const newQuiz = {
      ...req.body,
      course: cid,
    };
    const status = await dao.createQuiz(newQuiz);
    res.json(status);
  });

  app.get("/api/courses/:cid/quiz", async(req, res) => {
    const { cid } = req.params;
    const quizzes = await dao.findQuizByCourse(cid);
    res.send(quizzes);
  });

  /* Quiz Questions */
  app.get("/api/quiz/:qid/questions", async(req, res) => {
    const { qid } = req.params;
    const questions = await questionDao.findQuizQuestionsById(qid);
    res.send(questions);
  });

  app.put("/api/quiz/question/:qid", async(req, res) => {
    const { qid } = req.params;
    const question = req.body;
    const status = await questionDao.updateQuizQuestion(qid, question);
    res.json(status);
  });


  app.delete("/api/quiz/question/:qid", async(req, res) => {
    const { qid } = req.params;
    const status = await questionDao.deleteQuizQuestion(qid);
    res.json(status);
  });

  app.post("/api/quiz/:qid/question", async(req, res) => {
    const { qid } = req.params;
    const mewQuestion = {
      ...req.body,
      quiz: qid,
    };
    const status = await questionDao.addQuestion(mewQuestion);
    res.json(status);
  });

  app.post("/api/quiz/:qid/questions", async(req, res) => {
    const { qid } = req.params;
    const status = await questionDao.addQuestions(req.body);
    res.json(status);
  });

}
export default QuizRoutes;