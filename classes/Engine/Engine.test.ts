describe('Engine', () => {
    let engine: Engine;
  
    beforeEach(() => {
      engine = new Engine(100, -20);
    });
  
    it('should create an engine with default values', () => {
      expect(engine.maxPower).toBe(100);
      expect(engine.minPower).toBe(-20);
      expect(engine.currentPower).toBe(0);
    });
  
    it('should set power to a valid value', () => {
      engine.setPower(50);
      expect(engine.currentPower).toBe(50);
    });
  
    it('should set power to the maximum value if it exceeds the maximum', () => {
      engine.setPower(200);
      expect(engine.currentPower).toBe(100);
    });
  
    it('should set power to the minimum value if it is less than the minimum', () => {
      engine.setPower(-50);
      expect(engine.currentPower).toBe(-20);
    });
  
    it('should throw an error if the power exceeds the maximum value', () => {
      expect(() => {
        engine.setPower(200);
      }).toThrowError('Power cannot go that high');
    });
  
    it('should throw an error if the power is less than the minimum value', () => {
      expect(() => {
        engine.setPower(-50);
      }).toThrowError('Power cannot go that low');
    });
  });
  