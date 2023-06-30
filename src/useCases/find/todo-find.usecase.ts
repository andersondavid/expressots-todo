import { provide } from "inversify-binding-decorators";
import { ITodoFindRequestDTO, ITodoFindResponseDTO } from "./todo-find.dto";
import { ToDoFactory } from "../../factories/todo-factories";
import { Report, StatusCode } from "@expressots/core";

@provide(FindUseCase)
class FindUseCase {

	constructor(private todoFactory: ToDoFactory) { }

	execute(payload: ITodoFindRequestDTO): ITodoFindResponseDTO | null {
		const todoExists = this.todoFactory.find(payload.id)

		if (!todoExists) {
			Report.Error("ToDo Not Found", StatusCode.BadRequest, "todo-find-usecase");
		} else {
			return {
				id: todoExists.id,
				content: todoExists.content
			};

		}
		return null
	}
}

export { FindUseCase };
