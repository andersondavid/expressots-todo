import { BaseController, StatusCode } from "@expressots/core";
import { controller, httpGet, response } from "inversify-express-utils";
import { Response } from "express";
import { TodoFindallUseCase } from "./todo-findall.usecase";
import { ITodoFindallResponseDTO } from "./todo-findall.dto";

@controller("/todo/findall")
class TodoFindallController extends BaseController {

  constructor(private todoFindallUseCase: TodoFindallUseCase) {
		super("todo-findall-controller")
	}

  @httpGet("/")
  execute(@response() res: Response): ITodoFindallResponseDTO {
    return this.callUseCase(
            this.todoFindallUseCase.execute(),
            res,
            StatusCode.OK,
    );
  }
}

export { TodoFindallController };
