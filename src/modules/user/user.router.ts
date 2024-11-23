import { Router } from "express";
import { useController } from "./user.controller";


const useRouter= Router()

useRouter.post('/createUser',useController.createUser)

export default useRouter;