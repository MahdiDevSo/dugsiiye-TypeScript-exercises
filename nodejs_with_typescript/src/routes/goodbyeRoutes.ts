import {Router} from "express";

import { sayGoodbye } from "../controllers/goodbyeController";

const router = Router();

router.get("/goodbye", sayGoodbye)


export default router