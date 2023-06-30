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
		newTodo.content = content
		const todo = this.todoRepository.create(newTodo)

		return todo || null;
	}
}

export { ToDoFactory }