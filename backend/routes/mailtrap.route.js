import express from "express";

import {
	send,
} from "../controllers/mailtrap.controller.js";

const router = express.Router();


router.post("/", send);

export default router;