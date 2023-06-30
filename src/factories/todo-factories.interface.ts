import { IToDoEntity } from "../entities/todo.entity";

interface IToDoFactory {
	find(id: string): IToDoEntity | null;
	create(todo: { id: string, content: any }): IToDoEntity | null;
	findAll(): IToDoEntity[];
}

export { IToDoFactory }