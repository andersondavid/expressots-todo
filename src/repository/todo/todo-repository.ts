import { provide } from "inversify-binding-decorators";
import { IToDoEntity } from "../../entities/todo.entity";
import { BaseRepository } from "../base-repository";

@provide(BaseRepository)
class ToDoRepository extends BaseRepository<IToDoEntity> {

}

export { ToDoRepository }