import { TaskNpmPublish } from "../../project-control";

export class PrePush {
    constructor() {
        try {
            // const noop = new TaskNpmPublish('ng2-express', 'npm', '..\\..\\NgResources\\ng2-express', 'library', 'projects\\ng2-express\\dist', '..\\..\\Angular.Net.CLI\\AngularNetCore\\wwwroot', 'package-ng2-express');
            // we can only see the console.log is the process.exit(1);
            // process.exit(1);
        } catch (e) {
            console.error(e.message);
            process.exit(1);
        }
    }
}
new PrePush();