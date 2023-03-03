class Engine {
    maxPower: number = 100
    minPower: number = -20
    currentPower: number = 0

    constructor(maxPower: number, minPower: number) {
        this.maxPower = maxPower
        this.minPower = minPower
    }

    setPower(power: number) {
        if (power > this.maxPower) {
            this.currentPower = this.maxPower
            throw new Error("Power cannot go that high")
        }
        if(power < this.minPower) {
            this.currentPower = this.minPower
            throw new Error("Power cannot go that low")
        }
        this.currentPower = power
    }
}