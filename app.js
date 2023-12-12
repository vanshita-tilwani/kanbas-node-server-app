import "dotenv/config";
import session from "express-session";
import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js";
import UserRoutes from "./users/routes.js";
import QuizRoutes from "./quizzes/routes.js";
import cors from "cors";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb+srv://msvtilwani:DAEDn9LL2mPbWhKp@kanbas-app.168rht5.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors({
    credentials: true,
   origin: process.env.FRONTEND_URL,
}
));

  
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
  app.use(session(sessionOptions));
  
app.use(express.json());
QuizRoutes(app);
UserRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app)
CourseRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);