import { CreateModule } from "@expressots/core";
import { FindController } from "./find/todo-find.controller";
import { TodoCreateController } from "./create/todo-create.controller";

const TodoModule = CreateModule([FindController, TodoCreateController]);

export { TodoModule };
