import * as dao from "./dao.js";
function QuizRoutes(app) {

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
    const modules = await dao.findQuizByCourse(cid);
    res.send(modules);
  });
}
export default QuizRoutes;