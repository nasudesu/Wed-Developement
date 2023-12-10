const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");

let token = null;

beforeAll(async () => {
  await User.deleteMany({});
  const result = await api
    .post("/api/user/signup")
    .send({ email: "mattiv@matti.fi", password: "R3g5T7#gh" });
  token = result.body.token;
});

describe("when there is initially some workouts saved", () => {
  beforeEach(async () => {
    await Workout.deleteMany({});
    await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(workouts[0])
      .send(workouts[1]);
  });

  test("Workouts are returned as json", async () => {
    await api
      .get("/api/workouts")
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("New workout added successfully", async () => {
    const newWorkout = {
      title: "testworkout",
      reps: 10,
      load: 100,
    };
    await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(newWorkout)
      .expect(201);
  });

  test("Deleting a workout ", async () => {
    const workoutsAtStart = await Workout.find({});
    const workoutToDelete = workoutsAtStart[0];
    await api
      .delete(`/api/workouts/${workoutToDelete.id}`)
      .set("Authorization", "bearer " + token)
      .expect(200);
    const workoutsAtEnd = await Workout.find({});
    expect(workoutsAtEnd).toHaveLength(workoutsAtStart.length - 1);
  });

  test("Updating a workout ", async () => {
    const workoutsAtStart = await Workout.find({});
    console.log(workoutsAtStart);
    const workoutToUpdate = workoutsAtStart[0];
    console.log(workoutToUpdate);
    const updatedWorkout = {
      title: "updated workout",
      reps: 10,
      load: 100,
    };
    await api
      .patch(`/api/workouts/${workoutToUpdate.id}`)
      .set("Authorization", "bearer " + token)
      .send(updatedWorkout)
      .expect(200);
    const workoutsAtEnd = await Workout.find({});
    expect(workoutsAtEnd[0].title).toEqual(updatedWorkout.title);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
