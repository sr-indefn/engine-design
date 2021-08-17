import { EngineObject } from '../../engine/object.js';
import { Vector } from '../../engine/vector.js';

export class Example extends EngineObject {
    constructor(engine) {
        // initialization
        super(engine);

        // use update for logistic stuff
        this.update = function (dt) {};

        // use render for graphic stuff
        this.render = function () {};
    }
}
