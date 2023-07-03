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
		const existingContentItemIndex = existingItem?.content.findIndex((task) => task.id == itemId);
		
		if (existingItem && existingContentItemIndex !== undefined && existingContentItemIndex >= 0) {
			console.log(existingItem.content[existingContentItemIndex]);
			
			existingItem.content[existingContentItemIndex].isComplete = isComplete

		} else if (!existingItem) {
			throw new Error(`Object (todo) with id ${id} don't exists`);
		} else if (!existingContentItemIndex){
			throw new Error(`Object (task) with id ${itemId} don't exists`);
		}


		console.log(existingItem);


		return existingItem
	}
}

export { ToDoRepository }