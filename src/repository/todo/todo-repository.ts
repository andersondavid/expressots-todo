import { provide } from "inversify-binding-decorators";
import { IToDoEntity } from "../../entities/todo.entity";
import { BaseRepository } from "../base-repository";

@provide(BaseRepository)
class ToDoRepository extends BaseRepository<IToDoEntity> {

	updateTodo({
		id,
		itemId,
		isComplete,
	}: {
		id: string,
		itemId: string,
		isComplete: boolean,
	}): IToDoEntity | null {
		const existingItem = this.TODODB.find((todo) => todo.id == id);

		if (existingItem && existingItem.content[itemId]) {
			existingItem.content[itemId].isComplete = isComplete
		} else {
			throw new Error(`Object with id ${id} don't exists`);
		}


		console.log(existingItem);


		return existingItem
	}
}

export { ToDoRepository }