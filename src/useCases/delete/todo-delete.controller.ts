import { BaseController, StatusCode } from "@expressots/core";
import { controller, httpDelete, response, requestParam } from "inversify-express-utils";
import { Response } from "express";
import { TodoDeleteUseCase } from "./todo-delete.usecase";
import { ITodoDeleteRequestDTO, ITodoDeleteResponseDTO } from "./todo-delete.dto";

@controller("/todo/delete")
class TodoDeleteController extends BaseController {

  constructor(private todoDeleteUseCase: TodoDeleteUseCase) {
		super("todo-delete-controller")
	}

  @httpDelete("/:id")
  execute(@requestParam() payload: ITodoDeleteRequestDTO, @response() res: Response): ITodoDeleteResponseDTO {
    return this.callUseCase(
            this.todoDeleteUseCase.execute(payload),
            res,
            StatusCode.OK,
    );
  }
}

export { TodoDeleteController };
