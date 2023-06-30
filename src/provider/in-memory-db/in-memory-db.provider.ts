import { IEntity } from "../../entities/base.entity";
import { provideSingleton } from "@expressots/core";

@provideSingleton(InMemoryDb)
class InMemoryDb {
    private readonly TODO_DB: IEntity[] = [];
    public getToDoDb(): IEntity[] {
        return this.TODO_DB;
    }
}

export { InMemoryDb };
 