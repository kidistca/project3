"use strict";

const { Router } = require("express");
const router = Router();
const routeGuardMiddleware = require("./../middleware/route-guard");

// ---------------------------------- EXERCISE ----------------------------------
// ---------------------------------- EXERCISE ----------------------------------
// ---------------------------------- EXERCISE ----------------------------------

const createExerciseController = require("./../controllers/exercise/create-exercise");

router.post(
  "/exercise/create-exercise",
  routeGuardMiddleware(true),
  createExerciseController
);

module.exports = router;
