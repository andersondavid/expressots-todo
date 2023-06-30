import { BaseController, StatusCode } from "@expressots/core";
import { controller, httpPost, requestBody, response } from "inversify-express-utils";
import { Response } from "express";
import { TodoCreateUseCase } from "./todo-create.usecase";
import { ITodoCreateRequestDTO, ITodoCreateResponseDTO } from "./todo-create.dto";

@controller("/todo/create")
class TodoCreateController extends BaseController {
  constructor(private todoCreateUseCase: TodoCreateUseCase) {
    super("todo-create-controller")
  }

  @httpPost("/")
  execute(@requestBody() payload: ITodoCreateRequestDTO, @response() res: Response): ITodoCreateResponseDTO {    

    return this.callUseCase(
      this.todoCreateUseCase.execute(payload),
      res,
      StatusCode.OK,
    );
  }
}

export { TodoCreateController };
