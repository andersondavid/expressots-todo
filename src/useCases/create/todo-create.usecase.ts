import { provide } from "inversify-binding-decorators";
import { ITodoCreateRequestDTO, ITodoCreateResponseDTO } from './todo-create.dto'
import { ToDoRepository } from "../../repository/todo/todo-repository";
import { Report, StatusCode } from "@expressots/core";


@provide(TodoCreateUseCase)
class TodoCreateUseCase {
	constructor(private todoRepository: ToDoRepository) { }
	execute(payload: ITodoCreateRequestDTO): ITodoCreateResponseDTO | null {
		try {
			const todo = this.todoRepository.create({id: '123', content: payload.content})

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
