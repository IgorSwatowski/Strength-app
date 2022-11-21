const express = require('express')
import {
    getUsers,
    deleteUser
} from "../controllers/dashboardController";
import { requireAuth } from "../middleware/requireAuth"

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// GET all workouts
router.get('/users', getUsers)


module.exports = router