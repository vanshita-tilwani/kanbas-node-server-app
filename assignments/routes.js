import db from "../database/index.js";
function AssignmentRoutes(app) {

  app.put("/api/assignments/:asid", (req, res) => {
    const { asid } = req.params;
    const assignmentIndex = db.assignments.findIndex(
      (m) => m._id === asid);
    db.assignments[assignmentIndex] = {
      ...db.assignments[assignmentIndex],
      ...req.body
    };
    res.sendStatus(204);
  });

  app.delete("/api/assignments/:asid", (req, res) => {
    const { asid } = req.params;
    db.assignments = db.assignments.filter((m) => m._id !== asid);
    res.sendStatus(200);
  });

  app.post("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const newAssignment = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    db.assignments.push(newAssignment);
    res.send(newAssignment);
  });

  app.get("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const assignments = db.assignments
      .filter((m) => m.course === cid);
    res.send(assignments);
  });
}
export default AssignmentRoutes;