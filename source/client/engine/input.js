import { Vector } from './vector.js';

export class Input {
    constructor(engine) {
        this.engine = engine;
    }

    keyPress(keyCode) {
        return this.engine.keyIsDown(keyCode) || 0;
    }

    getWASD() {
        let x_axis = this.keyPress(68) - this.keyPress(65);
        let y_axis = this.keyPress(83) - this.keyPress(87);

        return new Vector(x_axis, y_axis);
    }

    getArrows() {
        let x_axis = this.keyPress(39) - this.keyPress(37);
        let y_axis = this.keyPress(40) - this.keyPress(38);

        return new Vector(x_axis, y_axis);
    }

    getDir() {
        let value = this.getWASD().add(this.getArrows());

        if (value.eql(Vector.Z())) return value;
        else return value.nrm();
    }
}
