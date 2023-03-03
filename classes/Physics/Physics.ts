import 'Math'
class Velocity {
    magnitude = 0
    bearing = 0

    constructor(){
    }

    changeMagnitude(a: number, dt: number) {
        this.magnitude += a * dt
    }

    changeBearing(turnRate: number, dt: number) {
        this.bearing += (turnRate * dt % 360)

    }
}

class Position {
    x: number
    y: number

    constructor(x:number,y: number){
        this.x = x
        this.y = y
    }

    changePosition(v: Velocity, dt: number) {
        this.x +=  v.magnitude * Math.sin(v.bearing) * dt
        this.y +=  v.magnitude * Math.cos(v.bearing) * dt

    }
}
export default class Physics {
    s: Position
    v: Velocity
    turnRate: number = 0

    constructor(initialX: number, initialY: number) {
        this.s  = new Position(initialX, initialY)
        this.v = new Velocity()
    }

    update(dt: number, engineForce: number, drag: number, mass: number, turnRate: number) {
        const resultantForce = engineForce - drag
        const acceleration = resultantForce / mass
        this.s.changePosition(this.v,dt)
        this.v.changeMagnitude(acceleration,dt)
        this.v.changeBearing(turnRate,dt)
    }


}






