import { provide } from "inversify-binding-decorators";
import { IEntity } from "./base.entity";

type ContentType = {
	id: string;
	textTodo: string;
	isComplete: boolean;
}

@provide(IToDoEntity)
class IToDoEntity implements IEntity {
	id!: string;
	content!: ContentType[]
}

export { IToDoEntity };