import e from "express";
import { createTodos, deleteTodos, getTodos, updateTodos } from "../controllers/todo.controller.js";

const router = e.Router();

router
    .route("/todos")
    .get(getTodos)
    .post(createTodos)

router
    .route("/todos/:id")
    .delete(deleteTodos)
    .patch(updateTodos)


export default router;