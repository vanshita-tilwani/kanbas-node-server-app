import * as dao from "./dao.js";
function AssignmentRoutes(app) {

  app.put("/api/assignments/:asid", async(req, res) => {
    const { asid } = req.params;
    const assignment = req.body;
    const status = await dao.updateAssignment(asid, assignment);
    res.json(status);
  });

  app.delete("/api/assignments/:asid", async(req, res) => {
    const { asid } = req.params;
    const status = await dao.deleteAssignment(asid);
    res.json(status);
  });

  app.post("/api/courses/:cid/assignments", async(req, res) => {
    const { cid } = req.params;
    const newAssignment = {
      ...req.body,
      course: cid,
    };
    const status = await dao.createAssignment(newAssignment);
    res.json(status);
  });

  app.get("/api/courses/:cid/assignments", async(req, res) => {
    const { cid } = req.params;
    const assignments = await dao.findAssignmentsByCourse(cid);
    res.send(assignments);
  });
}
export default AssignmentRoutes;