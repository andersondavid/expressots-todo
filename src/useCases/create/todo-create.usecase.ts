import { provide } from "inversify-binding-decorators";
import { ITodoCreateRequestDTO, ITodoCreateResponseDTO } from './todo-create.dto'
import { Report, StatusCode } from "@expressots/core";
import { ToDoFactory } from "../../factories/todo-factories";


@provide(TodoCreateUseCase)
class TodoCreateUseCase {
	constructor(private todoFactory: ToDoFactory) { }
	execute(payload: ITodoCreateRequestDTO): ITodoCreateResponseDTO | null {
		try {
			const todo = this.todoFactory.create({ content: payload.content })

			if (todo?.id === undefined) {
				Report.Error("ToDo Not Created", StatusCode.BadRequest, "todo-create-usecase");
			} else {
				return {
					id: todo.id,
					content: todo.content
				}
			}

			return null
		} catch (error: any) {
			throw error
		}
	}
}

export { TodoCreateUseCase };
