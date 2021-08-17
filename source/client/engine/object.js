export class EngineObject {
    constructor(engine) {
        this.id = engine.collection.size;
        engine.collection.set(this.id, this);

        this.update = () => {};
        this.render = () => {};

        this.destroy = () => engine.collection.delete(this.id);
    }
}
