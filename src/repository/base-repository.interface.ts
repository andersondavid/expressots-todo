interface IBaseRepository<T> {
	find(id: string): T | null;
	create(item: T): T | null;
	delete(id: string): boolean;
	findAll(): T[] | null;
	update(item: T): T | null;
}

export { IBaseRepository }