import { BaseController, StatusCode } from "@expressots/core";
import { controller, httpGet, requestParam, response } from "inversify-express-utils";
import { Response } from "express";
import { ITodoFindRequestDTO, ITodoFindResponseDTO } from './todo-find.dto'
import { FindUseCase } from './todo-find.usecase'
import { log } from "console";

@controller("/todo/find")
class FindController extends BaseController {
	constructor(private todoFindUseCase: FindUseCase) {
		super("todo-find-controller");
	}

	@httpGet("/:id")
	execute(@requestParam() payload: ITodoFindRequestDTO, @response() res: Response): ITodoFindResponseDTO {

		{
			return this.callUseCase(
				this.todoFindUseCase.execute(payload),
				res,
				StatusCode.OK
			)
		}
	}
}

export { FindController };
