import express,{Router} from "express"
import { addUser,getUsers } from "../controller/user-controll.js";


const router = express.Router();

router.post("/add",addUser );
router.get("/all",getUsers );


export default router;