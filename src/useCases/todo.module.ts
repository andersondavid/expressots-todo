import { CreateModule } from "@expressots/core";
import { FindController } from "./find/todo-find.controller";
import { TodoCreateController } from "./create/todo-create.controller";
import { TodoFindallController } from "./findall/todo-findall.controller";
import { TodoUpdateController } from "./update/todo-update.controller";


const TodoModule = CreateModule([FindController, TodoCreateController, TodoFindallController, TodoUpdateController]);

export { TodoModule };
