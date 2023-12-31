import { provide } from "inversify-binding-decorators";
import { IToDoEntity } from "../entities/todo.entity";
import { IToDoFactory } from "./todo-factories.interface";
import { ToDoRepository } from "../repository/todo/todo-repository";

@provide(ToDoFactory)
class ToDoFactory implements IToDoFactory {
	constructor(private todoRepository: ToDoRepository) { }


	find(id: string): IToDoEntity | null {
		return this.todoRepository.find(id) || null;
	}

	create({ content }): IToDoEntity | null {
		const newTodo = new IToDoEntity()
		newTodo.id = this.todoRepository.findAll()?.length.toString()
		const newContent = content.map((contentItem, index: number) => {
			return { ...contentItem, id: String(index) }
		})
		newTodo.content = newContent
		const todo = this.todoRepository.create(newTodo)

		return todo || null;
	}

	findAll(): IToDoEntity[] {
		const getTodos = this.todoRepository.findAll();
		const response: IToDoEntity[] = []
		getTodos.forEach(todo => { response.push({ id: todo.id, content: todo.content }) })

		return this.todoRepository.findAll()
	}

	update({ id, itemId, isComplete }): IToDoEntity | null {
		const updatedTodo = this.todoRepository.updateTodo({ id: String(id), itemId: String(itemId), isComplete })
		return updatedTodo
	}

	delete(id: string): boolean {
		return this.todoRepository.delete(String(id))
	}

}

export { ToDoFactory }