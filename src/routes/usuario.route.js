import express from "express"
import {
    ListarUsers,
    criarUser,
    obterUser,
    atualizarUser,
    deletarUser
} from "../controllers/usario.control.js"

const router = express.Router()

router.get("/", ListarUsers);
router.post("/", criarUser);
router.get("/:id", obterUser);
router.put("/:id",atualizarUser);
router.delete("/:id", deletarUser);


export default router;