import { BaseController, StatusCode } from "@expressots/core";
import { controller, httpPut, requestBody, response } from "inversify-express-utils";
import { Response } from "express";
import { TodoUpdateUseCase } from "./todo-update.usecase";
import { ITodoUpdateResponseDTO, ITodoUpdateRequestDTO } from "./todo-update.dto";

@controller("/todo/update")
class TodoUpdateController extends BaseController {

  constructor(private todoUpdateUseCase: TodoUpdateUseCase) {
		super("todo-update-controller")
	}

  @httpPut("/")
  execute(@requestBody() payload: ITodoUpdateRequestDTO, @response() res: Response): ITodoUpdateResponseDTO {
    return this.callUseCase(
            this.todoUpdateUseCase.execute(payload),
            res,
            StatusCode.OK,
    );
  }
}

export { TodoUpdateController };
