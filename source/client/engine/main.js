import { Input } from './input.js';
import { Vector } from './vector.js';

export class EngineProcess {
    constructor(mainClass) {
        const engine = this;
        this.collection = new Map();

        this.p5 = new p5(function (p5) {
            p5.setup = function () {
                engine.canvas = p5.createCanvas(600, 600);
                engine.pivot = new Vector(300, 300);
                engine.input = new Input(p5);
                engine.background = '#fff';

                p5.frameRate(60);
                p5.noStroke();
                p5.background(engine.background);

                new mainClass(engine);
            };

            p5.draw = function () {
                p5.clear();
                p5.background(engine.background);

                const dt = p5.deltaTime / 1000;

                engine.collection.forEach((obj) => obj.update(dt));

                engine.collection.forEach((obj) => obj.render());
            };
        });
    }
}
