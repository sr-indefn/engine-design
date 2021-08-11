export class Vector {
    constructor(x, y) {
        if (typeof y === 'undefined') y = x;

        this.x = x;
        this.y = y;
    }

    static Z() {
        return new Vector(0, 0);
    }

    static I() {
        return new Vector(1, 0);
    }

    static J() {
        return new Vector(0, 1);
    }

    add(other) {
        return new Vector(this.x + other.x, this.y + other.y);
    }

    sub(other) {
        return new Vector(this.x - other.x, this.y - other.y);
    }

    mul(num) {
        return new Vector(this.x * num, this.y * num);
    }

    div(num) {
        return new Vector(this.x / num, this.y / num);
    }

    dup() {
        return new Vector(this.x, this.y);
    }

    eql(other) {
        return this.x == other.x && this.y == other.y;
    }

    mag() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    nrm() {
        return new Vector(this.x / this.mag(), this.y / this.mag());
    }
}
