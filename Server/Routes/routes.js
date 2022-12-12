import express,{Router} from "express"

import { addUser,getUsers,takeUser,editUser,deleteUser} from "../controller/user-controll.js";


const router = express.Router();

router.post("/add",addUser );
router.get("/all",getUsers );
router.get("/:id",takeUser);
router.post("/:id",editUser );
router.delete("/:id",deleteUser );


export default router;