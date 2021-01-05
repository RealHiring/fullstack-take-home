# Take Home Exercise

Please use Javascript to code the following exercise. We know Javascript is not everyone's primary coding language.**We will NOT be grading you on how well you know Javascript**, but rather on the deeper technical knowledge of code design patterns and best practices.

#### Time Limit

You will have a week to work on this exercise, however our hope is you spend no more than 3-4 hours on it.

When submitting your exercise please include:

- A Readme for how to run the application and any tests (including any dependencies that must be downloaded). Also feel free to include any notes or tidbits about thought process as you tackled the exercise.

- Any comments to explain particular logic or call out something cool!

To submit your exercise, please create a repository in Github and email the link to [sara@join-real.com](mailto:sara@join-real.com). Also please email with any questions you may have. Happy Coding!

---

## Exercise: Course Sign-up

Create an application (Frontend and Backend) that allows people to sign up for courses. Courses are structured in the following way:

- Each course has 4 sessions, and each session's content is released on a weekly basis.

- A new section of the course is opened for sign up every 2 weeks.

- There is a cap of 10 people per course section.

## Getting Started

- Make sure you have `yarn` installed on your machine. If you do not, please look at the following [installation instructions](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

- The server will require Docker. You can download and set up Docker [here](https://www.docker.com/get-started).

### Server

- There is a basic NodeJS server set up(`src/server.ts`). It utilizes:
  - [express](https://expressjs.com/)
  - [Typescript](https://www.typescriptlang.org/)
  - [PostgreSQL](https://www.postgresql.org/)
  - [TypeOrm](https://typeorm.io/#/)


### To Get DB & Server Running
There is some test data included in `server/src/data/` as a starting point to seed your database. Feel free to add or change data.

The database is setup via Docker. There is already a `docker-compose.yml` file in the server directory, so if you have Docker installed, just run:
```bash
docker-compose up -d
```

To create the DB Tables and Seed the Database, we need to install all our server packages. First run:
```bash
yarn
```

Then to create DB Tables, run:
```bash
yarn db:run
```

Then to seed the DB, run:
```bash
yarn db:seed
```

To start the server, run:
```bash
yarn start
```

Any changes you make to the server will hot reload, so no need to start/stop the server on each change.

**NOTE**: If you want to easily visualize your database and don't have a visualizer, [Postico](https://eggerapps.at/postico/) is a great tool. To connect to the database in Postico, you will need the login credentials from `ormconfig.json`.

### Frontend

`course-client` is a React frontend project included for your use. We are **not** judging your CSS skills, but we do want to see a user experience that makes some sense. 

To setup and start the app run:
```
yarn && yarn start
```

You will see a `Login` component requiring a username and email. **You do not need to implement authentication. Any fake username and email will work.** This is just to give you access to a user for course signup.

## Requirements

- A session's content should be visible only by users who have signed up for the course.

- A list of users signed up for each course section should be visible.

- A user should be able to sign up and remove themselves from a course.

- A section is considered full when there are 5 people in it. A user should not be able to sign up for a full section.
