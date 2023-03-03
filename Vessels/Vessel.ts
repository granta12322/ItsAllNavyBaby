import Physics from '../classes/Physics/Physics'

enum depth {
    "air",
    "surface",
    "shallow",
    "deep"
}

export default class Vessel {

    physics: Physics
    engine: Engine
    mass: number
    maxTurnRate: number
    currentTurnRate: number
    minSpeed: number
    depth: depth 

    constructor(engine: Engine, 
            initialX: number, initialY: number,
            mass: number,
            maxTurnRate: number,
            minimumSpeed:number = 0,
            turnRate: number = 0,
            canDive: boolean = false) {
        this.engine = engine
        this.physics = new Physics(initialX=initialX, initialY = initialY)
        this.maxTurnRate = maxTurnRate
        this.minSpeed = minimumSpeed
        this.currentTurnRate = turnRate
    }
    
    setTurnRate(turnRate: number) {
        if (Math.abs(turnRate) > this.maxTurnRate) {
            this.currentTurnRate = this.maxTurnRate * turnRate / Math.abs(turnRate)
            throw new Error("Turn rate cannot go that high")
        }
        this.currentTurnRate = turnRate
    }

    }
    


    
}