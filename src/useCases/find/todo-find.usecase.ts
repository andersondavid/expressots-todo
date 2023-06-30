import { provide } from "inversify-binding-decorators";
import { ITodoFindRequestDTO, ITodoFindResponseDTO } from "./todo-find.dto";

const TodoRepository = [
	{
		id: "1",
		content: [
			{
				id: "1",
				todoText: "Meu lembrete",
				isComplete: false
			}
		]
	},
	{
		id: "2",
		content: [
			{
				id: "1",
				todoText: "Meu outro lembrete",
				isComplete: false
			},
			{
				id: "2",
				todoText: "Meu outro outro lembrete",
				isComplete: false
			},
		]
	},
]

@provide(FindUseCase)
class FindUseCase {

	constructor(private todoRepository = TodoRepository) { }

	execute(payload: ITodoFindRequestDTO): ITodoFindResponseDTO | null {

		const todoExists = this.todoRepository.find(item => item.id === payload.id)

		if (!todoExists) {
			return null
		}

		return {
			id: todoExists.id,
			content: todoExists.content
		};
	}
}

export { FindUseCase };
