import * as dao from "./dao.js";
function CourseRoutes(app) {

  app.get("/api/courses/:id", async(req, res) => {
    const { id } = req.params;
    const course = await dao.findCourseByNumber(id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  });

  app.put("/api/courses/:id", async(req, res) => {
    const { id } = req.params;
    const course = req.body;
    const status = await dao.updateCourse(id, course);
    res.json(status);
  });

  app.delete("/api/courses/:id", async(req, res) => {
    const { id } = req.params;
    const status = await dao.deleteCourse(id);
    res.json(status);
  });

  app.post("/api/courses", async(req, res) => {
    const course = await dao.findCourseByNumber(req.body.number);
    if (course) {
      res.status(400).json(
        { message: "Course already exists!" });
    }
    const newCourse = await dao.createCourse(req.body);
    res.json(newCourse);
  });

  app.get("/api/courses", async(req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  });
}
export default CourseRoutes;