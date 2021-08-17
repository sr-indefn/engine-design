import { EngineObject } from '../engine/object.js';
import { Example } from './classes/example.js';

export class Main extends EngineObject {
    constructor(engine) {
        // initialization
        super(engine);

        // example class initialization
        this.example = new Example(engine);

        // use update for logistic stuff
        this.update = function (dt) {};
    }
}
