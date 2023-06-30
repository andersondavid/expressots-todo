import { provide } from "inversify-binding-decorators";
import { IEntity } from "./base.entity";
@provide(IToDoEntity)
class IToDoEntity implements IEntity {
	id!: string;
	content!: {
		id: string;
		textTodo: string;
		isComplete: boolean;
	}[]
}

export { IToDoEntity };