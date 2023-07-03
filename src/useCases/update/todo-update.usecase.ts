import { provide } from "inversify-binding-decorators";
import { ToDoFactory } from "../../factories/todo-factories";
import { ITodoUpdateRequestDTO, ITodoUpdateResponseDTO } from "./todo-update.dto";
import { Report, StatusCode } from "@expressots/core";

@provide(TodoUpdateUseCase)
class TodoUpdateUseCase {
	constructor(private todoFactory: ToDoFactory) { }


	execute(payload: ITodoUpdateRequestDTO): ITodoUpdateResponseDTO | null {
		try {
			if (payload == undefined) {
				Report.Error("Wrong request data", StatusCode.BadRequest, "todo-update-usecase");
			} else {
				return this.todoFactory.update(payload);
			}

			return null
		} catch (error: any) {
			throw error
		}
	}
}

export { TodoUpdateUseCase };
