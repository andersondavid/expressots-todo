import "reflect-metadata";

import { AppInstance, ServerEnvironment } from "@expressots/core";
import { container } from "./app.container";

async function bootstrap() {
    AppInstance.create(container);
    AppInstance.listen(3000, ServerEnvironment.Development, {
        appName: 'ToDo ExpressoTS',
        appVersion: '1.0.0'
    });
}

bootstrap();
