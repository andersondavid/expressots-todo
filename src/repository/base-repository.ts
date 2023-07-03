import { inject } from "inversify";
import { IBaseRepository } from "./base-repository.interface";
import { InMemoryDb } from "../provider/in-memory-db/in-memory-db.provider";
import { provide } from "inversify-binding-decorators";
import { IToDoEntity } from "../entities/todo.entity";

@provide(BaseRepository)
class BaseRepository<T extends IToDoEntity> implements IBaseRepository<T> {
	@inject(InMemoryDb) private inMemoryDb!: InMemoryDb;

	protected get TODODB(): T[] {
		return [...this.inMemoryDb.getToDoDb()] as T[];
	}

	create(item: T): T | null {
		const existingItem = this.TODODB.find((todo) => todo.id === item.id);
		if (existingItem) {
			throw new Error(`Object with id ${item.id} already exists`);
		}

		this.inMemoryDb.getToDoDb().push(item);
		return item || null;
	}

	delete(id: string): boolean {
		return true
	}

	find(id: string): T | null {
		const existingItem = this.TODODB.find((todo) => todo.id === id);
		if (!existingItem) {
			throw new Error(`Object with id ${id} don't exists`);
		}

		return existingItem
	}

	findAll(): T[] {
		return this.TODODB
	}

	update(item: T): T | null {
		return item
	}

}

export { BaseRepository }