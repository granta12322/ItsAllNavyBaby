describe("Vessel", () => {
    describe("setTurnRate", () => {
        it("should set the turn rate to the given value if it is within the max turn rate", () => {
            const engine = new Engine(100)
            const vessel = new Vessel(engine, 0, 0, 100, 10)
            vessel.setTurnRate(5)
            expect(vessel.currentTurnRate).toEqual(5)
        })

        it("should set the turn rate to the max turn rate if the given value is too high", () => {
            const engine = new Engine(100)
            const vessel = new Vessel(engine, 0, 0, 100, 10)
            vessel.setTurnRate(15)
            expect(vessel.currentTurnRate).toEqual(10)
        })

        it("should set the turn rate to the negative max turn rate if the given value is too low", () => {
            const engine = new Engine(100)
            const vessel = new Vessel(engine, 0, 0, 100, 10)
            vessel.setTurnRate(-15)
            expect(vessel.currentTurnRate).toEqual(-10)
        })
    })
})