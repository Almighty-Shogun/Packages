declare global {
    interface Number {
        equals(value: number): boolean;
        isInRange(min: number, max: number): boolean;
    }
}

Number.prototype.equals = function (this: number, value: number): boolean {
    return this === value;
}

Number.prototype.isInRange = function (this: number, min: number, max: number): boolean {
    return this >= min && this <= max;
}

export {};
