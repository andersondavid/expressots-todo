import { AppContainer } from "@expressots/core";
import { TodoModule } from "./todo/todo.module";

const appContainer = new AppContainer();

const container = appContainer.create([TodoModule]);

export { container };
