import { CreateModule } from "@expressots/core";
import { FindController } from "./find/todo-find.controller";

const TodoModule = CreateModule([FindController]);

export { TodoModule };
