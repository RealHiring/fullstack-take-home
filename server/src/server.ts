import "reflect-metadata";

import { Course } from './entity/course';
import { CourseSection } from './entity/course-section';
import { CourseSectionSeed } from './data/course-sections';
import { CourseSeed } from './data/courses';
import { CourseSession } from './entity/course-session';
import { CourseSessionSeed } from './data/course-sessions';
import { createConnection } from 'typeorm';
import express from "express";

createConnection().then(async (connection) => {
  const app = express();
  const port = 8080;
  
  await connection.manager.save(Course, CourseSeed);
	await connection.manager.save(CourseSection, CourseSectionSeed);
  await connection.manager.save(CourseSession, CourseSessionSeed);
  
  app.listen({ port }, () => {
    console.log(`Course server running at http://localhost:${port}`);
  });

})