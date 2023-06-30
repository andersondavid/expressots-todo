import { inject } from "inversify";
import { IBaseRepository } from "./base-repository.interface";
import { InMemoryDb } from "../provider/in-memory-db/in-memory-db.provider";
import { IEntity } from "../entities/base.entity";
import { provide } from "inversify-binding-decorators";

@provide(BaseRepository)
class BaseRepository<T extends IEntity> implements IBaseRepository<T> {
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
		return {} as T
	}

	findAll(): T[] {
		return this.TODODB
	}

	update(item: T): T | null {
		return item
	}
}

export { BaseRepository }