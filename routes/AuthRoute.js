import express from "express";
import {
    Login, 
    Logout 
} from "../controllers/Users.js"

const router = express.Router();

router.post('/login', Login);
router.delete('/logout', Logout);

export default router;