import { Vector } from './vector.js';

const object_collection =
    window.engine_object_collection ||
    (window.engine_object_collection = new Map());

export class EngineObject {
    constructor(level) {
        this.id = object_collection.size;
        object_collection.set(this.id, this);
    }

    destroy() {
        object_collection.delete(this.id);
    }
}

class Input {
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

export function initEngine(width, height, bgcolor) {
    new p5(function (engine) {
        engine.setup = function () {
            engine.__canvas = engine.createCanvas(width, height);
            engine.__width = width;
            engine.__height = height;
            engine.__bgcolor = bgcolor;
            engine.__input = new Input(engine);

            engine.frameRate(60);
            engine.noStroke();

            engine.background(bgcolor);

            object_collection.forEach((sprite) => {
                if (sprite.start) sprite.start(engine);
            });
        };

        engine.draw = function () {
            engine.clear();
            engine.background(bgcolor);

            const dt = engine.deltaTime / 1000;

            object_collection.forEach((sprite) => {
                if (sprite.update) sprite.update(engine, dt);
            });

            object_collection.forEach((sprite) => {
                if (sprite.draw) sprite.draw(engine);
            });
        };
    });
}
