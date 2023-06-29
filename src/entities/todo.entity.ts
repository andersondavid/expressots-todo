import { provide } from "inversify-binding-decorators";
import { IEntity } from "./base.entity";

type ContentType = {
	id: string;
	textTodo: string;
	isComplete: boolean;
}

@provide(ToDo)
class ToDo implements IEntity {
	id: string;
	content!: ContentType[]

	constructor(){
		this.id = '0'
	}
}

export { ToDo };