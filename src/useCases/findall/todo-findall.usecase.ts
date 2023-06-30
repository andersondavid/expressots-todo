import { provide } from "inversify-binding-decorators";
import { ITodoFindallResponseDTO } from "./todo-findall.dto";
import { ToDoFactory } from "../../factories/todo-factories";

@provide(TodoFindallUseCase)
class TodoFindallUseCase {

    constructor(private todoFactory: ToDoFactory) { }

    execute(): ITodoFindallResponseDTO[] {
        const getTodos = this.todoFactory.findAll()

        return getTodos
    }
}

export { TodoFindallUseCase };
