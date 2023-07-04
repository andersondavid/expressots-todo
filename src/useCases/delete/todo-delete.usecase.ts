import { provide } from "inversify-binding-decorators";
import { ToDoFactory } from "../../factories/todo-factories";

@provide(TodoDeleteUseCase)
class TodoDeleteUseCase {

    constructor(private todoFactory: ToDoFactory) { }

    execute(payload): boolean {
        this.todoFactory.delete(payload.id);
        return true
    }
}

export { TodoDeleteUseCase };
    